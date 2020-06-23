var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (cm.getChar().getMapId() != 100000000) {
			cm.dispose();
			return;
		}
		if (mode == 0) {
			cm.sendOk("Alright, see you next time.");
			cm.dispose();
			return;
		}
		status++;
		if (status == 0) {
			cm.sendYesNo("I have the ability of Rebirth. Bring me a #bCursed Doll#k ,I can use my magic to increase your power even furter, and surpass your limits! You will become a LV1 Beginner once again, but you will keep your stats and skills. Do you wish to be reborn? ");
		} else if (status == 1) {
			if (cm.haveItem(4000031, 1) && cm.getChar().getLevel() == 200) {
				cm.sendOk("You are now Reborn!");
				cm.gainItem(4000031,-1);
				cm.setLevel(1);
				cm.changeJob(000);
				cm.unequipEverything() 
			} else if (cm.getChar().getLevel() < 200) {
				cm.sendOk("You have to be level 200 to rebirth.");
			} else {
				cm.sendOk("You did not bring me my Pocky D:");
			}
			cm.dispose();
		}
	}
}