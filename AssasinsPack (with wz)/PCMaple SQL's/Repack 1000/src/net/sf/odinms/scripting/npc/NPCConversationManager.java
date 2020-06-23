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

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sf.odinms.scripting.npc;

import java.util.LinkedList;
import java.util.List;

import net.sf.odinms.client.IItem;
import net.sf.odinms.client.Item;
import net.sf.odinms.client.MapleCharacter;
import net.sf.odinms.client.MapleClient;
import net.sf.odinms.client.MapleInventory;
import net.sf.odinms.client.MapleInventoryType;
import net.sf.odinms.client.MapleJob;
import net.sf.odinms.client.MapleSkinColor;
import net.sf.odinms.client.MapleStat;
import net.sf.odinms.client.SkillFactory;
import net.sf.odinms.net.world.guild.MapleGuild;
import net.sf.odinms.scripting.AbstractPlayerInteraction;
import net.sf.odinms.scripting.event.EventManager;
import net.sf.odinms.server.MapleInventoryManipulator;
import net.sf.odinms.server.MapleItemInformationProvider;
import net.sf.odinms.server.MapleShopFactory;
import net.sf.odinms.server.quest.MapleQuest;
import net.sf.odinms.tools.MaplePacketCreator;
import net.sf.odinms.client.MaplePet;
import net.sf.odinms.client.ExpTable; 

/**
 *
 * @author Matze
 */
public class NPCConversationManager extends AbstractPlayerInteraction {
	private int npc;
	private String getText;
	private MaplePet pet = getPlayer().getPet();

	public NPCConversationManager(MapleClient c, int npc) {
		super(c);
		this.npc = npc;
	}

	public void dispose() {
		NPCScriptManager.getInstance().dispose(this);
	}
	
	public void gainCloseness(int closeness) {
        if (pet.getCloseness() < 30000 || pet.getLevel() < 30) {
            if ((pet.getCloseness() + closeness) > 30000) {
                pet.setCloseness(30000);
            } else {
                pet.setCloseness(pet.getCloseness() + closeness);
            }
            while (pet.getCloseness() > ExpTable.getClosenessNeededForLevel(pet.getLevel()+1)) {
                pet.setLevel(pet.getLevel()+1);
                getClient().getSession().write(MaplePacketCreator.showPetLevelUp());
            }
            getPlayer().getClient().getSession().write(MaplePacketCreator.updatePet(pet.getPosition(), pet.getItemId(), pet.getUniqueId(), pet.getName(), pet.getLevel(), pet.getCloseness(), pet.getFullness(), true));
                }
        }  
      

	public void sendNext(String text) {
		getClient().getSession().write(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "00 01"));
	}

	public void sendPrev(String text) {
		getClient().getSession().write(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "01 00"));
	}

	public void sendNextPrev(String text) {
		getClient().getSession().write(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "01 01"));
	}

	public void sendOk(String text) {
		getClient().getSession().write(MaplePacketCreator.getNPCTalk(npc, (byte) 0, text, "00 00"));
	}

	public void sendYesNo(String text) {
		getClient().getSession().write(MaplePacketCreator.getNPCTalk(npc, (byte) 1, text, ""));
	}

	public void sendAcceptDecline(String text) {
		getClient().getSession().write(MaplePacketCreator.getNPCTalk(npc, (byte) 2, text, ""));
	}

	public void sendSimple(String text) {
		getClient().getSession().write(MaplePacketCreator.getNPCTalk(npc, (byte) 5, text, ""));
	}

	public void sendStyle(String text, int styles[]) {
		getClient().getSession().write(MaplePacketCreator.getNPCTalkStyle(npc, text, styles));
	}

	public void sendGetNumber(String text, int def, int min, int max) {
		getClient().getSession().write(MaplePacketCreator.getNPCTalkNum(npc, text, def, min, max));
	}

	public void sendGetText(String text) {
		getClient().getSession().write(MaplePacketCreator.getNPCTalkText(npc, text));
	}

	public void setGetText(String text) {
		this.getText = text;
	}

	public String getText() {
		return this.getText;
	}

	public void openShop(int id) {
		MapleShopFactory.getInstance().getShop(id).sendShop(getClient());
	}

	public void changeJob(MapleJob job) {
		getPlayer().changeJob(job);
	}

	public MapleJob getJob() {
		return getPlayer().getJob();
	}

	public void startQuest(int id) {
		MapleQuest.getInstance(id).start(getPlayer(), npc);
	}

	public void completeQuest(int id) {
		MapleQuest.getInstance(id).complete(getPlayer(), npc);
	}

	public void forfeitQuest(int id) {
		MapleQuest.getInstance(id).forfeit(getPlayer());
	}

	/**
	 * use getPlayer().getMeso() instead
	 * @return
	 */
	@Deprecated
	public int getMeso() {
		return getPlayer().getMeso();
	}
	
	public void gainNX(int nxcash) {
        getPlayer().gainNX(nxcash);
	}

	
	public void gainMeso(int gain) {
		getPlayer().gainMeso(gain, true, false, true);
	}

	public void gainExp(int gain) {
		getPlayer().gainExp(gain, true, true);
	}

	public int getNpc() {
		return npc;
	}

	/**
	 * use getPlayer().getLevel() instead
	 * @return
	 */
	@Deprecated
	public int getLevel() {
		return getPlayer().getLevel();
	}

	public void unequipEverything() {
		MapleInventory equipped = getChar().getInventory(MapleInventoryType.EQUIPPED);
		MapleInventory equip = getChar().getInventory(MapleInventoryType.EQUIP);
		List<Byte> ids = new LinkedList<Byte>();
		for (IItem item : equipped.list()) {
			ids.add(item.getPosition());
		}
		for (byte id : ids) {
			MapleInventoryManipulator.unequip(getC(), id, equip.getNextFreeSlot());
		}
	}

	public void teachSkill(int id, int level, int masterlevel) {
		getPlayer().changeSkillLevel(SkillFactory.getSkill(id), level, masterlevel);
	}
	
	public boolean isDonator() {
        return getPlayer().isDonator();
	}  

	/**
	 * Use getPlayer() instead (for consistency with MapleClient)
	 * @return
	 */
	@Deprecated
	public MapleCharacter getChar() {
		return getPlayer();
	}

	public MapleClient getC() {
		return getClient();
	}

	public void rechargeStars() {
		MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
		IItem stars = getChar().getInventory(MapleInventoryType.USE).getItem((byte) 1);
		if (ii.isThrowingStar(stars.getItemId())) {
			stars.setQuantity(ii.getSlotMax(stars.getItemId()));
			getC().getSession().write(MaplePacketCreator.updateInventorySlot(MapleInventoryType.USE, (Item) stars));
		}
	}

	public EventManager getEventManager(String event) {
		return getClient().getChannelServer().getEventSM().getEventManager(event);
	}
	
	public void showEffect(String effect) {
		getPlayer().getMap().broadcastMessage(MaplePacketCreator.showEffect(effect));
	}
	
	public void playSound(String sound) {
		getClient().getPlayer().getMap().broadcastMessage(MaplePacketCreator.playSound(sound));
	}

	public void setHair(int hair) {
		getPlayer().setHair(hair);
		getPlayer().updateSingleStat(MapleStat.HAIR, hair);
		getPlayer().equipChanged();
	}

	public void setFace(int face) {
		getPlayer().setFace(face);
		getPlayer().updateSingleStat(MapleStat.FACE, face);
		getPlayer().equipChanged();
	}

	public void setSkin(int color) {
		getPlayer().setSkinColor(MapleSkinColor.getById(color));
		getPlayer().updateSingleStat(MapleStat.SKIN, color);
		getPlayer().equipChanged();
	}

	public void updateBuddyCapacity(int capacity) {
		getPlayer().getBuddylist().setCapacity(capacity);
		getClient().getSession().write(MaplePacketCreator.updateBuddyCapacity(capacity));
	}
	
	public void displayGuildRanks()
	{
		MapleGuild.displayGuildRanks(getClient(), npc);
	}

	@Override
	public String toString() {
		return "Conversation with NPC: " + npc;
	}

	public void setLevel(int level) {
		getPlayer().setLevel(level);
		getPlayer().updateSingleStat(MapleStat.LEVEL, Integer.valueOf(level));
	}

	public void setFame(int fame) {
                getPlayer().setFame(fame);
                getPlayer().updateSingleStat(MapleStat.FAME, Integer.valueOf(fame));
        }

	public void gainFame(int fame) {
		getPlayer().gainFame(fame);
		getPlayer().updateSingleStat(MapleStat.FAME, Integer.valueOf(getPlayer().getFame()));
		getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(6, "You have gained (+" + fame +") fame."));
	        }
	public void modifyNX(int amount, int type) {
            getPlayer().modifyCSPoints(type, amount);
            if (amount > 0) {
                        getClient().getSession().write(MaplePacketCreator.serverNotice(5, "You have gained NX Cash (+" + amount +")."));
                 } else { 
                        getClient().getSession().write(MaplePacketCreator.serverNotice(5, "You have lost NX Cash (" + (amount) +")."));           
                 }
        }
	public int itemQuantity(int itemid) {
		MapleInventoryType type = MapleItemInformationProvider.getInstance().getInventoryType(itemid);
		MapleInventory iv = getPlayer().getInventory(type);
		int possesed = iv.countById(itemid);
		return possesed;
		} 
}
