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

/* Brown Bunny HPQ map 910010100/910010200
Coded by Kars & OdinMS taxi maker
Last Edit by Frantier from Dev-OdinMS and RageZone
*/

var status = 0;
var maps = Array(100000200, 910010200);
var cost = Array(0, 1000);
var costBeginner = Array(0, 100);
var selectedMap = -1;
var job;

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("Alright, See you then!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("Hi, I am Tommy!");
		} else if (status == 1) {
			cm.sendNextPrev("I am in-charge of this place, #dThe Short-Cut!#k")
		} else if (status == 2) {
			var selStr = "So, where do you want to go? We have 90% discounts for #gBeginners!#k";
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				for (var i = 0; i < maps.length; i++) {
					selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + costBeginner[i] + " mesos)#l";
				}
			} else {
				for (var i = 0; i < maps.length; i++) {
					selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + cost[i] + " mesos)#l";
				}
			}
			cm.sendSimple(selStr);
		} else if (status == 3) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				if (cm.getMeso() < costBeginner[selection]) {
					cm.sendOk("You do not have enough mesos.")
					cm.dispose();
				} else {
					cm.sendYesNo("#b#m" + maps[selection] + "##k, Are you sure?");
					selectedMap = selection;
				}
			}
			else {
				if (cm.getMeso() < cost[selection]) {
					cm.sendOk("You do not have enough mesos.")
					cm.dispose();
				} else {
					cm.sendYesNo("#b#m" + maps[selection] + "##k, Are you sure?");
					selectedMap = selection;
				}
			}		
		} else if (status == 4) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.gainMeso(-costBeginner[selectedMap]);
			}
			else {
				cm.gainMeso(-cost[selectedMap]);
			}
			cm.warp(maps[selectedMap], 0);
			cm.dispose();
		}
	}
}	