/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

package net.sf.odinms.net.channel.handler;

import java.rmi.RemoteException;
import java.sql.SQLException;
import java.util.Collection;

import net.sf.odinms.client.BuddylistEntry;
import net.sf.odinms.client.CharacterNameAndId;
import net.sf.odinms.client.MapleCharacter;
import net.sf.odinms.client.MapleClient;
import net.sf.odinms.client.MapleQuestStatus;
import net.sf.odinms.client.SkillFactory;
import net.sf.odinms.net.AbstractMaplePacketHandler;
import net.sf.odinms.net.channel.ChannelServer;
import net.sf.odinms.net.world.CharacterIdChannelPair;
import net.sf.odinms.net.world.MaplePartyCharacter;
import net.sf.odinms.net.world.PartyOperation;
import net.sf.odinms.net.world.remote.WorldChannelInterface;
import net.sf.odinms.tools.MaplePacketCreator;
import net.sf.odinms.tools.data.input.SeekableLittleEndianAccessor;
import net.sf.odinms.client.MaplePet;
import net.sf.odinms.client.MapleStat;
import net.sf.odinms.provider.MapleData;
import net.sf.odinms.provider.MapleDataProviderFactory;
import net.sf.odinms.provider.MapleDataTool;
import net.sf.odinms.tools.Pair;
import net.sf.odinms.client.MapleInventoryType;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import net.sf.odinms.database.DatabaseConnection;
import java.util.List;
import java.io.File;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PlayerLoggedinHandler extends AbstractMaplePacketHandler {
	private static final Logger log = LoggerFactory.getLogger(PlayerLoggedinHandler.class);

	@Override
	public boolean validateState(MapleClient c) {
		return !c.isLoggedIn();
	}

	@Override
	public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
		int cid = slea.readInt();
		MapleCharacter player = null;
		try {
			player = MapleCharacter.loadCharFromDB(cid, c, true);
			c.setPlayer(player);
		} catch (SQLException e) {
			log.error("Loading the char failed", e);
		}
		c.setAccID(player.getAccountID());
		int state = c.getLoginState();
		boolean allowLogin = true;
		ChannelServer channelServer = c.getChannelServer();
		synchronized (this) {
			try {
				WorldChannelInterface worldInterface = channelServer.getWorldInterface();
				if (state == MapleClient.LOGIN_SERVER_TRANSITION) {
					for (String charName : c.loadCharacterNames(c.getWorld())) {
						if (worldInterface.isConnected(charName)) {
							log.warn(MapleClient.getLogMessage(player, "Attempting to doublelogin with " + charName));
							allowLogin = false;
							break;
						}
					}
				}
			} catch (RemoteException e) {
				channelServer.reconnectWorld();
				allowLogin = false;
			}
			if (state != MapleClient.LOGIN_SERVER_TRANSITION || !allowLogin) {
				c.setPlayer(null); //REALLY prevent the character from getting deregistered as it is not registered
				c.getSession().close();
				return;
			}
			c.updateLoginState(MapleClient.LOGIN_LOGGEDIN);
		}
		
		ChannelServer cserv = ChannelServer.getInstance(c.getChannel());
		cserv.addPlayer(player);
		
		c.getSession().write(MaplePacketCreator.getCharInfo(player));
		if (player.isGM()) {
			// GM gets super haste when logging in
			SkillFactory.getSkill(5101004).getEffect(1).applyTo(player);
		}
		player.getMap().addPlayer(player);
				
				if (player.isGM()) {
			// GM gets super haste when logging in
			SkillFactory.getSkill(5101001).getEffect(1).applyTo(player);
		}
		player.getMap().addPlayer(player);
		
		try {
			Collection<BuddylistEntry> buddies = player.getBuddylist().getBuddies();
			int buddyIds[] = player.getBuddylist().getBuddyIds();
			
			cserv.getWorldInterface().loggedOn(player.getName(), player.getId(), c.getChannel(), buddyIds);
			if (player.getParty() != null) {
				channelServer.getWorldInterface().updateParty(player.getParty().getId(), PartyOperation.LOG_ONOFF, new MaplePartyCharacter(player));
			}
			
			CharacterIdChannelPair[] onlineBuddies = cserv.getWorldInterface().multiBuddyFind(player.getId(), buddyIds);
			for (CharacterIdChannelPair onlineBuddy : onlineBuddies) {
				BuddylistEntry ble = player.getBuddylist().get(onlineBuddy.getCharacterId());
				ble.setChannel(onlineBuddy.getChannel());
				player.getBuddylist().put(ble);
			}
			c.getSession().write(MaplePacketCreator.updateBuddylist(buddies));
			
			if (player.getGuildId() > 0)
			{
				c.getChannelServer().getWorldInterface().setGuildMemberOnline(
						player.getMGC(), true, c.getChannel());
				c.getSession().write(MaplePacketCreator.showGuildInfo(player));
			}
		} catch (RemoteException e) {
			log.info("REMOTE THROW", e);
			channelServer.reconnectWorld();
		}
		player.updatePartyMemberHP();
		
		player.sendKeymap();
		
		for (MapleQuestStatus status : player.getStartedQuests()) {
			if (status.hasMobKills()) {
				c.getSession().write(MaplePacketCreator.updateQuestMobKills(status));
			}
		}
		
		CharacterNameAndId pendingBuddyRequest = player.getBuddylist().pollPendingRequest();
		if (pendingBuddyRequest != null) {
			player.getBuddylist().put(new BuddylistEntry(pendingBuddyRequest.getName(), pendingBuddyRequest.getId(), -1, false));
			c.getSession().write(MaplePacketCreator.requestBuddylistAdd(pendingBuddyRequest.getId(), pendingBuddyRequest.getName()));
		}
                
                player.checkMessenger();
	int petid = -1;
                byte petpos = 0x00;
                try {
                    Connection con = DatabaseConnection.getConnection(); // Get a connection to the database
                    PreparedStatement ps = con.prepareStatement("SELECT petid, petpos FROM characters WHERE id = ? LIMIT 1"); // Get pet details..
                    ps.setInt(1, c.getPlayer().getId());
                    ResultSet rs = ps.executeQuery();
                    if(rs.next())
                    {
                        petpos = (byte)rs.getInt("petpos");
                        petid = rs.getInt("petid");
                    } // else something happened, just leave it
                } catch (SQLException e) {} // no pet or something messed up, leave it
                    
                if (c.getPlayer().getPet() == null && petid != -1 && petid != 0 && !c.getPlayer().isHidden()) {

            // New instance of MaplePet - using the item ID and unique pet ID
                    try{
            MaplePet pet = MaplePet.loadFromDb(c.getPlayer().getInventory(MapleInventoryType.CASH).getItem(petpos).getItemId(), petpos, c.getPlayer().getInventory(MapleInventoryType.CASH).getItem(petpos).getPetId());

            // Assign the pet to the player, set stats
            c.getPlayer().setPet(pet);        
            
            log.info("showPet: {}", MaplePacketCreator.showPet(c.getPlayer(), c.getPlayer().getPet()));
            
            // Broadcast packet to the map...
            c.getPlayer().getMap().broadcastMessage(c.getPlayer(), MaplePacketCreator.showPet(c.getPlayer(), c.getPlayer().getPet()), true, this, MaplePacketCreator.removePlayerFromMap(getId()));
           
            // Find the pet's unique ID
            int uniqueid = c.getPlayer().getPet().getUniqueId();

            // Make a new List for the stat update
            List<Pair<MapleStat, Integer>> stats = new ArrayList<Pair<MapleStat, Integer>>();
            stats.add(new Pair<MapleStat, Integer>(MapleStat.PET, Integer.valueOf(uniqueid)));
            
            log.info("statUpdate1: {}", MaplePacketCreator.updatePlayerStats(stats, false, true));
            log.info("statUpdate2: {}", MaplePacketCreator.enableActions());

            // Write the stat update to the player...
            c.getSession().write(MaplePacketCreator.updatePlayerStats(stats, false, true));
            c.getSession().write(MaplePacketCreator.enableActions());

            // Get the data
            MapleData petData = MapleDataProviderFactory.getDataProvider(new File(System.getProperty("net.sf.odinms.wzpath") + "/Item.wz")).getData("Pet/" + String.valueOf(pet.getItemId()) + ".img");
            MapleData hungerData = petData.getChildByPath("info/hungry");

            // Start the fullness schedule
            c.getPlayer().startFullnessSchedule(MapleDataTool.getInt(hungerData));
                    } catch (Exception e) {
                        log.info("FIXME: Get the new position of pet when saving the char");
                    } // they changed the position of the pet in the cash tab :/ FIXME <--

        }
}

    private int getId() {
        throw new UnsupportedOperationException("Not yet implemented");
    }

    private Object getMap() {
        throw new UnsupportedOperationException("Not yet implemented");
    }
}
