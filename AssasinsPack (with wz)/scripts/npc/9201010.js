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
   cm.sendOk("Hehe I guess you like to take pictures. Have fun but I got a really nice gift once you decide to leave!"); 
   cm.dispose(); 
   return; 
  } 
        if (mode == 1)
            status++;
        else
            status--;
        
                 if (status == 0) {
        cm.sendYesNo("Done taking pictures then? Well I'll take you out! A little gift will be given to you as you leave");
    } else if (status == 1) {
        cm.warp(680000500,0);
        cm.dispose();
        }            
    }
}