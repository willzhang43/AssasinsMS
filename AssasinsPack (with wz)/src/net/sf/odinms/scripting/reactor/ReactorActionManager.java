/*
 * This file is part of the OdinMS Maple Story Server
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

package net.sf.odinms.scripting.reactor;

import java.awt.Point;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

import net.sf.odinms.client.Equip;
import net.sf.odinms.client.IItem;
import net.sf.odinms.client.Item;
import net.sf.odinms.client.MapleClient;
import net.sf.odinms.client.MapleInventoryType;
import net.sf.odinms.net.channel.ChannelServer;
import net.sf.odinms.scripting.AbstractPlayerInteraction;
import net.sf.odinms.server.MapleItemInformationProvider;
import net.sf.odinms.server.life.MapleLifeFactory;
import net.sf.odinms.server.life.MapleMonster;
import net.sf.odinms.server.life.MapleNPC;
import net.sf.odinms.server.life.MapleMonsterInformationProvider.DropEntry;
import net.sf.odinms.server.maps.MapleReactor;
import net.sf.odinms.tools.MaplePacketCreator;
import net.sf.odinms.server.MaplePortal;
import net.sf.odinms.server.maps.MapleMap;
import net.sf.odinms.server.maps.MapleMapMonitor;
import net.sf.odinms.server.maps.BossMapMonitor;
import net.sf.odinms.server.maps.SBossMapMonitor;

/**
 * @author Lerk
 */

public class ReactorActionManager extends AbstractPlayerInteraction {
	// private static final Logger log = LoggerFactory.getLogger(ReactorActionManager.class);

	private MapleReactor reactor;

	 public ReactorActionManager(MapleClient c, MapleReactor reactor) {
    	 super(c);
    	 this.reactor = reactor;
   	}

	// only used for meso = false, really. No minItems because meso is used to fill the gap
	public void dropItems() {
		dropItems(false, 0, 0, 0, 0);
	}

	public void dropItems(boolean meso, int mesoChance, int minMeso, int maxMeso) {
		dropItems(meso, mesoChance, minMeso, maxMeso, 0);
	}

	public void dropItems(boolean meso, int mesoChance, int minMeso, int maxMeso, int minItems) {
		List<DropEntry> chances = getDropChances();
		List<DropEntry> items = new LinkedList<DropEntry>();
		int numItems = 0;

		if (meso && Math.random() < (1 / (double) mesoChance)) {
			items.add(new DropEntry(0, mesoChance));
		}

		// narrow list down by chances
		Iterator<DropEntry> iter = chances.iterator();
		// for (DropEntry d : chances){
		while (iter.hasNext()) {
			DropEntry d = (DropEntry) iter.next();
			if (Math.random() < (1 / (double) d.chance)) {
				numItems++;
				items.add(d);
			}
		}

		// if a minimum number of drops is required, add meso
		while (items.size() < minItems) {
			items.add(new DropEntry(0, mesoChance));
			numItems++;
		}

		// randomize drop order
		java.util.Collections.shuffle(items);

		final Point dropPos = reactor.getPosition();

		dropPos.x -= (12 * numItems);

		for (DropEntry d : items) {
			if (d.itemId == 0) {
				int range = maxMeso - minMeso;
				int displayDrop = (int) (Math.random() * range) + minMeso;
				int mesoDrop = (int) (displayDrop * ChannelServer.getInstance(getClient().getChannel()).getExpRate());
				reactor.getMap().spawnMesoDrop(mesoDrop, displayDrop, dropPos, reactor, getPlayer(), meso);
			} else {
				IItem drop;
				MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
				if (ii.getInventoryType(d.itemId) != MapleInventoryType.EQUIP) {
					drop = new Item(d.itemId, (byte) 0, (short) 1);
				}
				else {
					drop = ii.randomizeStats((Equip) ii.getEquipById(d.itemId));
				}
				reactor.getMap().spawnItemDrop(reactor, getPlayer(), drop, dropPos, false, true);
			}
			dropPos.x += 25;

		}
	}

	private List<DropEntry> getDropChances() {
		return ReactorScriptManager.getInstance().getDrops(reactor.getId());
	}

	// summon one monster on reactor location
   	public int spawnMonster(int id) {
    	int[] mobId=spawnMonster(id, 1, getPosition());
    	return mobId[0];
   	}

	// summon one monster, remote location
   public int spawnMonster(int id, int x, int y) {
       int mobId[]=spawnMonster(id, 1, new Point(x, y));
    return mobId[0];
   }

	 // multiple monsters, reactor location
   public int[] spawnMonster(int id, int qty) {
    return spawnMonster(id, qty, getPosition());
   }

	// multiple monsters, remote location
   public int[] spawnMonster(int id, int qty, int x, int y) {
    return spawnMonster(id, qty, new Point(x, y));
   }

	// handler for all spawnMonster
   private int[] spawnMonster(int id, int qty, Point pos) {
       int[] mObjId=new int[qty];
    for (int i = 0; i < qty; i++) {
        MapleMonster mob = MapleLifeFactory.getMonster(id);
        mObjId[i]=reactor.getMap().spawnMonsterOnGroudBelow(mob, pos);
    }
    return mObjId;
   }

	public void killMonster(int id, boolean withDrops)
   {
       reactor.getMap().killMonster(reactor.getMap().getMonsterByOid(id),getPlayer(),withDrops);
   }
	
	// returns slightly above the reactor's position for monster spawns
	public Point getPosition() {
		Point pos = reactor.getPosition();
		pos.y -= 10;
		return pos;
	}

	/**
	 * Spawns an NPC at the reactor's location
	 * @param [Int] npcId
	 */
	public void spawnNpc(int npcId){
		spawnNpc(npcId, getPosition());
	}
	
	/**
	 * Spawns an NPC at a custom position
	 * @param [Int] npcId
	 * @param [Int] X
	 * @param [Int] Y
	 */
	public void spawnNpc(int npcId, int x, int y){
		spawnNpc(npcId, new Point(x,y));
	}
	
	/**
	 * Spawns an NPC at a custom position
	 * @param [Int] npcId
	 * @param [Point] pos
	 */
	public void spawnNpc(int npcId, Point pos){
		MapleNPC npc = MapleLifeFactory.getNPC(npcId);
		if (npc != null && !npc.getName().equals("MISSINGNO")){
			npc.setPosition(pos);
			npc.setCy(pos.y);
			npc.setRx0(pos.x + 50);
			npc.setRx1(pos.x - 50);
			npc.setFh(reactor.getMap().getFootholds().findBelow(pos).getId());
			npc.setCustom(true);
			reactor.getMap().addMapObject(npc);  
			reactor.getMap().broadcastMessage(MaplePacketCreator.spawnNPC(npc, false));
		}
	}
	
	public MapleReactor getReactor() {
		return reactor;
	}

	public void closePortal(int mapid,String pName)
   {
       getClient().getChannelServer().getMapFactory().getMap(mapid).getPortal(pName).setPortalState(MaplePortal.CLOSE);
   }

   public void openPortal(int mapid,String pName)
   {
       getClient().getChannelServer().getMapFactory().getMap(mapid).getPortal(pName).setPortalState(MaplePortal.OPEN);
   }

   public void closeDoor(int mapid)
   {
       getClient().getChannelServer().getMapFactory().getMap(mapid).setReactorState();
   }

   public void openDoor(int mapid)
   {
       getClient().getChannelServer().getMapFactory().getMap(mapid).resetReactors();
   }

	public void createMapMonitor(int type,int pMapId,String pName,String sMobId)
   {
       switch(type)
       {
           case MapleMapMonitor.BOSS_MAP:
                createMapMonitor(type,pMapId,pName);
               break;
           case MapleMapMonitor.SBOSS_MAP:
               MapleMap pMap=getClient().getChannelServer().getMapFactory().getMap(pMapId);
               MaplePortal portal=pMap.getPortal(pName);
               String[] st=sMobId.split(",");
               int[] data=new int[st.length];
               for(int i=0;i<st.length;i++)
               {
                   data[i]=Integer.parseInt(st[i]);
               }
               SBossMapMonitor sbmm=new SBossMapMonitor(getPlayer().getMap(),pMap,portal,data,getClient().getChannelServer());
               sbmm.start();     
               break;
       }
   }  

   public void createMapMonitor(int type,int pMapId,String pName)
   {
       switch(type)
       {
           case MapleMapMonitor.BOSS_MAP:
               MapleMap pMap=getClient().getChannelServer().getMapFactory().getMap(pMapId);
               MaplePortal portal=pMap.getPortal(pName);
               BossMapMonitor bmm=new BossMapMonitor(getPlayer().getMap(),pMap,portal);
               bmm.start();
               break;
       }
   }
}
