//Thomas Swift

var status = 0;

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
		if (status == 0) {
			cm.sendSimple("Hello...\r\nI'm the mount seller .. if you want to buy just choose one of the following mounts :\r\n#b#L0##i1912000# (10,000,000 mesos).#l\r\n#L1##i1902000# (30,000,000 mesos).#l\r\n#L2##i1902001# (100,000,000 mesos).#l\r\n#L3##s1004# (500,000 mesos).#l\r\n\r\n#kEnjoy :)");
		} else if (status == 1) {
			if (selection == 0) {
				cm.sendSimple("#bSaddle #kcosts #b10,000,000 mesos#k.\r\nAre you sure you want to buy it ?\r\n#b#L0#Yes, I am.#l");
			} else if (selection == 1) {
				cm.sendSimple("#bHog #kcosts #b30,000,000 mesos#k.\r\nAre you sure you want to buy it ?\r\n#b#L1#Yes, I am.#l");
			} else if (selection == 2) {
				cm.sendSimple("#bSilver Mane #kcosts #b100,000,000 mesos#k.\r\nAre you sure you want to buy it ?\r\n#b#L2#Yes, I am.#l");
			} else if (selection == 3) {
				cm.sendSimple("#bMonster Rider #kskill costs #b500,000 mesos#k.\r\nAre you sure you want to buy it ?\r\n#b#L3#Yes, I am.#l");
			}
		} if (status == 2) {
			if (selection == 0) {
				if (cm.getMeso() >= 10000000) {
					cm.sendOk("You have bought #bSaddle#k.");
					cm.gainMeso(-10000000);
					cm.gainItem(1912000,1);
					cm.dispose();
				} else {
					cm.sendOk("You don't have enough mesos.");
					cm.dispose();
				}
			} else if (selection == 1) {
				if (cm.getMeso() >= 30000000) {
					cm.sendOk("You have bought #bHog#k.");
					cm.gainMeso(-30000000);
					cm.gainItem(1902000,1);
					cm.dispose();
				} else {
					cm.sendOk("You don't have enough mesos.");
					cm.dispose();
				}
			} else if (selection == 2) {
				if (cm.getMeso() >= 100000000) {
					cm.sendOk("You have bought #bSilver Mane#k.");
					cm.gainMeso(-100000000);
					cm.gainItem(1902001,1);
					cm.dispose();
				} else {
					cm.sendOk("You don't have enough mesos.");
					cm.dispose();
				}
			} else if (selection == 3) {
				if (cm.getMeso() >= 500000) {
					cm.sendOk("You have bought #bMonster Rider#k skill.");
					cm.gainMeso(-500000);
					cm.teachSkill(1004,1,1);
					cm.dispose();
				} else {
					cm.sendOk("You don't have enough mesos.");
					cm.dispose();
				}
			}
		}
	}
}