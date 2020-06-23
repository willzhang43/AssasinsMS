/* Rupi 
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
   if (cm.getChar().getMapId() == 209000000) { 
    cm.sendYesNo("I can take you back to Henesys Are you ready to go?"); 
   } 
   else { 
    cm.sendYesNo("Santa told me to go to here, only he didn't told me when...  I hope i'm here on the right time! Oh! By the way, I'm Rupi, I can take you to HappyVille Are you ready to go?"); 
   } 
  } else if (status == 1) { 
   if (cm.getChar().getMapId() == 100000000) { 
    cm.warp(209000000, 0); 
   } 
   else { 
    cm.warp(100000000, 0); 
   } 
   cm.dispose(); 
  } 
 } 
} 