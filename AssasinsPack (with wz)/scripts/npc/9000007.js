function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
if (mode == -1) {
cm.dispose();
} else {
status++;
if(status == 0) {
var hello_msg2 = "#b#h ##k's PvP Kills are #b" + cm.getPvpKills() + "#k.\r\n";
hello_msg2 += "#rPvPKills gain test#k Select Please.\r\n";
hello_msg2 += "#b\r\n#L0#PvPKill +5#l\r\n#L1#PvPKill -5#l#k";
cm.sendSimple(hello_msg2);
} else if (status == 1) {
if(selection == 0) {
cm.gainPvpKill(5);
cm.dispose();
} else if (selection == 1) {
if (cm.getPvpKills() < 5) {
var nopvpkills = "Lack the PvP Kills.";
cm.sendOk(nopvpkills);
} else {
cm.gainPvpKill(-5);
cm.dispose();
}
} else {
cm.dispose(); 
}
} else if (status == 2) {
cm.dispose();
}
}
}