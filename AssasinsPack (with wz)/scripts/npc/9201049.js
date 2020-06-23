/*
@    Author : Snow
@
@    NPC = NAME
@    Map =  MAP
@    NPC MapId = MAPID
@    Function = Rebirth Player
@
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {//ExitChat
        cm.dispose();
 } else { 
  if (status >= 2 && mode == 0) { 
   cm.sendOk("Okay but I'm tempting you with this sweet Goodbye gift!"); 
   cm.dispose(); 
   return; 
  } 
        if (mode == 1)
            status++;
        else
            status--;
        
                 if (status == 0) {
        cm.sendYesNo("You have reached the end of this wedding and as a gift you will recieve 100 onyx apples and 100 power elixers!");
   cm.gainItem(2022179,100); 
   cm.gainItem(2000005,100); 
    } else if (status == 1) {
        cm.warp(680000000,0);
        cm.dispose();
        }            
    }
}