var status = 0; 
function start() { 
 cm.sendYesNo("We have a beautiful christmas tree.\r\nDo you want to see/decorate it?"); 
} 
function action(mode, type, selection) { 
 if (mode == 1) { 
  if (cm.getChar().getGender() == 0) { 
   cm.warp(209000001); 
  } else { 
   cm.warp(209000001); 
  } 
 } 
 cm.dispose(); 
} 