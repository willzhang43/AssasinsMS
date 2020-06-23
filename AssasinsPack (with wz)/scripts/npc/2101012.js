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
	Strange Guy
	
*/

var status = 0;
var maps = new Array(670010200, 670010300, 670010301, 670010302, 670010400, 670010500);
var mapNames = new Array("Valvendale : Valvendale", "Valvendale : Outskirts I", "Valvendale : Outskirts II", "Valvendale : Outskirts III", "Valvendale : Outskirts IV", "Valvendale : Outskirts V");
var charges = new Array(10, 10, 10, 10, 10, 10);

var status = 0;
var selectedMap = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0) {
		var where = "Hey there, just call me #bStrange Guy#k. I can take you ALMOST anywhere in and around Valvendale for a measely 10 mesos! Just tell me where you want to go and I'll take you there.";
		for (var i = 0; i < maps.length; i++) {
			where += "#b\r\n#L" + i + "# " + mapNames[i] + " (" + charges[i] + " mesos)#l#k";
		}
		cm.sendSimple(where);
		status++;
	} else {
		if ((status == 1 && type == 1 && selection == -1 && mode == 0) || mode == -1) {
			cm.dispose();
		} else {
			if (status == 1) {
					cm.sendNext("Okay, see you later!");
					selectedMap = selection;
					status++
			} else if (status == 2) {
					cm.gainMeso(-10);
					cm.warp(maps[selectedMap], 0);
					cm.changeMusic("Bgm14/HotDesert");
					cm.dispose();
			}
		}
	}
}

