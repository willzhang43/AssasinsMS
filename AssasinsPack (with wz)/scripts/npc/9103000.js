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
if (!cm.isLeader()) { // not party leader
				cm.sendNext("Please tell your #bParty Leader#k to talk to me if you want your prize!");
				cm.dispose();
                        }
} else if (cm.isLeader()) { //party leader
			if (cm.itemQuantity(4000038) = 30) {
cm.givePartyExp(1500, party);
cm.gainItem(4001106,-30);
cm.warp(809050016, 0);								
cm.dispose();
} else if (cm.itemQuantity(4000038) = 50) {
cm.givePartyEXP(2500, party);
cm.gainItem(4001106,-50);
cm.warp(809050016, 0);
cm.dispose();
} else if (cm.itemQuantity(4000038) = 100) {
cm.givePartyEXP(5000, party);
cm.gainItem(4001106,-100);
cm.warp(809050016, 0);
cm.dispose();
} else if (cm.itemQuantity(4000038) = 150) {
cm.givePartyEXP(7500, party);
cm.gainItem(4001106,-150);
cm.warp(809050016, 0);
cm.dispose();
} else if (cm.itemQuantity(4000038) = 200) {
cm.givePartyEXP(10000, party);
cm.gainItem(4001106,-200);
cm.warp(809050016, 0);
cm.dispose();
} else if (cm.itemQuantity(4000038) = 250) {
cm.givePartyEXP(12500, party);
cm.gainItem(4001106,-250);
cm.warp(809050016, 0);
cm.dispose();
} else if (cm.itemQuantity(4000038) = 300) {
cm.givePartyEXP(15000, party);
cm.gainItem(4001106,-300);
cm.warp(809050016, 0);
cm.dispose();
} else {
cm.sendOk("You need atleast 30 copuns, #h ##k.");
cm.dispose();
}
}
}