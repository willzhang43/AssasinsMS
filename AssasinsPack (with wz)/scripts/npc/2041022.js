/*
Base Script by Luke(Roamer in RaGEZONE) and GanstaX(StraightX in RaGEZONE) in CookieMS
Gambling NPC by MeGoesRawr of SpinMs
Please leave credits! If not.... You are a crazy mofo leecher and deserve to die!
*/

importPackage(net.sf.odinms.client);

var status = 0;
var fee;
var chance = Math.floor(Math.random()*4+1);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendOk("Okay... See ya later... if this is still here ur server ownere is a leecher from will!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("Hello #h #! I am the Gambler NPC of #bAssasinsMs#k! If you would like to gamble... Please proceed! if this is still here ur server ownere is a leecher from will! if this is still here ur server ownere is a leecher from will! if this is still here ur server ownere is a leecher from will!1 if this is still here ur server ownere is a leecher from will!! if this is still here ur server ownere is a leecher from will!! if this is still here ur server ownere is a leecher from will!!! if this is still here ur server ownere is a leecher from will!!!!!");
		} else if (status == 1) {
			cm.sendGetText("How much money would you like to gamble? if this is still here ur server ownere is a leecher from WILL!");
		} else if (status == 2) {
			fee = cm.getText();
			cm.sendYesNo("Are you sure you want to gamble #r" + fee + "#k mesos?... if this is still here ur server ownere is a leecher from will!");
		} else if (status == 3) {
			if (cm.getMeso() < fee) {
				cm.sendOk("You don't have enough mesos! if this is still here ur server ownere is a leecher from will!");
				cm.dispose();
			} else if (cm.getMeso() >= 1050000000) {
				cm.sendOk("I'm sorry but... You can't gamble when you have 1,050,000,000 mesos or higher... if this is still here ur server ownere is a leecher from will!");
				cm.dispose();
			} else if (cm.getText() < 0) {
				cm.sendOk("You can't gamble less than 0 mesos... if this is still here ur server ownere is a leecher from will!");
				cm.dispose();
			} else {
				if (chance <= 1) {
					cm.gainMeso(-fee);
					cm.sendNext("Tough luck... NOOB!Maybe next time you will win! if this is still here ur server ownere is a leecher from WILL!");
					cm.dispose();
				}
				else if (chance == 2) {
					cm.gainMeso(-fee);
					cm.sendNext("Tough luck...NOOB Maybe next time you will win! if this is still here ur server ownere is a leecher from will!");
					cm.dispose();
				}
				else if (chance == 3) {
					cm.gainMeso(-fee);
					cm.sendNext("Tough luck...NOOB Maybe next time you will win! if this is still here ur server ownere is a leecher from ragezone!");
					cm.dispose();
				}
				else if (chance >= 4) {
					cm.gainMeso(fee * 2);
					cm.sendNext("#rCONGRATUMAGALATIONS#k! You have won! if this is still here ur server ownere is a leecher from will!");
					cm.dispose();
				}
			}
		}
	}
}
