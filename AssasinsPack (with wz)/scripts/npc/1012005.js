/* Cloy
	Pet Master
	located in Henesys Park (100000200)
*/
var status = 0;
var chat = 0;

function start() {
status = -1;
action(1,0,0);
}

function action(mode, type, selection) {
if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status >= 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("Hmm... are you raising one of my kids by any chance? I perfected a spell that uses Water of Life to blow life into a doll. People call it the #bPet#k. If you have one with you, feel free to ask me questions.");
		}
		if (status == 1) {
			cm.sendSimple("What do you want to know more of?#b\r\n#L0#Tell me more about Pets.#l\r\n#L1#How do I raise Pets?#l\r\n#L2#Do pets die too?#l\r\n#L3#What are the commands for Brown and Black Kitty?#l\r\n#L4#What are the commands for Brown Puppy?#l\r\n#L5#What are the commands for Pink and White Bunny?#l\r\n#L6#What are the commands for Mini Kargo?#l\r\n#L7#What are the commands for Rudolph, Dasher?#l\r\n#L8#What are the commands for Black Pig?#l\r\n#L9#What are the commands for Panda?#l\r\n#L10#What are the commands for Husky?#l\r\n#L11#What are the commands for Dino boy, Dino girl?#l\r\n#L12#What are the commands for Monkey?#l\r\n#L13#What are the commands for Turkey?#l\r\n#L14#What are the commands for White tiger?#l\r\n#L15#What are the commands for Penguin?#l\r\n#L16#What are the commands for Golden Pig?#l\r\n#L17#What are the commands for Robot?#l\r\n#L18#What are the commands for Mini Yeti?#l\r\n#L19#What are the commands for Jr. Balrog?#l\r\n#L20#What are the commands for Baby Dragon?#l\r\n#L21#What are the commands for Green/Red/Blue Dragon?#l\r\n#L22#What are the commands for Black Dragon?#l\r\n#L23#What are the commands for Jr. Reaper?#l\r\n#L24#What are the commands for Porcupine?#l\r\n#L25#What are the commands for Snowman?#l\r\n#L26#What are the commands for Skunk?#l\r\n#L27#Please teach me about transferring pet ability points.#l#k");			
		}
		if (status == 2) {
			if (selection == 0) {
				cm.sendNext("So you want to know more about Pets. Long ago I made a doll, sprayed Water of Life on it, and cast a spell on it to create a magical animal. I know it sounds unbelievable, but it's a doll that became an actual living thing. They understand and follow people very well.");
				chat = 1;
			} 
			else if (selection == 1) {
				cm.sendNext("Depending on the command you give, pets can love it, hate, and display other kinds of reactions to it. If you give the pet a command and it follows you well, your intimacy goes up. Double click on the pet and you can check the intimacy, level, fullness, etc..");
				chat = 2;
			} 
			else if (selection == 2) {
				cm.sendNext("Dying ... well, they aren't technically ALIVE per se, so I don't know if dying is the right term to use. They are dolls with my magical power and the power of Water of Life to become a live object. Of course while it's alive, it's just like a live animal...");
				chat = 3;
			} 
			else if (selection == 3) {
				cm.sendOk("These are the commands for #rBrown Kitty and Black Kitty.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nbad, no, badgirl, badboy#k(level 1 ~ 30)#l#b\r\nstupid, ihateyou, dummy#k(level 1 ~ 30)#l#b\r\niloveyou#k(level 1 ~ 30)#l#b\r\npoop#k(level 1 ~ 30)#l#b\r\ntalk, say, chat#k(level 10 ~ 30)#l#b\r\ncutie#k(level 10 ~ 30)#l#b\r\nup, stand, rise#k(level 20 ~ 30)#l");
				cm.dispose();
			} 
			else if (selection == 4) {
				cm.sendOk("These are the commands for #rBrown Puppy.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nbad, no, badgirl, badboy#k(level 1 ~ 30)#l#b\r\nstupid, ihateyou, baddog, dummy#k(level 1 ~ 30)#l#b\r\niloveyou#k(level 1 ~ 30)#l#b\r\npee#k(level 1 ~ 30)#l#b\r\ntalk, say, chat#k(level 10 ~ 30)#l#b\r\ndown#k(level 10 ~ 30)#l#b\r\nup, stand, rise#k(level 20 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 5) {
				cm.sendOk("These are the commands for #rPink Bunny and White Bunny.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nbad, no, badgirl, badboy#k(level 1 ~ 30)#l#b\r\nup, stand, rise#k(level 1 ~ 30)#l#b\r\niloveyou#k(level 1 ~ 30)#l#b\r\npoop#k(level 1 ~ 30)#l#b\r\ntalk, say, chat#k(level 10 ~ 30)#l#b\r\nhug#k(level 10 ~ 30)#l#b\r\nsleep, sleepy, gotobed#k(level 20 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 6) {
				cm.sendOk("These are the commands for #rMini Kargo.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nbad, no, badgirl, badboy#k(level 1 ~ 30)#l#b\r\nup, stand, rise#k(level 1 ~ 30)#l#b\r\niloveyou#k(level 1 ~ 30)#l#b\r\npee#k(level 1 ~ 30)#l#b\r\ntalk, say, chat#k(level 10 ~ 30)#l#b\r\nthelook, charisma#k(level 10 ~ 30)#l#b\r\ndown#k(level 10 ~ 30)#l#b\r\ngoodboy, goodgirl#k(level 20 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 7) {
				cm.sendOk("These are the commands for #rRudolph, Dasher.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nbad, no, badgirl, badboy#k(level 1 ~ 30)#l#b\r\nup, stand#k(level 1 ~ 30)#l#b\r\nstupid, ihateyou, dummy#k(level 1 ~ 30)#l#b\r\nmerryxmas, merrychristmas#k(level 1 ~ 30)#l#b\r\niloveyou#k(level 1 ~ 30)#l#b\r\npoop#k(level 1 ~ 30)#l#b\r\ntalk, say, chat#k(level 11 ~ 30)#l#b\r\nlonely, alone#k(level 11 ~ 30)#l#b\r\ncutie#k(level 11 ~ 30)#l#b\r\nmush, go#k(level 21 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 8) {
				cm.sendOk("These are the commands for #rBlack Pig.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nbad, no, badgirl, badboy#k(level 1 ~ 30)#l#b\r\npoop#k(level 1 ~ 30)#l#b\r\niloveyou#k(level 1 ~ 30)#l#b\r\nhand#k(level 1 ~ 30)#l#b\r\nstupid, ihateyou, dummy#k(level 1 ~ 30)#l#b\r\ntalk, say, chat#k(level 10 ~ 30)#l#b\r\nsmile#k(level 10 ~ 30)#l#b\r\nthelook, charisma#k(level 20 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 9) {
				cm.sendOk("These are the commands for #rPanda.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nchill, relax#k(level 1 ~ 30)#l#b\r\nbad, no, badgirl, badboy#k(level 1 ~ 30)#l#b\r\npoop#k(level 1 ~ 30)#l#b\r\niloveyou#k(level 1 ~ 30)#l#b\r\nup, stand, rise#k(level 1 ~ 30)#l#b\r\ntalk, chat, say#k(level 1 ~ 30)#l#b\r\nletsplay#k(level 10 ~ 30)#l#b\r\nmeh, bleh#k(level 10 ~ 30)#l#b\r\nsleep#k(level 20 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 10) {
				cm.sendOk("These are the commands for #rHusky.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nbad, no, badgirl, badboy#k(level 1 ~ 30)#l#b\r\nstupid, ihateyou, baddog, dummy#k(level 1 ~ 30)#l#b\r\nhand#k(level 1 ~ 30)#l#b\r\npoop#k(level 1 ~ 30)#l#b\r\niloveyou#k(level 1 ~ 30)#l#b\r\ndown#k(level 10 ~ 30)#l#b\r\ntalk, chat, say#k(level 10 ~ 30)#l#b\r\nup, stand, rise#k(level 20 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 11) {
				cm.sendOk("These are the commands for #rDino boy, Dino girl.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nbad, no, badboy, badgirl#k(level 1 ~ 30)#l#b\r\niloveyou#k(level 1 ~ 30)#l#b\r\npoop#k(level 1 ~ 30)#l#b\r\nsmile, laugh#k(level 1 ~ 30)#l#b\r\nstupid, ihateyou, dummy#k(level 1 ~ 30)#l#b\r\ntalk, chat, say#k(level 10 ~ 30)#l#b\r\ncutie#k(level 10 ~ 30)#l#b\r\nsleep, nap, sleepy#k(level 20 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 12) {
				cm.sendOk("These are the commands for #rMonkey.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nrest#k(level 1 ~ 30)#l#b\r\nbad, no, badboy, badgirl#k(level 1 ~ 30)#l#b\r\npee#k(level 1 ~ 30)#l#b\r\niloveyou#k(level 1 ~ 30)#l#b\r\nup, stand#k(level 1 ~ 30)#l#b\r\ntalk, chat, say#k(level 10 ~ 30)#l#b\r\nplay#k(level 10 ~ 30)#l#b\r\nmelong#k(level 10 ~ 30)#l#b\r\nsleep, gotobed, sleepy#k(level 20 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 13) {
				cm.sendOk("These are the commands for #rTurkey.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nno, rudeboy, mischief#k(level 1 ~ 30)#l#b\r\nstupid#k(level 1 ~ 30)#l#b\r\niloveyou#k(level 1 ~ 30)#l#b\r\nup, stand#k(level 1 ~ 30)#l#b\r\ntalk, chat, gobble#k(level 10 ~ 30)#l#b\r\nyes, goodboy#k(level 10 ~ 30)#l#b\r\nsleepy, birdnap, doze#k(level 20 ~ 30)#l#b\r\nbirdeye, thanksgiving, fly, friedbird, imhungry#k(level 30)#l");
				cm.dispose();
			}
			else if (selection == 14) {
				cm.sendOk("These are the commands for #rWhite Tiger.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nbad, no, badboy, badgirl#k(level 1 ~ 30)#l#b\r\niloveyou#k(level 1 ~ 30)#l#b\r\npoop#k(level 1 ~ 30)#l#b\r\nrest, chill#k(level 1 ~ 30)#l#b\r\nstupid, ihateyou, dummy#k(level 1 ~ 30)#l#b\r\ntalk, chat, say#k(level 10 ~ 30)#l#b\r\nactsad, sadlook#k(level 10 ~ 30)#l#b\r\nwait#k(level 20 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 15) {
				cm.sendOk("These are the commands for #rPenguin.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nbad, no, badboy, badgirl#k(level 1 ~ 30)#l#b\r\npoop#k(level 1 ~ 30)#l#b\r\nup, stand, rise#k(level 1 ~ 30)#l#b\r\niloveyou#k(level 1 ~ 30)#l#b\r\ntalk, chat, say#k(level 10 ~ 30)#l#b\r\nhug, hugme#k(level 10 ~ 30)#l#b\r\nwing, hand#k(level 10 ~ 30)#l#b\r\nsleep#k(level 20 ~ 30)#l#b\r\nkiss, smooch, muah#k(level 20 ~ 30)#l#b\r\nfly#k(level 20 ~ 30)#l#b\r\ncute, adorable#k(level 20 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 16) {
				cm.sendOk("These are the commands for #rGolden Pig.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nbad, no, badboy, badgirl#k(level 1 ~ 30)#l#b\r\npoop#k(level 1 ~ 30)#l#b\r\niloveyou#k(level 1 ~ 30)#l#b\r\ntalk, chat, say#k(level 11 ~ 30)#l#b\r\nloveme, hugme#k(level 11 ~ 30)#l#b\r\nsleep, sleepy, gotobed#k(level 21 ~ 30)#l#b\r\nignore / impressed / outofhere#k(level 21 ~ 30)#l#b\r\nroll, showmethemoney#k(level 21 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 17) {
				cm.sendOk("These are the commands for #rRobot.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nup, stand, rise#k(level 1 ~ 30)#l#b\r\nstupid, ihateyou, dummy#k(level 1 ~ 30)#l#b\r\nbad, no, badgirl, badboy#k(level 1 ~ 30)#l#b\r\nattack, charge#k(level 1 ~ 30)#l#b\r\niloveyou#k(level 1 ~ 30)#l#b\r\ngood, thelook, charisma#k(level 11 ~ 30)#l#b\r\nspeak, talk, chat, say#k(level 11 ~ 30)#l#b\r\ndisquise, change, transform#k(level 11 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 18) {
				cm.sendOk("These are the commands for #rMini Yeti.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nbad, no, badboy, badgirl#k(level 1 ~ 30)#l#b\r\npoop#k(level 1 ~ 30)#l#b\r\ndance, boogie, shakeit#k(level 1 ~ 30)#l#b\r\ncute, cutie, pretty, adorable#k(level 1 ~ 30)#l#b\r\niloveyou, likeyou, mylove#k(level 1 ~ 30)#l#b\r\ntalk, chat, say#k(level 11 ~ 30)#l#b\r\nsleep, nap, sleepy, gotobed#k(level 11 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 19) {
				cm.sendOk("These are the commands for #rJr. Balrog.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nliedown#k(level 1 ~ 30)#l#b\r\nno, bad, badgirl, badboy#k(level 1 ~ 30)#l#b\r\niloveyou, mylove, likeyou#k(level 1 ~ 30)#l#b\r\ncute, cutie, pretty, adorable#k(level 1 ~ 30)#l#b\r\npoop#k(level 1 ~ 30)#l#b\r\nsmirk, crooked, laugh#k(level 1 ~ 30)#l#b\r\nmelong#k(level 11 ~ 30)#l#b\r\ngood, thelook, charisma#k(level 11 ~ 30)#l#b\r\nspeak, talk, chat, say#k(level 11 ~ 30)#l#b\r\nsleep, nap, sleepy#k(level 11 ~ 30)#l#b\r\ngas#k(level 21 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 20) {
				cm.sendOk("These are the commands for #rBaby Dragon.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nno, bad, badgirl, badboy#k(level 1 ~ 30)#l#b\r\niloveyou, loveyou#k(level 1 ~ 30)#l#b\r\npoop#k(level 1 ~ 30)#l#b\r\nstupid, ihateyou, dummy#k(level 1 ~ 30)#l#b\r\ncutie#k(level 11 ~ 30)#l#b\r\ntalk, chat, say#k(level 11 ~ 30)#l#b\r\nsleep, sleepy, gotobed#k(level 11 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 21) {
				cm.sendOk("These are the commands for #rGreen/Red/Blue Dragon.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 15 ~ 30)#l#b\r\nno, bad, badgirl, badboy#k(level 15 ~ 30)#l#b\r\niloveyou, loveyou#k(level 15 ~ 30)#l#b\r\npoop#k(level 15 ~ 30)#l#b\r\nstupid, ihateyou, dummy#k(level 15 ~ 30)#l#b\r\ntalk, chat, say#k(level 15 ~ 30)#l#b\r\nsleep, sleepy, gotobed#k(level 15 ~ 30)#l#b\r\nchange#k(level 21 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 22) {
				cm.sendOk("These are the commands for #rBlack Dragon.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 15 ~ 30)#l#b\r\nno, bad, badgirl, badboy#k(level 15 ~ 30)#l#b\r\niloveyou, loveyou#k(level 15 ~ 30)#l#b\r\npoop#k(level 15 ~ 30)#l#b\r\nstupid, ihateyou, dummy#k(level 15 ~ 30)#l#b\r\ntalk, chat, say#k(level 15 ~ 30)#l#b\r\nsleep, sleepy, gotobed#k(level 15 ~ 30)#l#b\r\ncutie, change#k(level 21 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 23) {
				cm.sendOk("These are the commands for #rJr. Reaper.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nno, bad, badgirl, badboy#k(level 1 ~ 30)#l#b\r\nplaydead, poop#k(level 1 ~ 30)#l#b\r\ntalk, chat, say#k(level 1 ~ 30)#l#b\r\niloveyou, hug#k(level 1 ~ 30)#l#b\r\nsmellmyfeet, rockout, boo#k(level 1 ~ 30)#l#b\r\ntrickortreat#k(level 1 ~ 30)#l#b\r\nmonstermash#k(level 1 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 24) {
				cm.sendOk("These are the commands for #rPorcupine.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nno, bad, badgirl, badboy#k(level 1 ~ 30)#l#b\r\niloveyou, hug, goodboy#k(level 1 ~ 30)#l#b\r\ntalk, chat, say#k(level 1 ~ 30)#l#b\r\ncusion, sleep, knit, poop#k(level 1 ~ 30)#l#b\r\ncomb, beach#k(level 10 ~ 30)#l#b\r\ntreeninja#k(level 20 ~ 30)#l#b\r\ndart#k(level 20 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 25) {
				cm.sendOk("These are the commands for #rSnowman.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nstupid, ihateyou, dummy#k(level 1 ~ 30)#l#b\r\nloveyou, mylove, ilikeyou#k(level 1 ~ 30)#l#b\r\nmerrychristmas(level 1 ~ 30)#l#b\r\ncutie, adorable, cute, pretty#k(level 1 ~ 30)#l#b\r\ncomb, beach, bad, no, badgirl, badboy#k(level 1 ~ 30)#l#b\r\ntalk, chat, say, sleep, sleepy, gotobed#k(level 10 ~ 30)#l#b\r\nchange#k(level 20 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 26) {
				cm.sendOk("These are the commands for #rSkunk.#k The level mentioned next to the command shows the pet level required for it to respond.#b\r\nsit#k(level 1 ~ 30)#l#b\r\nbad, no, badgirl, badboy#k(level 1 ~ 30)#l#b\r\nrestandrelax, poop#k(level 1 ~ 30)#l#b\r\ntalk, chat, say, iloveyou#k(level 1 ~ 30)#l#b\r\nsnuggle, hug, sleep, goodboy#k(level 1 ~ 30)#l#b\r\nfatty, blind, badbreath#k(level 10 ~ 30)#l#b\r\nsuitup, bringthefunk#k(level 20 ~ 30)#l");
				cm.dispose();
			}
			else if (selection == 27) {
				cm.sendOk("I'm sorry, but transferring pet ability points is not yet available in StreetMS.");
				cm.dispose();
			}
		}
		if (status == 3) {
			if (chat == 1) {
				cm.sendNext("But Water of Life only comes out a little at the very bottom of the World Tree, so I can't give him too much time in life ... I know, it's very unfortunate ... but even if it becomes a doll again I can always bring life back into it so be good to it while you're with it.");
				chat = 1;
			}
			else if (chat == 2) {
				cm.sendNext("Talk to the pet, pay attention to it and its intimacy level will go up and eventually his overall level will go up too. As the intimacy level rises, the pet's overall level will rise soon after. As the overall level rises, one day the pet may even talk like a person a little bit, so try hard raising it. Of course it won't be easy doing so...");
				chat = 2;
			}
			else if (chat == 3) {
				cm.sendNext("After some time ... that's correct, they stop moving. They just turn back to being a doll, after the effect of magic dies down and Water of Life dries out. But that doesn't mean it's stopped forever, because once you pour Water of Life over, it's going to be back alive.");
				chat = 3;
			}
		}
		if (status == 4) {
			if (chat == 1) {
				cm.sendOk("Oh yeah, they'll react when you give them special commands.  You can scold them love them ... it all depends on how you take care of them. They are afraid to leave their masters so be nice to them, show them love. They can get sad and lonely fast ...");
				cm.dispose();
			}
			else if (chat == 2) {
				cm.sendNext("It may be a live doll, but they also have life so they can feel the hunger too. #bFullness#k shows the level of hunger the pet's in. 100 is the max, and the lower it gets, it means that the pet is getting hungrier. After a while, it won't even follow your command and be on the offensive, so watch out over that.");
			}
			else if (chat == 3) {
				cm.sendOk("Even if it someday moves again, it's sad to see them stop altogether. Please be nice to them while they are alive and moving. Feed them well, too. Isn't it nice to know that there's something alive that follows and listens to only you?");
				cm.dispose();
			}
		}
		if (status == 5) {
			cm.sendNext("Oh yes! Pets can't eat the normal human food. Instead my disciple #bDoofus#k sells #bPet food#k, along with the pets themselves, at the Henesys market, so if you need food for your pet, find Henesys. It'll be a good idea to buy the food in advance and feed the pet before it gets really hungry.");
		}
		if (status == 6) {
			cm.sendOk("Oh, and if you don't feed the pet for along period of time, it goes back home by itself. You can take it out of its home and feed it, but it's not really good for the pet's health, so try feeding him on a regular basis so it doesn't go down to that level, alright? I think this will do.");
			cm.dispose();
		}
	}
}
