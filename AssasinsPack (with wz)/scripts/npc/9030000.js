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

*/
function start() {
	cm.sendSimple ("Hello, please choose your category.\r\n#L0#10%#l\r\n#L1#15%#l\r\n#L2#30%#l\r\n#L3#40%#l\r\n#L4#60%#l\r\n#L5#65%#l\r\n#L6#70%#l\r\n#L7#Megaphone etc.#l\r\n#L8#Misc eqs#l");
}

function action(mode, type, selection) {
        cm.dispose();
	if (selection == 0) {
		cm.openShop (73);
	} else if (selection == 1) {
		cm.openShop (74);
	} else if (selection == 2) {
		cm.openShop (75);
	} else if (selection == 3) {
		cm.openShop (76);
	} else if (selection == 4) {
		cm.openShop (77);
	} else if (selection == 5) {
		cm.openShop (78);
	} else if (selection == 6) {
		cm.openShop (79);
	} else if (selection == 7) {
		cm.openShop (80);
	} else if (selection == 8) {
		cm.openShop (81);
	} else {
		cm.dispose();
	}
}