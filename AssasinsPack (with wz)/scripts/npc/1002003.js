*/
	Job Intructor
	Victoria Road : Henesys, (100000000)
*/

importPackage(net.sf.odinms.client);

var status = 0;
var job;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.teachSkill(5001000,1,1); //Start of max-level "1" skills
			cm.teachSkill(5001001,1,1);
			cm.teachSkill(5001002,1,1);
			cm.teachSkill(5101000,1,1);
			cm.teachSkill(5101001,1,1);
			cm.teachSkill(5101002,1,1);
			cm.teachSkill(5101003,1,1);
			cm.teachSkill(5101004,1,1);
			cm.teachSkill(5101005,1,1);
			cm.teachSkill(1003,1,1);
			cm.teachSkill(1004,1,1);
			cm.teachSkill(1121011,1,1);
			cm.teachSkill(1221012,1,1);
			cm.teachSkill(1321010,1,1);
			cm.teachSkill(2121008,1,1);
			cm.teachSkill(2221008,1,1);
			cm.teachSkill(2321009,1,1);
			cm.teachSkill(3121009,1,1);
			cm.teachSkill(3221008,1,1);
			cm.teachSkill(4121009,1,1);
			cm.teachSkill(4221008,1,1); //End of max-level "1" skills
			cm.teachSkill(1000002,8,8); //Start of max-level "8" skills
			cm.teachSkill(3000002,8,8);
			cm.teachSkill(4000001,8,8); //End of max-level "8" skills
			cm.teachSkill(1000001,10,10); //Start of max-level "10" skills
			cm.teachSkill(2000001,10,10); //End of max-level "10" skills
			cm.teachSkill(1000000,16,16); //Start of max-level "16" skills
			cm.teachSkill(2000000,16,16);
			cm.teachSkill(3000000,16,16); //End of max-level "16" skills
			cm.teachSkill(1001003,20,20); //Start of max-level "20" skills
			cm.teachSkill(1001004,20,20);
			cm.teachSkill(1001005,20,20);
			cm.teachSkill(2001002,20,20);
			cm.teachSkill(2001003,20,20);
			cm.teachSkill(2001004,20,20);
			cm.teachSkill(2001005,20,20);
			cm.teachSkill(3000001,20,20);
			cm.teachSkill(3001003,20,20);
			cm.teachSkill(3001004,20,20);
			cm.teachSkill(3001005,20,20);
			cm.teachSkill(4000000,20,20);
			cm.teachSkill(4001344,20,20);
			cm.teachSkill(4001334,20,20);
			cm.teachSkill(4001002,20,20);
			cm.teachSkill(4001003,20,20);
			cm.teachSkill(1101005,20,20);
			cm.teachSkill(1100001,20,20); //Start of mastery's
			cm.teachSkill(1100000,20,20);
			cm.teachSkill(1200001,20,20);
			cm.teachSkill(1200000,20,20);
			cm.teachSkill(1300000,20,20);
			cm.teachSkill(1300001,20,20);
			cm.teachSkill(3100000,20,20);
			cm.teachSkill(3200000,20,20);
			cm.teachSkill(4100000,20,20);
			cm.teachSkill(4200000,20,20); //End of mastery's
			cm.teachSkill(4201002,20,20);
			cm.teachSkill(4101003,20,20);
			cm.teachSkill(3201002,20,20);
			cm.teachSkill(3101002,20,20);
			cm.teachSkill(1301004,20,20);
			cm.teachSkill(1301005,20,20);
			cm.teachSkill(1201004,20,20);
			cm.teachSkill(1201005,20,20);
			cm.teachSkill(1101004,20,20); //End of boosters
			cm.teachSkill(1101006,20,20);
			cm.teachSkill(1201006,20,20);
			cm.teachSkill(1301006,20,20);
			cm.teachSkill(2101001,20,20);
			cm.teachSkill(2100000,20,20);
			cm.teachSkill(2101003,20,20);
			cm.teachSkill(2101002,20,20);
			cm.teachSkill(2201001,20,20);
			cm.teachSkill(2200000,20,20);
			cm.teachSkill(2201003,20,20);
			cm.teachSkill(2201002,20,20);
			cm.teachSkill(2301004,20,20);
			cm.teachSkill(2301003,20,20);
			cm.teachSkill(2300000,20,20);
			cm.teachSkill(2301001,20,20);
			cm.teachSkill(3101003,20,20);
			cm.teachSkill(3101004,20,20);
			cm.teachSkill(3201003,20,20);
			cm.teachSkill(3201004,20,20);
			cm.teachSkill(4100002,20,20);
			cm.teachSkill(4101004,20,20);
			cm.teachSkill(4200001,20,20);
			cm.teachSkill(4201003,20,20); //End of second-job skills and first-job
			cm.teachSkill(4211005,20,20);
			cm.teachSkill(4211003,20,20);
			cm.teachSkill(4210000,20,20);
			cm.teachSkill(4110000,20,20);
			cm.teachSkill(4111001,20,20);
			cm.teachSkill(4111003,20,20);
			cm.teachSkill(3210000,20,20);
			cm.teachSkill(3110000,20,20);
			cm.teachSkill(3210001,20,20);
			cm.teachSkill(3110001,20,20);
			cm.teachSkill(3211002,20,20);
			cm.teachSkill(3111002,20,20);
			cm.teachSkill(2210000,20,20);
			cm.teachSkill(2211004,20,20);
			cm.teachSkill(2211005,20,20);
			cm.teachSkill(2111005,20,20);
			cm.teachSkill(2111004,20,20);
			cm.teachSkill(2110000,20,20);
			cm.teachSkill(2311001,20,20);
			cm.teachSkill(2311005,20,20);
			cm.teachSkill(2310000,20,20);
			cm.teachSkill(1311007,20,20);
			cm.teachSkill(1310000,20,20);
			cm.teachSkill(1311008,20,20);
			cm.teachSkill(1210001,20,20);
			cm.teachSkill(1211009,20,20);
			cm.teachSkill(1210000,20,20);
			cm.teachSkill(1110001,20,20);
			cm.teachSkill(1111007,20,20);
			cm.teachSkill(1110000,20,20); //End of 3rd job skills
			cm.teachSkill(1121000,20,20);
			cm.teachSkill(1221000,20,20);
			cm.teachSkill(1321000,20,20);
			cm.teachSkill(2121000,20,20);
			cm.teachSkill(2221000,20,20);
			cm.teachSkill(2321000,20,20);
			cm.teachSkill(3121000,20,20);
			cm.teachSkill(3221000,20,20);
			cm.teachSkill(4121000,20,20);
			cm.teachSkill(4221000,20,20); //End of Maple Warrior // Also end of max-level "20" skills
			cm.teachSkill(1321007,10,10);
			cm.teachSkill(1320009,25,25);
			cm.teachSkill(1320008,25,25);
			cm.teachSkill(2321006,10,10);
			cm.teachSkill(1220010,10,10);
			cm.teachSkill(1221004,25,25);
			cm.teachSkill(1221003,25,25);
			cm.teachSkill(1100003,30,30); 
			cm.teachSkill(1100002,30,30);
			cm.teachSkill(1101007,30,30);
			cm.teachSkill(1200003,30,30);
			cm.teachSkill(1200002,30,30);
			cm.teachSkill(1201007,30,30);
			cm.teachSkill(1300003,30,30);
			cm.teachSkill(1300002,30,30);
			cm.teachSkill(1301007,30,30);
			cm.teachSkill(2101004,30,30);
			cm.teachSkill(2101005,30,30);
			cm.teachSkill(2201004,30,30);
			cm.teachSkill(2201005,30,30);
			cm.teachSkill(2301002,30,30);
			cm.teachSkill(2301005,30,30);
			cm.teachSkill(3101005,30,30);
			cm.teachSkill(3201005,30,30);
			cm.teachSkill(4100001,30,30);
			cm.teachSkill(4101005,30,30);
			cm.teachSkill(4201005,30,30);
			cm.teachSkill(4201004,30,30);
			cm.teachSkill(1111006,30,30);
			cm.teachSkill(1111005,30,30);
			cm.teachSkill(1111002,30,30);
			cm.teachSkill(1111004,30,30);
			cm.teachSkill(1111003,30,30);
			cm.teachSkill(1111008,30,30);
			cm.teachSkill(1211006,30,30);
			cm.teachSkill(1211002,30,30);
			cm.teachSkill(1211004,30,30);
			cm.teachSkill(1211003,30,30);
			cm.teachSkill(1211005,30,30);
			cm.teachSkill(1211008,30,30);
			cm.teachSkill(1211007,30,30);
			cm.teachSkill(1311004,30,30);
			cm.teachSkill(1311003,30,30);
			cm.teachSkill(1311006,30,30);
			cm.teachSkill(1311002,30,30);
			cm.teachSkill(1311005,30,30);
			cm.teachSkill(1311001,30,30);
			cm.teachSkill(2110001,30,30);
			cm.teachSkill(2111006,30,30);
			cm.teachSkill(2111002,30,30);
			cm.teachSkill(2111003,30,30);
			cm.teachSkill(2210001,30,30);
			cm.teachSkill(2211006,30,30);
			cm.teachSkill(2211002,30,30);
			cm.teachSkill(2211003,30,30);
			cm.teachSkill(2311003,30,30);
			cm.teachSkill(2311002,30,30);
			cm.teachSkill(2311004,30,30);
			cm.teachSkill(2311006,30,30);
			cm.teachSkill(3111004,30,30);
			cm.teachSkill(3111003,30,30);
			cm.teachSkill(3111005,30,30);
			cm.teachSkill(3111006,30,30);
			cm.teachSkill(3211004,30,30);
			cm.teachSkill(3211003,30,30);
			cm.teachSkill(3211005,30,30);
			cm.teachSkill(3211006,30,30);
			cm.teachSkill(4111005,30,30);
			cm.teachSkill(4111006,20,20);
			cm.teachSkill(4111004,30,30);
			cm.teachSkill(4111002,30,30);
			cm.teachSkill(4211002,30,30);
			cm.teachSkill(4211004,30,30);
			cm.teachSkill(4211001,30,30);
			cm.teachSkill(4211006,30,30);
			cm.teachSkill(1120004,30,30);
			cm.teachSkill(1120003,30,30);
			cm.teachSkill(1120005,30,30);
			cm.teachSkill(1121008,30,30);
			cm.teachSkill(1121010,30,30);
			cm.teachSkill(1121006,30,30);
			cm.teachSkill(1121002,30,30);
			cm.teachSkill(1220005,30,30);
			cm.teachSkill(1221009,30,30);
			cm.teachSkill(1220006,30,30);
			cm.teachSkill(1221007,30,30);
			cm.teachSkill(1221011,30,30);
			cm.teachSkill(1221002,30,30);
			cm.teachSkill(1320005,30,30);
			cm.teachSkill(1320006,30,30);
			cm.teachSkill(1321003,30,30);
			cm.teachSkill(1321002,30,30);
			cm.teachSkill(2121005,30,30);
			cm.teachSkill(2121003,30,30);
			cm.teachSkill(2121004,30,30);
			cm.teachSkill(2121002,30,30);
			cm.teachSkill(2121007,30,30);
			cm.teachSkill(2121006,30,30);
			cm.teachSkill(2221007,30,30);
			cm.teachSkill(2221006,30,30);
			cm.teachSkill(2221003,30,30);
			cm.teachSkill(2221005,30,30);
			cm.teachSkill(2221004,30,30);
			cm.teachSkill(2221002,30,30);
			cm.teachSkill(2321007,30,30);
			cm.teachSkill(2321003,30,30);
			cm.teachSkill(2321008,30,30);
			cm.teachSkill(2321005,30,30);
			cm.teachSkill(2321004,30,30);
			cm.teachSkill(2321002,30,30);
			cm.teachSkill(3120005,30,30);
			cm.teachSkill(3121008,30,30);
			cm.teachSkill(3121003,30,30);
			cm.teachSkill(3121007,30,30);
			cm.teachSkill(3121006,30,30);
			cm.teachSkill(3121002,30,30);
			cm.teachSkill(3121004,30,30);
			cm.teachSkill(3221006,30,30);
			cm.teachSkill(3220004,30,30);
			cm.teachSkill(3221003,30,30);
			cm.teachSkill(3221005,30,30);
			cm.teachSkill(3221001,30,30);
			cm.teachSkill(3221002,30,30);
			cm.teachSkill(4121004,30,30);
			cm.teachSkill(4121008,30,30);
			cm.teachSkill(4121003,30,30);
			cm.teachSkill(4121006,30,30);
			cm.teachSkill(4121007,30,30);
			cm.teachSkill(4120005,30,30);
			cm.teachSkill(4221001,30,30);
			cm.teachSkill(4221007,30,30);
			cm.teachSkill(4221004,30,30);
			cm.teachSkill(4221003,30,30);
			cm.teachSkill(4221006,30,30);
			cm.teachSkill(4220005,30,30);
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getLevel() < 30) {
				cm.sendNext("Sorry, but you have to be at least level 30 to use my services.");
				status = 98;
			} else if (cm.getLevel() >= 30 && cm.getLevel() < 70) {
				cm.sendNext("Hello, I'm in charge of Job Advancing on #bThis Server#k.");
			} else if (cm.getLevel() >= 70 && cm.getLevel() < 120) {
				status = 60;
				cm.sendNext("Hello, I'm in charge of Job Advancing on #bThis Server#k.");
			} else if (cm.getLevel() >=120) {
				status = 101;
				cm.sendNext("Hello, I'm in charge of Job Advancing on #bThis Server#k.");
			}
		} else if (status == 1) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF)) {
				cm.sendSimple("Conratulations on reaching such a high level. Which would you like to be? #b\r\n#L0#Assassin#l\r\n#L1#Bandit#l#k");
			}
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
				cm.sendSimple("Conratulations on reaching such a high level. Which would you like to be? #b\r\n#L2#Fighter#l\r\n#L3#Page#l\r\n#L4#Spearman#l#k");
			}
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN)) {
				cm.sendSimple("Conratulations on reaching such a high level. Which would you like to be? #b\r\n#L5#Ice Lightning Wizard#l\r\n#L6#Fire Poison Wizard#l\r\n#L7#Cleric#l#k");
			}
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN)) {
				cm.sendSimple("Conratulations on reaching such a high level. Which would you like to be? #b\r\n#L8#Hunter#l\r\n#L9#Crossbowman#l#k");
			}
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.sendNext("Conratulations on reaching such a high level. However, you must've already undergone the First Job Advancement before you can use my services.");
				cm.dispose();
			}
		} else if (status == 2) {
			var jobName;
			if (selection == 0) {
				jobName = "Assassin";
				job = net.sf.odinms.client.MapleJob.ASSASSIN;
			}
			if (selection == 1) {
				jobName = "Bandit";
				job = net.sf.odinms.client.MapleJob.BANDIT;
			}
			if (selection == 2) {
				jobName = "Fighter";
				job = net.sf.odinms.client.MapleJob.FIGHTER;
			}
			if (selection == 3) {
				jobName = "Page";
				job = net.sf.odinms.client.MapleJob.PAGE;
			}
			if (selection == 4) {
				jobName = "Spearman";
				job = net.sf.odinms.client.MapleJob.SPEARMAN;
			}
			if (selection == 5) {
				jobName = "Ice Lightning Wizard";
				job = net.sf.odinms.client.MapleJob.IL_WIZARD;
			}
			if (selection == 6) {
				jobName = "Fire Poison Wizard";
				job = net.sf.odinms.client.MapleJob.FP_WIZARD;
			}
			if (selection == 7) {
				jobName = "Cleric";
				job = net.sf.odinms.client.MapleJob.CLERIC;
			}
			if (selection == 8) {
				jobName = "Hunter";
				job = net.sf.odinms.client.MapleJob.HUNTER;
			}
			if (selection == 9) {
				jobName = "Crossbowman";
				job = net.sf.odinms.client.MapleJob.CROSSBOWMAN;
			}
			cm.sendYesNo("Do you want to become a #r" + jobName + "#k?");
		} else if (status == 3) {
			cm.changeJob(job);
			cm.teachSkill(5001000,1,1); //Start of max-level "1" skills
			cm.teachSkill(5001001,1,1);
			cm.teachSkill(5001002,1,1);
			cm.teachSkill(5101000,1,1);
			cm.teachSkill(5101001,1,1);
			cm.teachSkill(5101002,1,1);
			cm.teachSkill(5101003,1,1);
			cm.teachSkill(5101004,1,1);
			cm.teachSkill(5101005,1,1);
			cm.teachSkill(1003,1,1);
			cm.teachSkill(1004,1,1);
			cm.teachSkill(1121011,1,1);
			cm.teachSkill(1221012,1,1);
			cm.teachSkill(1321010,1,1);
			cm.teachSkill(2121008,1,1);
			cm.teachSkill(2221008,1,1);
			cm.teachSkill(2321009,1,1);
			cm.teachSkill(3121009,1,1);
			cm.teachSkill(3221008,1,1);
			cm.teachSkill(4121009,1,1);
			cm.teachSkill(4221008,1,1); //End of max-level "1" skills
			cm.teachSkill(1000002,8,8); //Start of max-level "8" skills
			cm.teachSkill(3000002,8,8);
			cm.teachSkill(4000001,8,8); //End of max-level "8" skills
			cm.teachSkill(1000001,10,10); //Start of max-level "10" skills
			cm.teachSkill(2000001,10,10); //End of max-level "10" skills
			cm.teachSkill(1000000,16,16); //Start of max-level "16" skills
			cm.teachSkill(2000000,16,16);
			cm.teachSkill(3000000,16,16); //End of max-level "16" skills
			cm.teachSkill(1001003,20,20); //Start of max-level "20" skills
			cm.teachSkill(1001004,20,20);
			cm.teachSkill(1001005,20,20);
			cm.teachSkill(2001002,20,20);
			cm.teachSkill(2001003,20,20);
			cm.teachSkill(2001004,20,20);
			cm.teachSkill(2001005,20,20);
			cm.teachSkill(3000001,20,20);
			cm.teachSkill(3001003,20,20);
			cm.teachSkill(3001004,20,20);
			cm.teachSkill(3001005,20,20);
			cm.teachSkill(4000000,20,20);
			cm.teachSkill(4001344,20,20);
			cm.teachSkill(4001334,20,20);
			cm.teachSkill(4001002,20,20);
			cm.teachSkill(4001003,20,20);
			cm.teachSkill(1101005,20,20);
			cm.teachSkill(1100001,20,20); //Start of mastery's
			cm.teachSkill(1100000,20,20);
			cm.teachSkill(1200001,20,20);
			cm.teachSkill(1200000,20,20);
			cm.teachSkill(1300000,20,20);
			cm.teachSkill(1300001,20,20);
			cm.teachSkill(3100000,20,20);
			cm.teachSkill(3200000,20,20);
			cm.teachSkill(4100000,20,20);
			cm.teachSkill(4200000,20,20); //End of mastery's
			cm.teachSkill(4201002,20,20);
			cm.teachSkill(4101003,20,20);
			cm.teachSkill(3201002,20,20);
			cm.teachSkill(3101002,20,20);
			cm.teachSkill(1301004,20,20);
			cm.teachSkill(1301005,20,20);
			cm.teachSkill(1201004,20,20);
			cm.teachSkill(1201005,20,20);
			cm.teachSkill(1101004,20,20); //End of boosters
			cm.teachSkill(1101006,20,20);
			cm.teachSkill(1201006,20,20);
			cm.teachSkill(1301006,20,20);
			cm.teachSkill(2101001,20,20);
			cm.teachSkill(2100000,20,20);
			cm.teachSkill(2101003,20,20);
			cm.teachSkill(2101002,20,20);
			cm.teachSkill(2201001,20,20);
			cm.teachSkill(2200000,20,20);
			cm.teachSkill(2201003,20,20);
			cm.teachSkill(2201002,20,20);
			cm.teachSkill(2301004,20,20);
			cm.teachSkill(2301003,20,20);
			cm.teachSkill(2300000,20,20);
			cm.teachSkill(2301001,20,20);
			cm.teachSkill(3101003,20,20);
			cm.teachSkill(3101004,20,20);
			cm.teachSkill(3201003,20,20);
			cm.teachSkill(3201004,20,20);
			cm.teachSkill(4100002,20,20);
			cm.teachSkill(4101004,20,20);
			cm.teachSkill(4200001,20,20);
			cm.teachSkill(4201003,20,20); //End of second-job skills and first-job
			cm.teachSkill(4211005,20,20);
			cm.teachSkill(4211003,20,20);
			cm.teachSkill(4210000,20,20);
			cm.teachSkill(4110000,20,20);
			cm.teachSkill(4111001,20,20);
			cm.teachSkill(4111003,20,20);
			cm.teachSkill(3210000,20,20);
			cm.teachSkill(3110000,20,20);
			cm.teachSkill(3210001,20,20);
			cm.teachSkill(3110001,20,20);
			cm.teachSkill(3211002,20,20);
			cm.teachSkill(3111002,20,20);
			cm.teachSkill(2210000,20,20);
			cm.teachSkill(2211004,20,20);
			cm.teachSkill(2211005,20,20);
			cm.teachSkill(2111005,20,20);
			cm.teachSkill(2111004,20,20);
			cm.teachSkill(2110000,20,20);
			cm.teachSkill(2311001,20,20);
			cm.teachSkill(2311005,20,20);
			cm.teachSkill(2310000,20,20);
			cm.teachSkill(1311007,20,20);
			cm.teachSkill(1310000,20,20);
			cm.teachSkill(1311008,20,20);
			cm.teachSkill(1210001,20,20);
			cm.teachSkill(1211009,20,20);
			cm.teachSkill(1210000,20,20);
			cm.teachSkill(1110001,20,20);
			cm.teachSkill(1111007,20,20);
			cm.teachSkill(1110000,20,20); //End of 3rd job skills
			cm.teachSkill(1121000,20,20);
			cm.teachSkill(1221000,20,20);
			cm.teachSkill(1321000,20,20);
			cm.teachSkill(2121000,20,20);
			cm.teachSkill(2221000,20,20);
			cm.teachSkill(2321000,20,20);
			cm.teachSkill(3121000,20,20);
			cm.teachSkill(3221000,20,20);
			cm.teachSkill(4121000,20,20);
			cm.teachSkill(4221000,20,20); //End of Maple Warrior // Also end of max-level "20" skills
			cm.teachSkill(1321007,10,10);
			cm.teachSkill(1320009,25,25);
			cm.teachSkill(1320008,25,25);
			cm.teachSkill(2321006,10,10);
			cm.teachSkill(1220010,10,10);
			cm.teachSkill(1221004,25,25);
			cm.teachSkill(1221003,25,25);
			cm.teachSkill(1100003,30,30); 
			cm.teachSkill(1100002,30,30);
			cm.teachSkill(1101007,30,30);
			cm.teachSkill(1200003,30,30);
			cm.teachSkill(1200002,30,30);
			cm.teachSkill(1201007,30,30);
			cm.teachSkill(1300003,30,30);
			cm.teachSkill(1300002,30,30);
			cm.teachSkill(1301007,30,30);
			cm.teachSkill(2101004,30,30);
			cm.teachSkill(2101005,30,30);
			cm.teachSkill(2201004,30,30);
			cm.teachSkill(2201005,30,30);
			cm.teachSkill(2301002,30,30);
			cm.teachSkill(2301005,30,30);
			cm.teachSkill(3101005,30,30);
			cm.teachSkill(3201005,30,30);
			cm.teachSkill(4100001,30,30);
			cm.teachSkill(4101005,30,30);
			cm.teachSkill(4201005,30,30);
			cm.teachSkill(4201004,30,30);
			cm.teachSkill(1111006,30,30);
			cm.teachSkill(1111005,30,30);
			cm.teachSkill(1111002,30,30);
			cm.teachSkill(1111004,30,30);
			cm.teachSkill(1111003,30,30);
			cm.teachSkill(1111008,30,30);
			cm.teachSkill(1211006,30,30);
			cm.teachSkill(1211002,30,30);
			cm.teachSkill(1211004,30,30);
			cm.teachSkill(1211003,30,30);
			cm.teachSkill(1211005,30,30);
			cm.teachSkill(1211008,30,30);
			cm.teachSkill(1211007,30,30);
			cm.teachSkill(1311004,30,30);
			cm.teachSkill(1311003,30,30);
			cm.teachSkill(1311006,30,30);
			cm.teachSkill(1311002,30,30);
			cm.teachSkill(1311005,30,30);
			cm.teachSkill(1311001,30,30);
			cm.teachSkill(2110001,30,30);
			cm.teachSkill(2111006,30,30);
			cm.teachSkill(2111002,30,30);
			cm.teachSkill(2111003,30,30);
			cm.teachSkill(2210001,30,30);
			cm.teachSkill(2211006,30,30);
			cm.teachSkill(2211002,30,30);
			cm.teachSkill(2211003,30,30);
			cm.teachSkill(2311003,30,30);
			cm.teachSkill(2311002,30,30);
			cm.teachSkill(2311004,30,30);
			cm.teachSkill(2311006,30,30);
			cm.teachSkill(3111004,30,30);
			cm.teachSkill(3111003,30,30);
			cm.teachSkill(3111005,30,30);
			cm.teachSkill(3111006,30,30);
			cm.teachSkill(3211004,30,30);
			cm.teachSkill(3211003,30,30);
			cm.teachSkill(3211005,30,30);
			cm.teachSkill(3211006,30,30);
			cm.teachSkill(4111005,30,30);
			cm.teachSkill(4111006,20,20);
			cm.teachSkill(4111004,30,30);
			cm.teachSkill(4111002,30,30);
			cm.teachSkill(4211002,30,30);
			cm.teachSkill(4211004,30,30);
			cm.teachSkill(4211001,30,30);
			cm.teachSkill(4211006,30,30);
			cm.teachSkill(1120004,30,30);
			cm.teachSkill(1120003,30,30);
			cm.teachSkill(1120005,30,30);
			cm.teachSkill(1121008,30,30);
			cm.teachSkill(1121010,30,30);
			cm.teachSkill(1121006,30,30);
			cm.teachSkill(1121002,30,30);
			cm.teachSkill(1220005,30,30);
			cm.teachSkill(1221009,30,30);
			cm.teachSkill(1220006,30,30);
			cm.teachSkill(1221007,30,30);
			cm.teachSkill(1221011,30,30);
			cm.teachSkill(1221002,30,30);
			cm.teachSkill(1320005,30,30);
			cm.teachSkill(1320006,30,30);
			cm.teachSkill(1321003,30,30);
			cm.teachSkill(1321002,30,30);
			cm.teachSkill(2121005,30,30);
			cm.teachSkill(2121003,30,30);
			cm.teachSkill(2121004,30,30);
			cm.teachSkill(2121002,30,30);
			cm.teachSkill(2121007,30,30);
			cm.teachSkill(2121006,30,30);
			cm.teachSkill(2221007,30,30);
			cm.teachSkill(2221006,30,30);
			cm.teachSkill(2221003,30,30);
			cm.teachSkill(2221005,30,30);
			cm.teachSkill(2221004,30,30);
			cm.teachSkill(2221002,30,30);
			cm.teachSkill(2321007,30,30);
			cm.teachSkill(2321003,30,30);
			cm.teachSkill(2321008,30,30);
			cm.teachSkill(2321005,30,30);
			cm.teachSkill(2321004,30,30);
			cm.teachSkill(2321002,30,30);
			cm.teachSkill(3120005,30,30);
			cm.teachSkill(3121008,30,30);
			cm.teachSkill(3121003,30,30);
			cm.teachSkill(3121007,30,30);
			cm.teachSkill(3121006,30,30);
			cm.teachSkill(3121002,30,30);
			cm.teachSkill(3121004,30,30);
			cm.teachSkill(3221006,30,30);
			cm.teachSkill(3220004,30,30);
			cm.teachSkill(3221003,30,30);
			cm.teachSkill(3221005,30,30);
			cm.teachSkill(3221001,30,30);
			cm.teachSkill(3221002,30,30);
			cm.teachSkill(4121004,30,30);
			cm.teachSkill(4121008,30,30);
			cm.teachSkill(4121003,30,30);
			cm.teachSkill(4121006,30,30);
			cm.teachSkill(4121007,30,30);
			cm.teachSkill(4120005,30,30);
			cm.teachSkill(4221001,30,30);
			cm.teachSkill(4221007,30,30);
			cm.teachSkill(4221004,30,30);
			cm.teachSkill(4221003,30,30);
			cm.teachSkill(4221006,30,30);
			cm.teachSkill(4220005,30,30);
			cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
		} else if (status == 61) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) {
				status = 63;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
				status = 66;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
				status = 69;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
				status = 72;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
				status = 75;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
				status = 78;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
				status = 81;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
				status = 84;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
				status = 87;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
				status = 90;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.sendNext("Such a high level #bBeginner#k! Amazing!");
			}
		} else if (status == 64) {
			cm.changeJob(MapleJob.HERMIT);
			cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
		} else if (status == 67) {
			cm.changeJob(MapleJob.CHIEFBANDIT);
			cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
		} else if (status == 70) {
			cm.changeJob(MapleJob.RANGER);
			cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
		} else if (status == 73) {
			cm.changeJob(MapleJob.SNIPER);
			cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
		} else if (status == 76) {
			cm.changeJob(MapleJob.FP_MAGE);
			cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
		} else if (status == 79) {
			cm.changeJob(MapleJob.IL_MAGE);
			cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
		} else if (status == 82) {
			cm.changeJob(MapleJob.PRIEST);
			cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
		} else if (status == 85) {
			cm.changeJob(MapleJob.CRUSADER);
			cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
		} else if (status == 88) {
			cm.changeJob(MapleJob.WHITEKNIGHT);
			cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
		} else if (status == 91) {
			cm.changeJob(MapleJob.DRAGONKNIGHT);
			cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
		} else if (status == 99) {
			cm.sendOk("Good luck on your training.");
			cm.dispose();
		} else if (status == 102) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT)) {
				status = 105;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT)) {
				status = 108;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER)) {
				status = 111;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER)) {
				status = 114;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_MAGE)) {
				status = 117;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_MAGE)) {
				status = 120;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST)) {
				status = 123;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER)) {
				status = 126;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT)) {
				status = 129;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT)) {
				status = 132;
				cm.sendYesNo("Conratulations on reaching such a high level. Do you want to Job Advance now?");
			} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.sendNext("Such a high level #bBeginner#k! Amazing!");
			}
		} else if (status == 106) {
			cm.changeJob(MapleJob.NIGHTLORD);
			cm.teachSkill(4121000,1,30);
                                                cm.teachSkill(4120002,1,30);
                                                cm.teachSkill(4121005,1,30);
                                                cm.teachSkill(4120005,1,30);
                                                cm.teachSkill(4121006,1,30);
                                                cm.teachSkill(4121003,1,30);
			cm.teachSkill(4121004,1,30);
			cm.teachSkill(4121007,1,30);
			cm.teachSkill(4121008,1,30);
			cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
		} else if (status == 109) {
			cm.changeJob(MapleJob.SHADOWER);
		                cm.teachSkill(4221007,1,30);
                                                cm.teachSkill(4221005,1,30);
                                                cm.teachSkill(4221002,1,30);
                                                cm.teachSkill(4221008,1,30);
                                                cm.teachSkill(4221001,1,30);
			cm.teachSkill(4221003,1,30);
			cm.teachSkill(4221004,1,30);
			cm.teachSkill(4221006,1,30);
			cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
		} else if (status == 112) {
			cm.changeJob(MapleJob.BOWMASTER);
			cm.teachSkill(3121000,1,30);
                                                cm.teachSkill(3121002,1,30);
                                                cm.teachSkill(3121005,1,30);
                                                cm.teachSkill(3121007,1,30);
                                                cm.teachSkill(3121009,1,30);
                                                cm.teachSkill(3121003,1,30);
			cm.teachSkill(3121004,1,30);
			cm.teachSkill(3121006,1,30);
			cm.teachSkill(3121008,1,30);
			cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
		} else if (status == 115) {
			cm.changeJob(MapleJob.CROSSBOWMASTER);
			cm.teachSkill(3221000,1,30);
			cm.teachSkill(3221002,1,30);
			cm.teachSkill(3220004,1,30);
			cm.teachSkill(3221006,1,30);
			cm.teachSkill(3221008,1,30);
			cm.teachSkill(3221001,1,30);
			cm.teachSkill(3221003,1,30);
			cm.teachSkill(3221005,1,30);
			cm.teachSkill(3221007,1,30);
			cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
		} else if (status == 118) {
			cm.changeJob(MapleJob.FP_ARCHMAGE);
			cm.teachSkill(2121000,1,30);
			cm.teachSkill(2121001,1,30);
			cm.teachSkill(2121002,1,30);
			cm.teachSkill(2121006,1,30);
			cm.teachSkill(2121008,1,30);
			cm.teachSkill(2121003,1,30);
			cm.teachSkill(2121004,1,30);
			cm.teachSkill(2121005,1,30);
			cm.teachSkill(2121007,1,30);
			cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
		} else if (status == 121) {
			cm.changeJob(MapleJob.IL_ARCHMAGE);
			cm.teachSkill(2221000,1,30);
			cm.teachSkill(2221001,1,30);
			cm.teachSkill(2221002,1,30);
			cm.teachSkill(2221006,1,30);
			cm.teachSkill(2221008,1,30);
			cm.teachSkill(2221003,1,30);
			cm.teachSkill(2221004,1,30);
			cm.teachSkill(2221005,1,30);
			cm.teachSkill(2221007,1,30);
			cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
		} else if (status == 124) {
			cm.changeJob(MapleJob.BISHOP);
			cm.teachSkill(2321000,1,30);
			cm.teachSkill(2321001,1,30);
			cm.teachSkill(2321002,1,30);
			cm.teachSkill(2321005,1,30);
			cm.teachSkill(2321009,1,30);
			cm.teachSkill(2321003,1,30);
			cm.teachSkill(2321004,1,30);
			cm.teachSkill(2321006,1,30);
			cm.teachSkill(2321007,1,30);
			cm.teachSkill(2321008,1,30);
			cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
		} else if (status == 127) {
			cm.changeJob(MapleJob.HERO);
			cm.teachSkill(1120004,1,30);
			cm.teachSkill(1121011,1,30);
			cm.teachSkill(1121008,1,30);
			cm.teachSkill(1121000,1,30);
			cm.teachSkill(1121001,1,30);
			cm.teachSkill(1121002,1,30);
			cm.teachSkill(1120003,1,30);
			cm.teachSkill(1120005,1,30);
			cm.teachSkill(1121006,1,30);
			cm.teachSkill(1121010,1,30);
			cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
		} else if (status == 130) {
			cm.changeJob(MapleJob.PALADIN);
			cm.teachSkill(1221000,1,30);
			cm.teachSkill(1221001,1,30);
			cm.teachSkill(1220005,1,30);
			cm.teachSkill(1221012,1,30);
			cm.teachSkill(1221002,1,30);
			cm.teachSkill(1221003,1,30);
			cm.teachSkill(1221004,1,30);
			cm.teachSkill(1220006,1,30);
			cm.teachSkill(1221007,1,30);
			cm.teachSkill(1221009,1,30);
			cm.teachSkill(1220010,1,10);
			cm.teachSkill(1221011,1,30);
			cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
		} else if (status == 133) {
			cm.changeJob(MapleJob.DARKKNIGHT);
			cm.teachSkill(1321000,1,30);
			cm.teachSkill(1321001,1,30);
			cm.teachSkill(1320005,1,30);
			cm.teachSkill(1320009,1,30);
			cm.teachSkill(1321010,1,30);
			cm.teachSkill(1321002,1,30);
			cm.teachSkill(1321003,1,30);
			cm.teachSkill(1320006,1,30);
			cm.teachSkill(1321007,1,10);
			cm.teachSkill(1320008,1,25);
			cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
		}
	}
}
