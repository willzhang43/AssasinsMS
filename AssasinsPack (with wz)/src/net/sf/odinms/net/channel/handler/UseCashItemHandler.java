package net.sf.odinms.net.channel.handler;

import java.net.InetAddress;
import java.rmi.RemoteException;
import java.util.LinkedList;
import java.util.List;

import net.sf.odinms.client.ExpTable;
import net.sf.odinms.client.MaplePet;
import net.sf.odinms.client.MapleCharacter;
import net.sf.odinms.client.MapleClient;
import net.sf.odinms.client.MapleInventoryType;
import net.sf.odinms.client.messages.ServernoticeMapleClientMessageCallback;
import net.sf.odinms.net.AbstractMaplePacketHandler;
import net.sf.odinms.net.MaplePacket;
import net.sf.odinms.net.channel.ChannelServer;
import net.sf.odinms.net.world.remote.WorldLocation;
import net.sf.odinms.server.MapleInventoryManipulator;
import net.sf.odinms.server.MaplePortal;
import net.sf.odinms.server.MapleTrade;
import net.sf.odinms.tools.MaplePacketCreator;
import net.sf.odinms.tools.data.input.SeekableLittleEndianAccessor;
import net.sf.odinms.server.MapleItemInformationProvider;
import net.sf.odinms.server.maps.MapleMap;

public class UseCashItemHandler extends AbstractMaplePacketHandler {
	private static org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(UseCashItemHandler.class);
	
	@Override
	public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
		@SuppressWarnings("unused")
		byte mode = slea.readByte();
		slea.readByte();
		int itemId = slea.readInt();
		int itemType = itemId/10000;
                
                ChannelServer cserv = c.getChannelServer();
                
		MapleInventoryManipulator.removeById(c, MapleInventoryType.CASH, itemId, 1, true, false);
		try {
			if (itemType == 507){ 
				int megaType = itemId / 1000 % 10;
				if (megaType == 2) {
					c.getChannelServer().getWorldInterface().broadcastMessage(null, MaplePacketCreator.serverNotice(3, c.getChannel(), c.getPlayer().getName() +
						" : " + slea.readMapleAsciiString()).getBytes());
				}
			} else if (itemType == 539) {
				List<String> lines = new LinkedList<String>();
				for (int i = 0; i < 4; i++) {
					lines.add(slea.readMapleAsciiString());
				}
				c.getChannelServer().getWorldInterface().broadcastMessage(null, MaplePacketCreator.getAvatarMega(c.getPlayer(), c.getChannel(), itemId, lines).getBytes());
			} else if(itemType == 530) {
            MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            ii.getItemEffect(itemId).applyTo(c.getPlayer());
			} else if (itemType == 512) {
				MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();

				c.getPlayer().getMap().startMapEffect(ii.getMsg(itemId).replaceFirst("%s", c.getPlayer().getName()).replaceFirst("%s", slea.readMapleAsciiString()), itemId);
			} else if (itemType == 524) {
				if (c.getPlayer().getPet() == null) {
   					return;
			} else if(itemType == 504){ // vip teleport rock
                                byte rocktype;
				rocktype = slea.readByte();

                                if (rocktype == 0x00) {
        				int mapId = slea.readInt();
                                        MapleMap target = cserv.getMapFactory().getMap(mapId);
                                        MaplePortal targetPortal = target.getPortal(0);
                                       	if (target.getId() != 180000000 && target.getId() != 280030000 && target.getId() != 220080001 && target.getId() != 240060200 && target.getId() != 801040100 ) {
                        			c.getPlayer().changeMap(target, targetPortal);
                			} else {
                        			MapleInventoryManipulator.addById(c, itemId, (short)1, "Teleport Rock Error (Not found)");
                                		new ServernoticeMapleClientMessageCallback(1, c).dropMessage("Player could not be found.");
                                        	c.getSession().write(MaplePacketCreator.enableActions());
                                        }
                                } else {
        				String name = slea.readMapleAsciiString();
                			MapleCharacter victim = cserv.getPlayerStorage().getCharacterByName(name);
                        		if (victim != null) {
                                		MapleMap target = victim.getMap();
                                        	WorldLocation loc = c.getChannelServer().getWorldInterface().getLocation(name);
        					if (loc.map != 180000000 && loc.map != 280030000 && loc.map != 220080001 && loc.map != 240060200 && loc.map != 801040100 ) {
                				if (!victim.isHidden()) {
                        			c.getPlayer().changeMap(target, target.findClosestSpawnpoint(victim.getPosition()));
        					}else{
                					MapleInventoryManipulator.addById(c, itemId, (short)1, "Teleport Rock Error (Not found)");
        						new ServernoticeMapleClientMessageCallback(1, c).dropMessage("Player could not be found.");
                					c.getSession().write(MaplePacketCreator.enableActions());
        					}
                				}else{
        						MapleInventoryManipulator.addById(c, itemId, (short)1, "Teleport Rock Error (Can't Teleport)");
                					new ServernoticeMapleClientMessageCallback(1, c).dropMessage("You cannot teleport to this map.");
        						c.getSession().write(MaplePacketCreator.enableActions());
        					}
                			} else {
                       			MapleInventoryManipulator.addById(c, itemId, (short)1, "Teleport Rock Error (Not found)");
                               		new ServernoticeMapleClientMessageCallback(1, c).dropMessage("Player could not be found.");
                                        	c.getSession().write(MaplePacketCreator.enableActions());
                                       }
                               }
		}
				c.getPlayer().getPet().setFullness(100);
				c.getPlayer().getPet().setCloseness(c.getPlayer().getPet().getCloseness() + 100);
				c.getSession().write(MaplePacketCreator.updatePet(c.getPlayer().getPet().getPosition(), c.getPlayer().getPet().getItemId(), c.getPlayer().getPet().getUniqueId(), c.getPlayer().getPet().getName(), c.getPlayer().getPet().getLevel(), c.getPlayer().getPet().getCloseness(), c.getPlayer().getPet().getFullness(), true));
				//log.info("To be sent: {}", MaplePacketCreator.commandResponse(player.getId(), (byte) 1, true, true));
				c.getPlayer().getMap().broadcastMessage(c.getPlayer(), MaplePacketCreator.commandResponse(c.getPlayer().getId(), (byte) 1,  true, true), true);
				while (c.getPlayer().getPet().getCloseness() >= ExpTable.getClosenessNeededForLevel(c.getPlayer().getPet().getLevel())) {
					c.getPlayer().getPet().setLevel(c.getPlayer().getPet().getLevel()+1);
					c.getSession().write(MaplePacketCreator.updatePet(c.getPlayer().getPet().getPosition(), c.getPlayer().getPet().getItemId(), c.getPlayer().getPet().getUniqueId(), c.getPlayer().getPet().getName(), c.getPlayer().getPet().getLevel(), c.getPlayer().getPet().getCloseness(), c.getPlayer().getPet().getFullness(), true));
					c.getSession().write(MaplePacketCreator.showPetLevelUp());
				}
			} else if (itemType == 517) {
				if (c.getPlayer().getPet() == null) {
					return;
				}
				String newName = slea.readMapleAsciiString();
				c.getPlayer().getPet().setName(newName);
				MaplePet pet = c.getPlayer().getPet();
				c.getSession().write(MaplePacketCreator.updatePet(pet.getPosition(), pet.getItemId(), pet.getUniqueId(), newName, pet.getLevel(), pet.getCloseness(), pet.getFullness(), true));
				c.getPlayer().getMap().broadcastMessage(c.getPlayer(), MaplePacketCreator.changePetName(c, newName), true);
				MapleInventoryManipulator.removeById(c, MapleInventoryType.CASH, itemId, 1, true, false);
			}                                
		} catch (RemoteException e) {
			c.getChannelServer().reconnectWorld();
			log.error("REOTE TRHOW", e);
		}
	}
}