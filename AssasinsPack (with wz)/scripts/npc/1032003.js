/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
					   Matthias Butz <matze@odinms.de>
					   Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/* Shane
	- Ellinia (101000000)
*/

importPackage(net.sf.odinms.client);

var status = 0;
var check = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendOk("Alright, see you next time.");
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		}
		else {
			status--;
		}
		if (status == 0) {
			var cal = java.util.Calendar.getInstance();
			var time = cal.getTimeInMillis();
			var lastJQ = cm.grabJQ();
			if (lastJQ == true) {
				if (cm.getLevel() < 25) {
					cm.sendOk("You must be a higher level to enter the Forest of Patience.");
					cm.dispose();
					check = 1;
				}
				else {
					cm.sendYesNo("Hi, i'm Shane. I can let you into the Forest of Patience for a small fee. Would you like to enter for #b5000#k mesos?");
				}
			}
			else{
				cm.sendOk("You can only do a jump quest once every 5 minutes.");
				cm.dispose();
				check = 1;
			}
		} else if (status == 1) {
			if (check != 1) {
				if (cm.getMeso() < 5000) {
					cm.sendOk("Sorry but it doesn't like you have enough mesos!")
					cm.dispose();
				}
				else { 
					if (cm.getQuestStatus(2050).equals(MapleQuestStatus.Status.STARTED)) {
						cm.warp(101000100, 0);
					}
					else if (cm.getQuestStatus(2051).equals(MapleQuestStatus.Status.STARTED)) {
						cm.warp(101000102, 0);
					}
					else if (cm.getLevel() >= 25 && cm.getLevel() < 50) {
						cm.warp(101000100, 0);
					} 
					else if (cm.getLevel() >= 50) {
						cm.warp(101000102, 0);
					}
					cm.gainMeso(-5000);
					cm.dispose();
				}
			}
		}
	}
}	


