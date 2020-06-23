var status = 0; 
function start() { 
 cm.sendYesNo("I can warp you back to HappyVille.\r\nDo you want to go back?"); 
} 
function action(mode, type, selection) { 
 if (mode == 1) { 
  if (cm.getChar().getGender() == 0) { 
   cm.warp(209000000); 
  } else { 
   cm.warp(209000000); 
  } 
 } 
 cm.dispose(); 
} 