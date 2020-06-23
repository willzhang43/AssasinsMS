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
   cm.sendOk("Okay enjoy the wedding"); 
   cm.dispose(); 
   return; 
  } 
        if (mode == 1)
            status++;
        else
            status--;
        
                 if (status == 0) {
        cm.sendYesNo("Would you like to go to amoria?");
    } else if (status == 1) {
        cm.warp(680000000,0);
        cm.dispose();
        }            
    }
}