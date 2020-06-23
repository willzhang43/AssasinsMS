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

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 3);
    cal.set(java.util.Calendar.MINUTE, 50);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 60 * 0.25; // Every 1 hour.
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
var Message = new Array("You can use mega phones should you need any helps.",
"During PvPs, the only way to escape is to change channels.",
"The time for the opening of FoJ is flexible.",
"You can earn more Mesos and EXPs throught Field of Judgement (FoJ).",
"GM Events are flexible. Do be updated with the lastest events through Hamachi or homepage!");
    em.getChannelServer().broadcastPacket(
        net.sf.odinms.tools.MaplePacketCreator.serverNotice(6, "[XTips] : " + Message[Math.floor(Math.random() * Message.length)]));
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
    }
}