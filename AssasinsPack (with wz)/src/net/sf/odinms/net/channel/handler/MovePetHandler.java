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

import java.awt.Point;
import java.util.Arrays;
import java.util.List;

import net.sf.odinms.client.MapleCharacter;
import net.sf.odinms.client.MapleClient;
import net.sf.odinms.client.MapleInventory;
import net.sf.odinms.client.MapleInventoryType;
import net.sf.odinms.server.MapleInventoryManipulator;
import net.sf.odinms.server.MapleItemInformationProvider;
import net.sf.odinms.server.maps.MapleMapItem;
import net.sf.odinms.server.maps.MapleMapObject;
import net.sf.odinms.server.maps.MapleMapObjectType;
import net.sf.odinms.server.movement.LifeMovementFragment;
import net.sf.odinms.tools.MaplePacketCreator;
import net.sf.odinms.tools.data.input.SeekableLittleEndianAccessor;
import net.sf.odinms.tools.data.input.StreamUtil;

public class MovePetHandler extends AbstractMovementPacketHandler {

	//private static org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(MovePetHandler.class);
    
	@Override
	public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
		int petId = slea.readInt();
		slea.readInt();
		@SuppressWarnings("Unused")
		Point startPos = StreamUtil.readShortPoint(slea);
		List<LifeMovementFragment> res = parseMovement(slea);

		MapleCharacter player = c.getPlayer();
		player.getMap().broadcastMessage(player, MaplePacketCreator.movePet(player.getId(), petId, res), false);
                
                Boolean meso = false;
                Boolean hpp = false;
                Boolean mpp = false;
                MapleInventory use = player.getInventory(MapleInventoryType.USE);
                MapleItemInformationProvider mii = MapleItemInformationProvider.getInstance();
                Boolean item = false;
                Boolean boots = false;
                 Boolean bino = false;
                if (c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).findById(1812001) != null) 
                        item = true;
                if (c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).findById(1812000) != null)
                        meso = true;
                 if (c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).findById(1812002) != null)
                        hpp = true;
                if (c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).findById(1812003) != null)
                        mpp = true;
                 if (c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).findById(1812004) != null)
                        boots = true;
                  if (c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).findById(1812005) != null)
                        bino = true;
                if (meso || item) {
                        List<MapleMapObject> objects = player.getMap().getMapObjectsInRange(player.getPosition(), MapleCharacter.MAX_VIEW_RANGE_SQ, Arrays.asList(MapleMapObjectType.ITEM));

                        for (LifeMovementFragment move : res) {
                                Point petPos = move.findPosition();
                                double petX = petPos.getX();
                                double petY = petPos.getY();
                                for (MapleMapObject map_object : objects) {
                                        Point objectPos = map_object.getPosition();
                                        double objectX = objectPos.getX();
                                        double objectY = objectPos.getY();
                                        if (Math.abs(petX - objectX) <= 30 || Math.abs(objectX - petX) <= 30) {
                                                if (Math.abs(petY - objectY) <= 30 || Math.abs(objectY - petY) <= 30) {
                                                        if (map_object instanceof MapleMapItem) {
                                                                MapleMapItem mapitem = (MapleMapItem)map_object;
                                                                synchronized (mapitem) {
                                                                        if (mapitem.isPickedUp() || mapitem.getOwner().getId() != player.getId()) {
                                                                                continue;
                                                                        }
                                                                        if (mapitem.getMeso() > 0 && meso) {
                                                                                c.getPlayer().gainMeso(mapitem.getMeso(), true, true);
                                                                                c.getPlayer().getMap().broadcastMessage(
                                                                                        MaplePacketCreator.removeItemFromMap(mapitem.getObjectId(), 5, c.getPlayer().getId(), true),
                                                                                        mapitem.getPosition());
                                                                                c.getPlayer().getMap().removeMapObject(map_object);
                                                                                mapitem.setPickedUp(true);
                                                                        } 
                                                                        else {
                                                                                if (item) {
                                                                                        StringBuilder logInfo = new StringBuilder("Picked up by ");
                                                                                        logInfo.append(c.getPlayer().getName());
                                                                                        if (MapleInventoryManipulator.addFromDrop(c, mapitem.getItem(), logInfo.toString())) {
                                                                                                c.getPlayer().getMap().broadcastMessage(
                                                                                                        MaplePacketCreator.removeItemFromMap(mapitem.getObjectId(), 5, c.getPlayer().getId(), true),
                                                                                                        mapitem.getPosition());
                                                                                                c.getPlayer().getMap().removeMapObject(map_object);
                                                                                                mapitem.setPickedUp(true);
                                                                                        } 
                                                                                }
                                                                        }
                                                                }
                                                        }                                         
                                                }
                                        }
                                }                        
                        }
                } if (boots && meso && item) {
                    List<MapleMapObject> objects = player.getMap().getMapObjectsInRange(player.getPosition(), MapleCharacter.MAX_VIEW_RANGE_SQ, Arrays.asList(MapleMapObjectType.ITEM));

                        for (LifeMovementFragment move : res) {
                                Point petPos = move.findPosition();
                                double petX = petPos.getX();
                                double petY = petPos.getY();
                                for (MapleMapObject map_object : objects) {
                                        Point objectPos = map_object.getPosition();
                                        double objectX = objectPos.getX();
                                        double objectY = objectPos.getY();
                                        if (Math.abs(petX - objectX) <= 200 || Math.abs(objectX - petX) <= 200) {
                                                if (Math.abs(petY - objectY) <= 200 || Math.abs(objectY - petY) <= 200) {
                                                        if (map_object instanceof MapleMapItem) {
                                                                MapleMapItem mapitem = (MapleMapItem)map_object;
                                                                synchronized (mapitem) {
                                                                        if (mapitem.isPickedUp() || mapitem.getOwner().getId() != player.getId()) {
                                                                                continue;
                                                                        }
                                                                        if (mapitem.getMeso() > 0 && meso) {
                                                                                c.getPlayer().gainMeso(mapitem.getMeso(), true, true);
                                                                                c.getPlayer().getMap().broadcastMessage(
                                                                                        MaplePacketCreator.removeItemFromMap(mapitem.getObjectId(), 5, c.getPlayer().getId(), true),
                                                                                        mapitem.getPosition());
                                                                                c.getPlayer().getMap().removeMapObject(map_object);
                                                                                mapitem.setPickedUp(true);
                                                                        } 
                                                                        else {
                                                                                if (item) {
                                                                                        StringBuilder logInfo = new StringBuilder("Picked up by ");
                                                                                        logInfo.append(c.getPlayer().getName());
                                                                                        if (MapleInventoryManipulator.addFromDrop(c, mapitem.getItem(), logInfo.toString())) {
                                                                                                c.getPlayer().getMap().broadcastMessage(
                                                                                                        MaplePacketCreator.removeItemFromMap(mapitem.getObjectId(), 5, c.getPlayer().getId(), true),
                                                                                                        mapitem.getPosition());
                                                                                                c.getPlayer().getMap().removeMapObject(map_object);
                                                                                                mapitem.setPickedUp(true);
                                                                                        } 
                                                                                }
                                                                        }
                                                                }
                                                        }                                         
                                                }
                                        }
                                }                        
                        } 
                } if (bino && boots && meso && item) {
                    List<MapleMapObject> objects = player.getMap().getMapObjectsInRange(player.getPosition(), MapleCharacter.MAX_VIEW_RANGE_SQ, Arrays.asList(MapleMapObjectType.ITEM));

                        for (LifeMovementFragment move : res) {
                                Point petPos = move.findPosition();
                                double petX = petPos.getX();
                                double petY = petPos.getY();
                                for (MapleMapObject map_object : objects) {
                                        Point objectPos = map_object.getPosition();
                                        double objectX = objectPos.getX();
                                        double objectY = objectPos.getY();
                                        if (Math.abs(petX - objectX) <= 270 || Math.abs(objectX - petX) <= 270) {
                                                if (Math.abs(petY - objectY) <= 270 || Math.abs(objectY - petY) <= 270) {
                                                        if (map_object instanceof MapleMapItem) {
                                                                MapleMapItem mapitem = (MapleMapItem)map_object;
                                                                synchronized (mapitem) {
                                                                        if (mapitem.isPickedUp() || mapitem.getOwner().getId() != player.getId()) {
                                                                                continue;
                                                                        }
                                                                        if (mapitem.getMeso() > 0 && meso) {
                                                                                c.getPlayer().gainMeso(mapitem.getMeso(), true, true);
                                                                                c.getPlayer().getMap().broadcastMessage(
                                                                                        MaplePacketCreator.removeItemFromMap(mapitem.getObjectId(), 5, c.getPlayer().getId(), true),
                                                                                        mapitem.getPosition());
                                                                                c.getPlayer().getMap().removeMapObject(map_object);
                                                                                mapitem.setPickedUp(true);
                                                                        } 
                                                                        else {
                                                                                if (item) {
                                                                                        StringBuilder logInfo = new StringBuilder("Picked up by ");
                                                                                        logInfo.append(c.getPlayer().getName());
                                                                                        if (MapleInventoryManipulator.addFromDrop(c, mapitem.getItem(), logInfo.toString())) {
                                                                                                c.getPlayer().getMap().broadcastMessage(
                                                                                                        MaplePacketCreator.removeItemFromMap(mapitem.getObjectId(), 5, c.getPlayer().getId(), true),
                                                                                                        mapitem.getPosition());
                                                                                                c.getPlayer().getMap().removeMapObject(map_object);
                                                                                                mapitem.setPickedUp(true);
                                                                                        } 
                                                                                }
                                                                        }
                                                                }
                                                        }                                         
                                                }
                                        }
                                }                        
                        } 
              if (hpp || mpp) {
                    if (hpp) {
                        if (player.getHp() < player.getAuto("hp"))
                                if (player.haveItem(2020013)) {
                                    MapleInventoryManipulator.removeById(c, MapleItemInformationProvider.getInstance().getInventoryType(2020013), 2020013, 1, true, false);
                                    mii.getItemEffect(2020013).applyTo(c.getPlayer());
                                }
                    }
                    
                    if (mpp) {
                        if (player.getMp() < player.getAuto("mp"))
                                if (player.haveItem(2020015)) {
                                    MapleInventoryManipulator.removeById(c, MapleItemInformationProvider.getInstance().getInventoryType(2020015), 2020015, 1, true, false);
                                    mii.getItemEffect(2020015).applyTo(c.getPlayer());
                                }
                    }
                    
                }
	}
}
}