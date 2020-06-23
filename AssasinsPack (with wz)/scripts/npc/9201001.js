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
======>OdinMS NX Npc<======
by [GM]Fatality of FusionMS
*/
function start() {
	cm.sendSimple ("Hello, Select what you want, Fella.\r\n#L0#Hats 1#l\r\n#L1#Hats 2#l\r\n#L2#Hats 3#l\r\n#L3#Hats 4#l\r\n#L4#Hats 5#l\r\n#L5#Hats 6#l\r\n#L6#Hats 7#l\r\n#L7#Hats 8#l\r\n#L8#Overall 1#l\r\n#L9#Overall 2#l\r\n#L10#Overall 3#l\r\n#L11#Overall 4#l\r\n#L12#Overall 5#l\r\n#L13#Topwear 1#l\r\n#L14#Topwear 2#l\r\n#L15#Topwear 3#l\r\n#L16#Topwear 4#l\r\n#L17#Bottomwear 1#l\r\n#L18#Bottomwear 2#l\r\n#L19#Bottomwear 3#l\r\n#L20#Shoes 1#l\r\n#L21#Shoes 2#l\r\n#L22#Gloves#l\r\n#L23#Cape#l\r\n#L24#Shield#l\r\n#L25#Weapons 1#l\r\n#L26#Weapons 2#l\r\n#L27#Weapons 3#l\r\n#L28#Accessories 1#l\r\n#L29#Accessories 2#l\r\n#L30#Accessories 3#l\r\n#L31#Throwing Stars#l\r\n#L32#Emotion#l");
	}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
		cm.openShop (119);
	} else if (selection == 1) {
		cm.openShop (120);
	} else if (selection == 2) {
		cm.openShop (121);
	} else if (selection == 3) {
		cm.openShop (122);
	} else if (selection == 4) {
		cm.openShop (123);
	} else if (selection == 5) {
		cm.openShop (124);
	} else if (selection == 6) {
		cm.openShop (125);
	} else if (selection == 7) {
		cm.openShop (126);
	} else if (selection == 8) {
		cm.openShop (127);
	} else if (selection == 9) {
		cm.openShop (128);
	} else if (selection == 10) {
		cm.openShop (129);
	} else if (selection == 11) {
		cm.openShop (130);
	} else if (selection == 12) {
		cm.openShop (131);
	} else if (selection == 13) {
		cm.openShop (132);
	} else if (selection == 14) {
		cm.openShop (133);
	} else if (selection == 15) {
		cm.openShop (134);
	} else if (selection == 16) {
		cm.openShop (135);
	} else if (selection == 17) {
		cm.openShop (136);
	} else if (selection == 18) {
		cm.openShop (137);
	} else if (selection == 19) {
		cm.openShop (138);
	} else if (selection == 20) {
		cm.openShop (139);
	} else if (selection == 21) {
		cm.openShop (140);
	} else if (selection == 22) {
		cm.openShop (141);
	} else if (selection == 23) {
		cm.openShop (142);
	} else if (selection == 24) {
		cm.openShop (143);
	} else if (selection == 25) {
		cm.openShop (144);
	} else if (selection == 26) {
		cm.openShop (145);
	} else if (selection == 27) {
		cm.openShop (146);
	} else if (selection == 28) {
		cm.openShop (147);
	} else if (selection == 29) {
		cm.openShop (148);
	} else if (selection == 30) {
		cm.openShop (149);
	} else if (selection == 31) {
		cm.openShop (150);
	} else if (selection == 32) {
		cm.openShop (151);
	} else {
		cm.dispose();
	}
}