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
/*Made By xbLazE of BlazeStory*/

/* Ali
 * 
 * Adobis's Mission I: The Room of Tragedy (280090000)
 * 
 * Zakum Quest NPC Exit
*/
var status = 0;
 
function start() {
    status = -1;
    action(1, 0, 0);
}
 
function action(mode, type, selection) {
    if (status == 6 || mode == -1) {
        cm.dispose();
    } else {
        if (status == 5) {
            status = 6;
            return;
        }
    if (mode == 1)
        status++;
    else
        status--;
        if (status == 0) {
            cm.sendNext("Congratulations #b #h ##k, you are in #bJAIL#k!");
        } else if (status == 1) {
            cm.sendNextPrev("You must be a fucking hacker, you mother fucking piece of shit !")
        } else if (status == 2) {
            cm.sendNextPrev("Your mom's so bald that she can't even see your fucking face!");
        } else if (status == 3) {
            cm.sendNextPrev("Fucking asshole, I'll drill a tunnel inside your asshole, you fucking bitch!");
        } else if (status == 4) {
            cm.sendNextPrev("You'll be jailed for an hour, FUCKING LOSER!");
        } else if (status == 5) {
            cm.sendOk("Rot in hell, YOU FUCKING PIECE OF SHIT!")
            cm.dispose();
        }
    }
}  
