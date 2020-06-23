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
   cm.sendOk("Okay talk to me when you're ready to be #bmarried#k"); 
   cm.dispose(); 
   return; 
  } 
        if (mode == 1)
            status++;
        else
            status--;
        
                 if (status == 0) {
        cm.sendYesNo("Im going to warp you to a map with wedding boxes! Break them open for the party of a lifetime! Click on Robin the Huntress when you're ready to leave!");
    } else if (status == 1) {
        cm.warp(680000401,0);
        cm.dispose();
        }            
    }
}