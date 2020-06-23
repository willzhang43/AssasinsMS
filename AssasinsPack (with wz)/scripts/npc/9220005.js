/* Roodolph 
 HappyVille warper. 
*/ 
var status = 0; 
function start() { 
 status = -1; 
 action(1, 0, 0); 
} 
function action(mode, type, selection) { 
 if (mode == -1) { 
  cm.dispose(); 
 } else { 
  if (status >= 0 && mode == 0) { 
   cm.sendOk("Ok, feel free to hang around until you're ready to go!"); 
   cm.dispose(); 
   return; 
  } 
  if (mode == 1) 
   status++; 
  else 
   status--; 
  if (status == 0) { 
   if (cm.getChar().getMapId() == 209080000) { 
    cm.sendYesNo("I can take you back to HappyVille Are you ready to go?"); 
   } 
   else { 
    cm.sendYesNo("Would You Like Me To Warp You To Extra Frosty Snow Zone?"); 
   } 
  } else if (status == 1) { 
   if (cm.getChar().getMapId() == 209000000) { 
    cm.warp(209080000, 0); 
   } 
   else { 
    cm.warp(209000000, 0); 
   } 
   cm.dispose(); 
  } 
 } 
} 