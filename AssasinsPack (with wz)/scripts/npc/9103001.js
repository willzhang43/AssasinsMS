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

/* Rolly
 * 
 * Ossrya Island : Ludibruim (103000000)
 * 
 * Ludi Maze Party Quest NPC
*/

var status = 0;
var minLevel = 51;
var maxLevel = 70;
var minPlayers = 3;
var maxPlayers = 6;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			// Doesn't have any problems, Checks if you haev a party.
			if (cm.getParty() == null) { // no party
				cm.sendOk("Hey, hey, #h ##k. How about you get a party to challenge? I see you don't have a #rParty#k so you cannot enter. Get one, and let the #bParty Leader#k talk to me, Okay?");
				cm.dispose();
                                return;
			}
			if (!cm.isLeader()) { // not party leader
				cm.sendSimple("#h ##k, If you want to slove this quest please let your #bParty Leader#k talk to me, Okay?");
				cm.dispose();
                        }
			else {
				// check if all memmbers are levels 51-70, etc.
				var party = cm.getParty().getMembers();
				var mapId = cm.getChar().getMapId();
				var next = true;
				var levelValid = 0;
				var inMap = 0;
				// Temp removal for testing
				if (party.size() < minPlayers || party.size() > maxPlayers) 
					next = false;
				else {
					for (var i = 0; i < party.size() && next; i++) {
						if ((party.get(i).getLevel() >= minLevel) && (party.get(i).getLevel() <= maxLevel))
							levelValid += 1;
						if (party.get(i).getMapid() == mapId)
							inMap += 1;
					}
					if (levelValid < minPlayers || inMap < minPlayers)
						next = false;
				}
				if (next) {
					// Get in the quest!
					var em = cm.getEventManager("LudiMazePQ");
					if (em == null) {
						cm.sendOk("I am sorry, But the Maze PartyQuest is unavabalive.");
					}
					else {
						// Begin the PQ.
						em.startInstance(cm.getParty(),cm.getChar().getMap());
						// Remove the cupons
						party = cm.getChar().getEventInstance().getPlayers();
						cm.removeFromParty(4001008, party);
					}
					cm.dispose();
				}
				else {
					cm.sendOk("Wait, #h ##k. You are not a party of #r3 people - 6 people#k,  I see #b" + levelValid.toString() + " #kmembers are in the right level range, and #b" + inMap.toString() + "#k are in Ludibruim. If you think it's all correct, please log out and login again, Or remake the party.");
					cm.dispose();
				}
			}
		}
		else {
			cm.sendOk("Dialog is broken.");
			cm.dispose();
		}
	}
}
					
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

/* Rolly
 * 
 * 
Ossrya Island : Ludibruim (103000000)
 * 
 * Ludi Maze PartyQuest NPC
*/

var status = 0;
var minLevel = 51;
var maxLevel = 70;
var minPlayers = 3;
var maxPlayers = 6;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			// Nothing, Again, Checks if you have a party.
			if (cm.getParty() == null) { // no party
				cm.sendOk("Hey, hey, #h ##k. How about you get a party to challenge? I see you don't have a #rParty#k so you cannot enter. Get one, and let the #bParty Leader#k talk to me, Okay?");
				cm.dispose();
                                return;
			}
			if (!cm.isLeader()) { // not party leader
				cm.sendSimple("#h ##k, If you want to slove this quest please let your #bParty Leader#k talk to me, Okay?");
				cm.dispose();
                        }
			else {
				// check if everyone is level 51-70, etc.
				var party = cm.getParty().getMembers();
				var mapId = cm.getChar().getMapId();
				var next = true;
				var levelValid = 0;
				var inMap = 0;
				// Temp removal for testing
				if (party.size() < minPlayers || party.size() > maxPlayers) 
					next = false;
				else {
					for (var i = 0; i < party.size() && next; i++) {
						if ((party.get(i).getLevel() >= minLevel) && (party.get(i).getLevel() <= maxLevel))
							levelValid += 1;
						if (party.get(i).getMapid() == mapId)
							inMap += 1;
					}
					if (levelValid < minPlayers || inMap < minPlayers)
						next = false;
				}
				if (next) {
					// Kick it into action.  Lakelis says nothing here, just warps you in.
					var em = cm.getEventManager("LudiMazePQ");
					if (em == null) {
						cm.sendOk("I am sorry, But the Maze PartyQuest is unavabalive.");
					}
					else {
						// Begin the PQ.
						em.startInstance(cm.getParty(),cm.getChar().getMap());
						// Remove the cupons
						party = cm.getChar().getEventInstance().getPlayers();
						cm.removeFromParty(4001008, party);
					}
					cm.dispose();
				}
				else {
					cm.sendOk("Wait, #h ##k. You are not a party of #r3 people - 6 people#k,  I see #b" + levelValid.toString() + " #kmembers are in the right level range, and #b" + inMap.toString() + "#k are in Ludibruim. If you think it's all correct, please log out and login again, Or remake the party.");
					cm.dispose();
				}
			}
		}
		else {
			cm.sendOk("Dialog is broken.");
			cm.dispose();
		}
	}
}
					
