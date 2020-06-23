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

/* Maple Administrator
   Old event, trade 6 SnowBoard for Super Snowboard
   Text are custom, because i forget what the text is XD
   By Information of eAthena
*/

var status = 0;
var display;
var sb = new Array(1442012,1442013,1442014,1442015,1442016,1442017);
var ssb = 1442046;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		if (status == 0) {
			cm.sendNext("Hello, we are currently running an event.");
		} else if (status == 1) {
			for(var i = 0; i < sb.length; i++) {
				if(i == 0)
					display = "#b#t"+ sb[i] +"##k";
				else if(i == sb.length)
					display += " and #b#t"+ sb[i] +"##k";
				else
					display += ", #b#t"+ sb[i] + "##k";
			}
			cm.sendNext("We will trade "+display+" for #r#t"+ ssb +"##k.");
		} else if (status == 2) {
			cm.sendYesNo("Would you like to have a trade?");
	    } else if (status == 3) {
			var trade = true;
			for(var i = 0; i < sb.length; i++) {
				if(!cm.haveItem(sb[i]))
					trade = false;
			}
			if(!trade) {
				cm.sendOk("You don't have enough snowboard to trade with.");
				cm.dispose();
			} else {
				for(var i = 0; i < sb.length; i++) {
					cm.gainItem(sb[i],-1);
				}
				cm.gainItem(ssb,1);
				cm.sendOk("Have fun!");
			}
		}
	}
}