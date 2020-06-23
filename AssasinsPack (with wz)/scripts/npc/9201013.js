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
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
        cm.sendYesNo("Hi Im here to warp you in the cathedral. Once you're inside Nicole will send you down to be married. Once you're ready click on the Priest to go take pictures.If you by accidently clicked my don't worry because Debbie inside will warp you out! Have fun!");
} else if (status == 1) {
        cm.warp(680000210,0);
        cm.dispose();
        }            
    }
}