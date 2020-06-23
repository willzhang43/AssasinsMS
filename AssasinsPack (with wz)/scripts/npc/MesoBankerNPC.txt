/*Scrooge
Meso Banker Made by JDawg, Owner of ParadiseMS
You are free to rip this apart if you wish, infact, i would prefer it. I hate finding 
the same NPC's all over different servers, make mine look like i just leeched all my 
NPC's even tho i made them all F5 LOL

Basic setup {x}
Check for meso/item {x}
Check for too much money {x}
Images {x}
Finished {x}
*/

var status = 0;
 
function start() {
    status = -1;
    action(1, 0, 0);
}
 
function action(mode, type, selection) {
    if (status == 3 || mode == -1) {
        cm.dispose();
    } else {
        if (status == 2) {
            status = 3;
            return;
        }
    if (mode == 1)
        status++;
    else
        status--;
  if (status == 0) {
     cm.sendSimple("Hello #b#h ##k, Welcome to the #bYOURMAPLESTORY#k Bank Manager! Im your bank manager, and i can offer you a 100% rate on your money. This means, you can store your money here, and you will recieve exactly that ammount back. I will give you a Money Envelope that u simply sell back here when you need the money. Would you like to do this? Each Envelop is worth 500,000,000. \r\n\r\nThey look like this : #i4000174#\r\n\r\n#fUI/UIWindow.img/QuestIcon/3/0##k\r\n#L1##bStore 500,000,000#l\r\n#L2##bStore 1,000,000,000#k#l\r\n#L3##bStore 1,500,000,000#k#l\r\n#L4##bStore 2,000,000,000#k#l\r\n#L5##bWithdraw 500,000,000#l\r\n#L6##bWithdraw 1,000,000,000#l\r\n#L7##bWithdraw 1,500,000,000#l\r\n#L8##bWithdraw 2,000,000,000#l\r\n#L9# No thanks, i havnt got any money...#n#l");
  } else if (status == 1) {
   if (selection == 1) {
    if (cm.getMeso() > 500000000) {
     cm.gainMeso(-500000000);    
     cm.gainItem(4000174, 1);
	cm.sendOk("#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i4000174# x1\r\n\r\nCongratulations, you now have exchanged 500,000,000 for #b1 Money Envelope#k. This can be found in your 'Ect' Inventory Tab");
     cm.dispose();
    } else {
     cm.sendOk("You dont have enough mesos in your account. #rThe transaction request for Storing 500,000,000 has been rejected.#k");
     cm.dispose();
    }        
   } else if (selection == 2) {
    if (cm.getMeso() > 1000000000) {
     cm.gainMeso(-1000000000);    
     cm.gainItem(4000174, 2);
	cm.sendOk("#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i4000174# x2\r\n\r\nCongratulations, you now have exchanged 1,000,000,000 for #b2 Money Envelopes#k. This can be found in your 'Ect' Inventory Tab");
     cm.dispose();
    } else {
     cm.sendOk("You dont have enough mesos in your account. #rThe transaction request for Storing 1,000,000,000 has been rejected.#k");
     cm.dispose();
    }
   } else if (selection == 3) {
    if (cm.getMeso() > 1500000000) {
     cm.gainMeso(-1500000000);    
     cm.gainItem(4000174, 3);
	cm.sendOk("#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i4000174# x3\r\n\r\nCongratulations, you now have exchanged 1,500,000,000 for #b3 Money Envelopes#k. This can be found in your 'Ect' Inventory Tab");
     cm.dispose();
    } else {
     cm.sendOk("You dont have enough mesos in your account. #rThe transaction request fpr Storing 1,500,000,000 has been rejected.#k");
     cm.dispose();
    }
   } else if (selection == 4) {
    if (cm.getMeso() > 2000000000) {
     cm.gainMeso(-2000000000);    
     cm.gainItem(4000174, 4);
	cm.sendOk("#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i4000174# x4\r\n\r\nCongratulations, you now have exchanged 2,000,000,000 for #b4 Money Envelopes#k. This can be found in your 'Ect' Inventory Tab");
     cm.dispose();
    } else {
     cm.sendOk("You dont have enough mesos in your account. #rThe transaction request for Storing 2,000,000,000 has been rejected.#k");
     cm.dispose();
    }
   } else if (selection == 5) {
    if (cm.getMeso() > 1600000000) {
     cm.sendOk("You have too much money in your account. you need at least 500,000,000 Mesos free space.")
     cm.dispose();
   } else if (cm.haveItem(4000174, 1)) {
     cm.gainItem(4000174, -1);
     cm.gainMeso(500000000);
	cm.sendOk("#fUI/UIWindow.img/QuestIcon/4/0# \r\n#fUI/UIWindow.img/QuestIcon/7/0#\r\n\r\nCongratulations, you now have exchanged #b1 Money Envelope#k for 500,000,000.");
     cm.dispose();
    } else {
     cm.sendOk("You dont have enough #bMoney Envelopes#k in your account. #rThe transaction request for Withdrawing 500,000,000 has been rejected.#k");
     cm.dispose();
    }
   } else if (selection == 6) {
    if (cm.getMeso() > 1100000000) {
     cm.sendOk("You have too much money in your account. you need at least 1,000,000,000 Mesos free space.")
     cm.dispose();
   } else if (cm.haveItem(4000174, 2)) {
     cm.gainItem(4000174, -2);
     cm.gainMeso(1000000000);    
	cm.sendOk("#fUI/UIWindow.img/QuestIcon/4/0# \r\n#fUI/UIWindow.img/QuestIcon/7/0#\r\n\r\nCongratulations, you now have exchanged #b2 Money Envelope#k for 1,000,000,000.");
     cm.dispose();
    } else {
     cm.sendOk("You dont have enough #bMoney Envelopes#k in your account. #rThe transaction request for Withdrawing 1,000,000,000 has been rejected.#k");
     cm.dispose();
    }
   } else if (selection == 7) {
    if (cm.getMeso() > 600000000) {
     cm.sendOk("You have too much money in your account. you need at least 1,500,000,000 Mesos free space.")
     cm.dispose();
   } else if (cm.haveItem(4000174, 3)) {
     cm.gainItem(4000174, -3);
     cm.gainMeso(1500000000);    
	cm.sendOk("#fUI/UIWindow.img/QuestIcon/4/0# \r\n#fUI/UIWindow.img/QuestIcon/7/0#\r\n\r\nCongratulations, you now have exchanged #b3 Money Envelope#k for 1,500,000,000.");
     cm.dispose();
    } else {
     cm.sendOk("You dont have enough #bMoney Envelopes#k in your account. #rThe transaction request for Withdrawing 1,500,000,000 has been rejected.#k");
     cm.dispose();
    }
   } else if (selection == 8) {
    if (cm.getMeso() > 100000000) {
     cm.sendOk("You have too much money in your account. you need at least 2,000,000,000 Mesos free space.")
     cm.dispose();
   } else if (cm.haveItem(4000174, 4)) {
     cm.gainItem(4000174, -4);
     cm.gainMeso(2000000000);    
	cm.sendOk("#fUI/UIWindow.img/QuestIcon/4/0# \r\n#fUI/UIWindow.img/QuestIcon/7/0#\r\n\r\nCongratulations, you now have exchanged #b4 Money Envelope#k for 2,000,000,000.");
     cm.dispose();
    } else {
     cm.sendOk("You dont have enough #bMoney Envelopes#k in your account. #rThe transaction request for Withdrawing 2,000,000,000 has been rejected.#k");
     cm.dispose();
    }
   } else {
    cm.sendOk("Ok, Nevermind. Have fun at #bYOUR Maplestory!#k");
    cm.dispose();
   }
  }
 }
}  