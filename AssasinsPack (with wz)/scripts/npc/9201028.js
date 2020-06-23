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

/* Nana(L) initially. Made to work for any NPC you want it to.
 *   Event Prize winners go to her for
 *       prizes.
 *
 */

var status = 0;
var town = cm.getC().getPlayer().getMapId();
var eventitem = 2040001;

var itemtype = Math.floor(Math.random() * 20 + 1);

var scrolls = new Array (2040001, 2040004, 2040017, 2040101, 2040106, 2040201, 2040201, 2040301, 2040311, 2040401, 2040501, 2040513, 2040704, 2040804, 204081, 2040901, 2040206, 2040413, 2040504, 

2040516, 2040601, 2040613, 2040707, 2040801, 2040914, 2040919, 2041001, 2041004, 2041007, 2041010, 2041013, 2041016, 2041019, 2041022, 2043101, 2043201, 2043301, 2043701, 2043801, 2044001, 2044101, 

2044201, 2044301, 2044401, 2044501, 2044601, 2044701);
var scrollchance = Math.floor(Math.random() * scrolls.length);

var equip = new Array (1002515, 1002516, 1002517, 1002518, 1102000, 1102001, 1102002, 1102003, 1102004, 1102040, 1102041, 1102042, 1102043, 1102011, 1102012, 1102013, 1102014, 1082002, 1082145, 

1082146, 1082147, 1082148, 1082149, 1082150, 1002080, 1002081, 1002082, 1002083, 1002391, 1002392, 1002393, 1002394, 1002395, 1050100, 1050127, 1051098, 1051140, 1050018, 1050017, 1012070, 1012071, 

1012072, 1012073);
var equipchance = Math.floor(Math.random() * equip.length);

var weapon = new Array (1302021, 1302024, 1302013, 1322022, 1322024, 1322026);
var weaponchance = Math.floor(Math.random() * weapon.length);

var nx = new Array (1012085, 1010003, 1012055, 1020000, 1012043, 1012027, 1012000, 1032036, 1022064, 1012001, 1022034, 1022015, 1022013, 1022059, 1022004, 1012048, 1022010, 1022016, 1022012, 

1022001, 1012028, 1022046, 1012005, 1022018, 1022041, 1032051, 1012056, 1012099, 1012080, 1010004, 1022043, 1012040, 1012063, 1012031, 1012074, 1022044, 1022047, 1022033, 1032052, 1022066);
var nxchance = Math.floor(Math.random() * nx.length);

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
		if (status == 0){
                     if(cm.haveItem(eventitem)) {
                 cm.sendSimple("Good day to you! My name is #b#p" + cm.getNpc() + "##k, and I'm #bon a server owned by a stupid leeching newbie if this isn't changed#k #b#m" + town + "##k!\r\n#b#L0#Hello, #p" + cm.getNpc() + "#. I've got a(n) #b#t" + eventitem + "##k.");
                        } else {
                cm.sendNext("Good day to you! My name is #b#p" + cm.getNpc() + "##k, and I'm #bon a server owned by a stupid leeching newbie if this isn't changed#k #b#m" + town + "##k!");
                cm.dispose();

                    }
                     }
                if (status == 1) {
                    if (selection == 0 ) {
                        if(cm.haveItem(eventitem)) {
                        cm.sendYesNo("Ah, it seems you do! Well, I've been assigned to round up all of the event tickets in #b#m" + town + "##k that players get from events. Don't worry, you'll be getting something in return! 

So, what do you say? Will you give me the event ticket?")
                        } else {
                            cm.sendNext("I'm sorry, but I don't think you do.");
                            cm.dispose();
                              }
                         }
                    }
                if (status == 2) {
                    cm.gainItem(eventitem, -1);
                    if (itemtype >= 0 && itemtype <= 5) {
                        cm.gainItem(scrolls[scrollchance], 1);
                        }
                    if (itemtype >= 6 && itemtype <= 10) {
                        cm.gainItem(equip[equipchance], 1);
                        }
                    if (itemtype >= 11 && itemtype <= 15) {
                        cm.gainItem(weapon[weaponchance], 1);
                        }
                    if (itemtype >= 16 && itemtype <= 20) {
                        cm.gainItem(nx[nxchance], 1);
                        }
                    if (itemtype > 20) {
                        cm.gainItem(eventitem, 1);
                        }
                        cm.dispose();
                    }
            }
}

/*function eligible() {
    if (cm.haveItem(eventitem)) {
     return "\r\n#b#L0#Hello, #p" + cm.getNpc() + "#. I've got an #b#t" + eventitem + "##k."
     return true
    } else {
        return "\r\n"
    }
 }*/