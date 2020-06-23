/* [NPC]
    Universal Job Advancer w/ Overlevel Fix
    Skill Maxer
    Rebirth
    Level 201 Fix

    Made by Kedano
    @RageZone
*/

importPackage(net.sf.odinms.client);


var status = 0;
var jobName;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendOk("Well okay then. Come back if you change your mind.\r\n\r\nGood luck on your training.");
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("Hello, I'm in charge of Job Advancing.");
        } else if (status == 1) {
            if (cm.getLevel() < 200 && cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
                if (cm.getLevel() < 8) {
                    cm.sendNext("Sorry, but you have to be at least level 8 to use my services.");
                    status = 98;
                } else if (cm.getLevel() < 10) {
                    cm.sendYesNo("Congratulations of reaching such a high level. Would you like to make the #rFirst Job Advancement#k as a #rMagician#k?");
                    status = 150;
                } else {
                    cm.sendYesNo("Congratulations on reaching such a high level. Would you like to make the #rFirst Job Advancement#k?");
                    status = 153;
                }
            } else if (cm.getLevel() < 30) {
                cm.sendNext("Sorry, but you have to be at least level 30 to make the #rSecond Job Advancement#k.");
                status = 98;
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF)) {
                cm.sendSimple("Congratulations on reaching such a high level. Which would you like to be? #b\r\n#L0#Assassin#l\r\n#L1#Bandit#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
                cm.sendSimple("Congratulations on reaching such a high level. Which would you like to be? #b\r\n#L2#Fighter#l\r\n#L3#Page#l\r\n#L4#Spearman#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN)) {
                cm.sendSimple("Congratulations on reaching such a high level. Which would you like to be? #b\r\n#L5#Ice Lightning Wizard#l\r\n#L6#Fire Poison Wizard#l\r\n#L7#Cleric#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN)) {
                cm.sendSimple("Congratulations on reaching such a high level. Which would you like to be? #b\r\n#L8#Hunter#l\r\n#L9#Crossbowman#l#k");
            } else if (cm.getLevel() < 70) {
                cm.sendNext("Sorry, but you have to be at least level 70 to make the #rThird Job Advancement#k.");
                status = 98;
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) {
                status = 63;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
                status = 66;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
                status = 69;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
                status = 72;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
                status = 75;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
                status = 78;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
                status = 81;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
                status = 84;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
                status = 87;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
                status = 90;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getLevel() < 120) {
                cm.sendNext("Sorry, but you have to be at least level 120 to make the #rForth Job Advancement#k.");
                status = 98;
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT)) {
                status = 105;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT)) {
                status = 108;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER)) {
                status = 111;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER)) {
                status = 114;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_MAGE)) {
                status = 117;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_MAGE)) {
                status = 120;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST)) {
                status = 123;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER)) {
                status = 126;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT)) {
                status = 129;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT)) {
                status = 132;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getLevel() < 200) {
                cm.sendNext("Sorry, but you have already attained the highest level of your job's mastery. \r\n\r\nHowever, you can #rrebirth#k when you are level 200.");
                status = 98;
            } else if (cm.getLevel() == 200) {
                cm.sendYesNo("Ahh... It is good to see you again. Your skills have finally reached the maximum of its potential. So, with all my heart, I congratulate you, great hero. \r\n\r\nYou have been through a long and challenging road, and in so doing, have become immensely strong. However, I can increase your power even further, and surpass your limits! If you accept, you will become a level 1 #bBeginner#k again, but all your abilities, skills, items and mesos, will remain as they are. However, you will only be able to keep the skills that you have placed in your #bkey setting#k. \r\n\r\nSo, tell me, do you wish to be #rreborn#k?");
                status = 160;
            } else if (cm.getLevel() > 200) {
                cm.sendYesNo("Hmm... I see you have somehow surpassed the limits of your power. Unfortunately, your mind is not strong enough to harness this extra power as of yet. If this power is allowed to be left there, it will eventually take over your mind and consume your soul. Do you want me to relieve you of this burden?");
                status = 162;
            } else {
                cm.dispose();
            }

        } else if (status == 2) {
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
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) { 
                cm.teachSkill(4100000,20,20); //Claw Mastery
                cm.teachSkill(4100001,30,30); //Critical Throw
                cm.teachSkill(4100002,20,20); //Endure
                cm.teachSkill(4101003,20,20); //Claw Booster
                cm.teachSkill(4101004,20,20); //Haste
                cm.teachSkill(4101005,30,30); //Drain
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
                cm.teachSkill(4200000,20,20); //Dagger Mastery
                cm.teachSkill(4200001,20,20); //Endure
                cm.teachSkill(4201002,20,20); //Dagger Booster
                cm.teachSkill(4201003,20,20); //Haste
                cm.teachSkill(4201004,30,30); //Steal
                cm.teachSkill(4201005,30,30); //Savage Blow
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
                cm.teachSkill(1100000,20,20); //Sword Mastery
                cm.teachSkill(1100001,20,20); //Axe Mastery
                cm.teachSkill(1100002,30,30); //Final Attack: Sword
                cm.teachSkill(1100003,30,30); //Final Attack: Axe
                cm.teachSkill(1101004,20,20); //Sword Booster
                cm.teachSkill(1101005,20,20); //Axe Booster
                cm.teachSkill(1101006,20,20); //Rage
                cm.teachSkill(1101007,30,30); //Power Guard
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
                cm.teachSkill(1200000,20,20); //Sword Mastery
                cm.teachSkill(1200001,20,20); //BW Mastery
                cm.teachSkill(1200002,30,30); //Final Attack: Sword
                cm.teachSkill(1200003,30,30); //Final Attack: BW
                cm.teachSkill(1201004,20,20); //Sword Booster
                cm.teachSkill(1201005,20,20); //BW Booster
                cm.teachSkill(1201006,20,20); //Threaten
                cm.teachSkill(1201007,30,30); //Power Guard
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
                cm.teachSkill(1300000,20,20); //Spear Mastery
                cm.teachSkill(1300001,20,20); //Polearm Mastery
                cm.teachSkill(1300002,30,30); //Final Attack: Spear
                cm.teachSkill(1300003,30,30); //Final Attack: Polearm
                cm.teachSkill(1301004,20,20); //Spear Booster
                cm.teachSkill(1301005,20,20); //Polearm Booster
                cm.teachSkill(1301006,20,20); //Iron Will
                cm.teachSkill(1301007,30,30); //Hyper Body
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
                cm.teachSkill(2200000,20,20); //MP Eater
                cm.teachSkill(2201001,20,20); //Meditation
                cm.teachSkill(2201002,20,20); //Teleport
                cm.teachSkill(2201003,20,20); //Slow
                cm.teachSkill(2201004,30,30); //Cold Bean
                cm.teachSkill(2201005,30,30); //Thunderbolt
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
                cm.teachSkill(2100000,20,20); //MP Eater
                cm.teachSkill(2101001,20,20); //Meditation
                cm.teachSkill(2101002,20,20); //Teleport
                cm.teachSkill(2101003,20,20); //Slow
                cm.teachSkill(2101004,30,30); //Fire Arrow
                cm.teachSkill(2101005,30,30); //Poison Brace
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
                cm.teachSkill(2300000,20,20); //MP Eater
                cm.teachSkill(2301001,20,20); //Teleport
                cm.teachSkill(2301002,30,30); //Heal
                cm.teachSkill(2301003,20,20); //Invincible
                cm.teachSkill(2301004,20,20); //Bless
                cm.teachSkill(2301005,30,30); //Holy Arrow
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
                cm.teachSkill(3100000,20,20); //Bow Mastery
                cm.teachSkill(3100001,30,30); //Final Attack: Bow
                cm.teachSkill(3101002,20,20); //Bow Booster
                cm.teachSkill(3101003,20,20); //Power Knock-Back
                cm.teachSkill(3101004,20,20); //Soul Arrow: Bow
                cm.teachSkill(3101005,30,30); //Arrow Bomb
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
                cm.teachSkill(3200000,20,20); //Crossbow Mastery
                cm.teachSkill(3200001,30,30); //Final Attack: Crossbow
                cm.teachSkill(3201002,20,20); //Crossbow Booster
                cm.teachSkill(3201003,20,20); //Power Knock-Back
                cm.teachSkill(3201004,20,20); //Soul Arrow: Crossbow
                cm.teachSkill(3201005,30,30); //Iron Arrow
            }
            cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
            cm.dispose();

        } else if (status == 61) {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) {
                status = 63;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
                status = 66;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
                status = 69;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
                status = 72;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
                status = 75;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
                status = 78;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
                status = 81;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
                status = 84;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
                status = 87;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
                status = 90;

                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else { 
                cm.dispose();
            }



        } else if (status == 64) {
            cm.teachSkill(4110000,20,20); //Alchemist
            cm.teachSkill(4111001,20,20); //Meso Up
            cm.teachSkill(4111002,30,30); //Shadow Partner
            cm.teachSkill(4111003,20,20); //Shadow Web
            cm.teachSkill(4111004,30,30); //Shadow Meso
            cm.teachSkill(4111005,30,30); //Avenger
            cm.teachSkill(4111006,20,20); //Flash Jump
            cm.changeJob(MapleJob.HERMIT);
            cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
            cm.dispose();
        } else if (status == 67) {
            cm.teachSkill(4210000,20,20); //Shield Mastery
            cm.teachSkill(4211001,30,30); //Chakra
            cm.teachSkill(4211002,30,30); //Assaulter
            cm.teachSkill(4211003,20,20); //Pickpocket
            cm.teachSkill(4211004,30,30); //Band of Thieves
            cm.teachSkill(4211005,20,20); //Meso Guard
            cm.teachSkill(4211006,30,30); //Meso Explosion
            cm.changeJob(MapleJob.CHIEFBANDIT);
            cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
            cm.dispose();
        } else if (status == 70) {
            cm.teachSkill(3110000,20,20); //Thrust
            cm.teachSkill(3110001,20,20); //Mortal Blow
            cm.teachSkill(3111002,20,20); //Puppet
            cm.teachSkill(3111003,30,30); //Inferno
            cm.teachSkill(3111004,30,30); //Arrow Rain
            cm.teachSkill(3111005,30,30); //Silver Hawk
            cm.teachSkill(3111006,30,30); //Strafe
            cm.changeJob(MapleJob.RANGER);
            cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
            cm.dispose();
        } else if (status == 73) {
            cm.teachSkill(3210000,20,20); //Thrust
            cm.teachSkill(3210001,20,20); //Mortal Blow
            cm.teachSkill(3211002,20,20); //Puppet
            cm.teachSkill(3211003,30,30); //Blizzard
            cm.teachSkill(3211004,30,30); //Arrow Eruption
            cm.teachSkill(3211005,30,30); //Golden Eagle
            cm.teachSkill(3211006,30,30); //Strafe
            cm.changeJob(MapleJob.SNIPER);
            cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
            cm.dispose();
        } else if (status == 76) {
            cm.teachSkill(2110000,20,20); //Partial Resistance
            cm.teachSkill(2110001,30,30); //Element Amplification
            cm.teachSkill(2111002,30,30); //Explosion
            cm.teachSkill(2111003,30,30); //Poison Mist
            cm.teachSkill(2111004,20,20); //Seal
            cm.teachSkill(2111005,20,20); //Spell Booster
            cm.teachSkill(2111006,30,30); //Element Composition
            cm.changeJob(MapleJob.FP_MAGE);
            cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
            cm.dispose();
        } else if (status == 79) {
            cm.teachSkill(2210000,20,20); //Partial Resistance
            cm.teachSkill(2210001,30,30); //Element Amplification
            cm.teachSkill(2211002,30,30); //Ice Strike
            cm.teachSkill(2211003,30,30); //Thunder Spear
            cm.teachSkill(2211004,20,20); //Seal
            cm.teachSkill(2211005,20,20); //Spell Booster
            cm.teachSkill(2211006,30,30); //Element Composition
            cm.changeJob(MapleJob.IL_MAGE);
            cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
            cm.dispose();
        } else if (status == 82) {
            cm.teachSkill(2310000,20,20); //Elemental Resistance
            cm.teachSkill(2311001,20,20); //Dispel
            cm.teachSkill(2311002,20,20); //Mystic Door
            cm.teachSkill(2311003,30,30); //Holy Symbol
            cm.teachSkill(2311004,30,30); //Shining Ray
            cm.teachSkill(2311005,30,30); //Doom
            cm.teachSkill(2311006,30,30); //Summon Dragon
            cm.changeJob(MapleJob.PRIEST);
            cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
            cm.dispose();
        } else if (status == 85) {
            cm.teachSkill(1110000,20,20); //Improving MP Recovery
            cm.teachSkill(1110001,20,20); //Shield Mastery
            cm.teachSkill(1111002,30,30); //Combo Attack
            cm.teachSkill(1111003,30,30); //Panic: Sword
            cm.teachSkill(1111004,30,30); //Panic: Axe
            cm.teachSkill(1111005,30,30); //Coma: Sword
            cm.teachSkill(1111006,30,30); //Coma: Axe
            cm.teachSkill(1111007,20,20); //Armor Crash
            cm.teachSkill(1111008,30,30); //Shout
            cm.changeJob(MapleJob.CRUSADER);
            cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
            cm.dispose();
        } else if (status == 88) {
            cm.teachSkill(1210000,20,20); //Improving MP Recovery
            cm.teachSkill(1210001,20,20); //Shield Mastery
            cm.teachSkill(1211002,30,30); //Charged Blow
            cm.teachSkill(1211003,30,30); //Fire Charge: Sword
            cm.teachSkill(1211004,30,30); //Flame Charge: BW
            cm.teachSkill(1211005,30,30); //Ice Charge: Sword
            cm.teachSkill(1211006,30,30); //Blizzard Charge: BW
            cm.teachSkill(1211007,30,30); //Thunder Charge: Sword
            cm.teachSkill(1211008,30,30); //Lightning Charge: BW
            cm.teachSkill(1211009,20,20); //Magic Crash
            cm.changeJob(MapleJob.WHITEKNIGHT);
            cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
            cm.dispose();
        } else if (status == 91) {
            cm.teachSkill(1310000,20,20); //Elemental Resistance
            cm.teachSkill(1311001,30,30); //Dragon Crusher: Spear
            cm.teachSkill(1311002,30,30); //Dragon Crusher: Polearm
            cm.teachSkill(1311003,30,30); //Dragon Fury: Spear
            cm.teachSkill(1311004,30,30); //Dragon Fury: Polearm
            cm.teachSkill(1311005,30,30); //Sacrifice
            cm.teachSkill(1311006,30,30); //Dragon Roar
            cm.teachSkill(1311007,20,20); //Power Crash
            cm.teachSkill(1311008,20,20); //Dragon Blood
            cm.changeJob(MapleJob.DRAGONKNIGHT);
            cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
            cm.dispose();
        } else if (status == 99) {
            cm.sendOk("Good luck on your training.");
            cm.dispose();

        } else if (status == 102) {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT)) {
                status = 105;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT)) {
                status = 108;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER)) {
                status = 111;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER)) {
                status = 114;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_MAGE)) {
                status = 117;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_MAGE)) {
                status = 120;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST)) {
                status = 123;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER)) {
                status = 126;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT)) {
                status = 129;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT)) {
                status = 132;
                cm.sendYesNo("Congratulations on reaching such a high level. Do you want to Job Advance now?");
            } else { 
                cm.dispose();
            }


        } else if (status == 106) {
            if (cm.getSkillLevel(4121009) == 0) {
                cm.teachSkill(4121000,20,20);   //Maple Warrior
                cm.teachSkill(4120002,10,10); //Shadow Shifter
                cm.teachSkill(4121003,0,0);   //Taunt
                cm.teachSkill(4121004,10,10); //Ninja Ambush
                cm.teachSkill(4120005,10,10); //Venomous Star
                cm.teachSkill(4121006,10,10); //Shadow Claw
                cm.teachSkill(4121007,30,30);   //Triple Throw
                cm.teachSkill(4121008,10,10); //Ninja Storm
                cm.teachSkill(4121009,1,1);   //Hero's Will
            }
            cm.changeJob(MapleJob.NIGHTLORD);
            cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
            cm.dispose();
        } else if (status == 109) {
            if (cm.getSkillLevel(4221008) == 0) {
                cm.teachSkill(4221000,20,20);   //Maple Warrior
                cm.teachSkill(4221001,30,30); //Assassinate
                cm.teachSkill(4220002,20,20); //Shadow Shifter
                cm.teachSkill(4221003,0,0);   //Taunt
                cm.teachSkill(4221004,10,10); //Ninja Ambush
                cm.teachSkill(4220005,20,20); //Venomous Dagger
                cm.teachSkill(4221006,10,10); //Smokescreen
                cm.teachSkill(4221007,30,30); //Boomerang Step
                cm.teachSkill(4221008,1,1);   //Hero's Will
            }
            cm.changeJob(MapleJob.SHADOWER);
            cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
            cm.dispose();
        } else if (status == 112) {
            if (cm.getSkillLevel(3121009) == 0) {
                cm.teachSkill(3121000,0,0);   //Maple Warrior
                cm.teachSkill(3121002,10,10); //Sharp Eyes
                cm.teachSkill(3121003,0,0);   //Dragon's Breath
                cm.teachSkill(3121004,10,10); //Hurricane
                cm.teachSkill(3120005,10,10); //Bow Expert
                cm.teachSkill(3121006,10,10); //Phoenix
                cm.teachSkill(3121007,10,10); //Hamstring
                cm.teachSkill(3121008,10,10); //Concentration
                cm.teachSkill(3121009,1,1);   //Hero's Will
            }
            cm.changeJob(MapleJob.BOWMASTER);
            cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
            cm.dispose();
        } else if (status == 115) {
            if (cm.getSkillLevel(3221008) == 0) {
                cm.teachSkill(3221000,0,0);   //Maple Warrior
                cm.teachSkill(3221001,10,10); //Piercing Arrow
                cm.teachSkill(3221002,10,10); //Sharp Eyes
                cm.teachSkill(3221003,0,0);   //Dragon's Breath
                cm.teachSkill(3220004,10,10); //Crossbow Expert
                cm.teachSkill(3221005,10,10); //Frostprey
                cm.teachSkill(3221006,10,10); //Blind
                cm.teachSkill(3221007,0,0);   //Snipe
                cm.teachSkill(3221008,1,1);   //Hero's Will
            }
            cm.changeJob(MapleJob.CROSSBOWMASTER);
            cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
            cm.dispose();
        } else if (status == 118) {
            if (cm.getSkillLevel(2121008) == 0) {
                cm.teachSkill(2121000,0,0);   //Maple Warrior
                cm.teachSkill(2121001,10,10); //Big Bang
                cm.teachSkill(2121002,10,10); //Mana Reflection
                cm.teachSkill(2121003,0,0);   //Fire Demon
                cm.teachSkill(2121004,0,0);   //Infinity
                cm.teachSkill(2121005,10,10); //Elquines
                cm.teachSkill(2121006,10,10); //Paralyze
                cm.teachSkill(2121007,10,10); //Meteor Shower
                cm.teachSkill(2121008,1,1);   //Hero's Will
            }
            cm.changeJob(MapleJob.FP_ARCHMAGE);
            cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
            cm.dispose();
        } else if (status == 121) {
            if (cm.getSkillLevel(2221008) == 0) {
                cm.teachSkill(2221000,0,0);   //Maple Warrior
                cm.teachSkill(2221001,10,10); //Big Bang
                cm.teachSkill(2221002,10,10); //Mana Reflection
                cm.teachSkill(2221003,0,0);   //Fire Demon
                cm.teachSkill(2221004,0,0);   //Infinity
                cm.teachSkill(2221005,10,10); //Ifrit
                cm.teachSkill(2221006,10,10); //Chain Lightning
                cm.teachSkill(2221007,10,10); //Blizzard
                cm.teachSkill(2221008,1,1);   //Hero's Will
            }
            cm.changeJob(MapleJob.IL_ARCHMAGE);
            cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
            cm.dispose();
        } else if (status == 124) {
            if (cm.getSkillLevel(2321007) == 0) {
                cm.teachSkill(2321000,0,0);   //Maple Warrior
                cm.teachSkill(2321001,10,10); //Big Bang
                cm.teachSkill(2321002,10,10); //Mana Reflection
                cm.teachSkill(2321003,30,30); //Bahumat
                cm.teachSkill(2321004,0,0);   //Infinity
                cm.teachSkill(2321005,10,10); //Holy Shield
                cm.teachSkill(2321006,10,10); //Resurrection
                cm.teachSkill(2321007,0,0);   //Angel Ray
                cm.teachSkill(2321008,10,10); //Genesis
                cm.teachSkill(2321009,1,1);   //Hero's Will
            }
            cm.changeJob(MapleJob.BISHOP);
            cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
            cm.dispose();
        } else if (status == 127) {
            if (cm.getSkillLevel(1121011) == 0) {
                cm.teachSkill(1121000,20,20);   //Maple Warrior
                cm.teachSkill(1121001,10,10); //Monster Magnet
                cm.teachSkill(1121002,10,10); //Power Stance
                cm.teachSkill(1120003,0,0);   //Advanced Combo Attack
                cm.teachSkill(1120004,10,10); //Achilles
                cm.teachSkill(1120005,10,10); //Guardian
                cm.teachSkill(1121006,0,0);   //Rush
                cm.teachSkill(1121008,30,30); //Brandish
                cm.teachSkill(1121010,10,10); //Enrage
                cm.teachSkill(1121011,1,1);   //Hero's Will
            }
            cm.changeJob(MapleJob.HERO);
            cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
            cm.dispose();
        } else if (status == 130) {
            if (cm.getSkillLevel(1221012) == 0) {
                cm.teachSkill(1221000,0,0);   //Maple Warrior
                cm.teachSkill(1221001,10,10); //Monster Magnet
                cm.teachSkill(1221002,10,10); //Power Stance
                cm.teachSkill(1221003,19,19); //Holy Charge: Sword
                cm.teachSkill(1221004,19,19); //Divine Charge: BW
                cm.teachSkill(1220005,10,10); //Achilles
                cm.teachSkill(1220006,10,10); //Guardian
                cm.teachSkill(1221007,0,0);   //Rush
                cm.teachSkill(1221009,30,30); //Blast
                cm.teachSkill(1220010,25,25);   //Advanced Charge
                cm.teachSkill(1221011,30,30); //Heaven's Hammer
                cm.teachSkill(1221012,1,1);   //Hero's Will
            }
            cm.changeJob(MapleJob.PALADIN);
            cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
            cm.dispose();
        } else if (status == 133) {
            if (cm.getSkillLevel(1321010) == 0) {
                cm.teachSkill(1321000,20,20);   //Maple Warrior
                cm.teachSkill(1321001,20,20); //Monster Magnet
                cm.teachSkill(1321002,20,20); //Power Stance
                cm.teachSkill(1321003,0,0);   //Rush
                cm.teachSkill(1320005,20,20); //Achilles
                cm.teachSkill(1320006,30,30); //Berserk
                cm.teachSkill(1321007,0,0); //Beholder
                cm.teachSkill(1320008,0,0); //Aura of the Beholder
                cm.teachSkill(1320009,0,0); //Hex of the Beholder
                cm.teachSkill(1321010,1,1);   //Hero's Will
            }
            cm.changeJob(MapleJob.DARKKNIGHT);
            cm.sendOk("There you go. Hope you enjoy it. I've given you a full set of skills as well, aren't you lucky!");
            cm.dispose();

        } else if (status == 151) {
            if (cm.c.getPlayer().getInt() >= 20) {
                cm.teachSkill(2000000,16,16); //Improving MP Recovery
                cm.teachSkill(2000001,10,10); //Improving Max MP Increase
                cm.teachSkill(2001002,20,20); //Magic Guard
                cm.teachSkill(2001003,20,20); //Magic Armor
                cm.teachSkill(2001004,20,20); //Energy Bolt
                cm.teachSkill(2001005,20,20); //Magic Claw
                cm.changeJob(net.sf.odinms.client.MapleJob.MAGICIAN);
                cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
                cm.dispose();
            } else {
                cm.sendOk("You did not meet the minimum requirement of #r20 INT#k.");
                cm.dispose();
            }
        } else if (status == 154) {
            cm.sendSimple("Which would you like to be? #b\r\n#L0#Warrior#l\r\n#L1#Magician#l\r\n#L2#Bowman#l\r\n#L3#Thief#l#k");


        } else if (status == 155) {
            if (selection == 0) {
                jobName = "Warrior";
                job = net.sf.odinms.client.MapleJob.WARRIOR;
            }
            if (selection == 1) {
                jobName = "Magician";
                job = net.sf.odinms.client.MapleJob.MAGICIAN;
            }
            if (selection == 2) {
                jobName = "Bowman";
                job = net.sf.odinms.client.MapleJob.BOWMAN;
            }
            if (selection == 3) {
                jobName = "Thief";
                job = net.sf.odinms.client.MapleJob.THIEF;
            }
            cm.sendYesNo("Do you want to become a #r" + jobName + "#k?");
                        
                        
        } else if (status == 156) {
            if (job == net.sf.odinms.client.MapleJob.WARRIOR && cm.c.getPlayer().getStr() < 35) {
                cm.sendOk("You did not meet the minimum requirement of #r35 STR#k.");
                cm.dispose();
            } else if (job == net.sf.odinms.client.MapleJob.MAGICIAN && cm.c.getPlayer().getInt() < 20) {
                cm.sendOk("You did not meet the minimum requirement of #r20 INT#k.");
                cm.dispose();
            } else if (job == net.sf.odinms.client.MapleJob.BOWMAN && cm.c.getPlayer().getDex() < 25) {
                cm.sendOk("You did not meet the minimum requirement of #r25 DEX#k.");
                cm.dispose();
            } else if (job == net.sf.odinms.client.MapleJob.THIEF && cm.c.getPlayer().getDex() < 25) {
                cm.sendOk("You did not meet the minimum requirement of #r25 DEX#k.");
                cm.dispose();
            } else {
                cm.changeJob(job);
                if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
                    cm.teachSkill(1000000,16,16); //Improving HP Recovery
                    cm.teachSkill(1000001,10,10); //Improving Max HP Increase
                    cm.teachSkill(1000002,8,8);   //Endure
                    cm.teachSkill(1001003,20,20); //Iron Body
                    cm.teachSkill(1001004,20,20); //Power Strike
                    cm.teachSkill(1001005,20,20); //Slash Blast
                } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN)) {
                    cm.teachSkill(2000000,16,16); //Improving MP Recovery
                    cm.teachSkill(2000001,10,10); //Improving Max MP Increase
                    cm.teachSkill(2001002,20,20); //Magic Guard
                    cm.teachSkill(2001003,20,20); //Magic Armor
                    cm.teachSkill(2001004,20,20); //Energy Bolt
                    cm.teachSkill(2001005,20,20); //Magic Claw
                } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN)) {
                    cm.teachSkill(3000000,16,16); //The Blessing of Amazon
                    cm.teachSkill(3000001,20,20); //Critical Shot
                    cm.teachSkill(3000002,8,8);   //The Eye of Amazon
                    cm.teachSkill(3001003,20,20); //Focus
                    cm.teachSkill(3001004,20,20); //Arrow Blow
                    cm.teachSkill(3001005,20,20); //Double Shot
                } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF)) {
                    cm.teachSkill(4000000,20,20); //Nimble Body
                    cm.teachSkill(4000001,8,8);   //Keen Eyes
                    cm.teachSkill(4001002,20,20); //Disorder
                    cm.teachSkill(4001003,20,20); //Dark Sight
                    cm.teachSkill(4001334,20,20); //Double Stab
                    cm.teachSkill(4001344,20,20); //Lucky Seven
                }
                cm.sendOk("There you go. Hope you enjoy it. See you around in the future maybe :)");
                cm.dispose();
            }
        } else if (status == 161) {
            wui = 1;
                        var statup = new java.util.ArrayList();
                        var p = cm.c.getPlayer();
            cm.changeJob(net.sf.odinms.client.MapleJob.BEGINNER);
            cm.sendOk("You have been reborn! Good luck on your next journey.");
            p.setLevel(2);
            p.gainExp(-p.getExp(), false, false);
            statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LEVEL, java.lang.Integer.valueOf(1)));
            statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0)));
            p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
            cm.setSP(0);
            cm.dispose();

        } else if (status == 163) {
            wui = 1;
                        var statup = new java.util.ArrayList();
                        var p = cm.c.getPlayer();
            p.setLevel(201);
            statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LEVEL, java.lang.Integer.valueOf(200)));
            p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
            cm.sendYesNo("You have been cleansed. Do you wish to opt for a #rrebirth#k now?");
            status = 160;
        } else {
            cm.dispose();
        }
    }    
}  