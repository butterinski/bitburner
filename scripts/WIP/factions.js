// Cracks the ports on the target server, then nukes it
var servlist = ["CSEC",
				"avmnite-02h",
				"I.I.I.I",
				"run4theh111z"];

for (var i = 0; i < servlist.length; ++i) {
	var serv = servlist[i];
	if (serverExists(serv)){
		if (fileExists("BruteSSH.exe")) {
			brutessh(serv);
		}
		if (fileExists("FTPCrack.exe")) {
			ftpcrack(serv);
		}
		if (fileExists("relaySMTP.exe")) {
			relaysmtp(serv);
		}
		if (fileExists("HTTPWorm.exe")) {
			httpworm(serv);
		}
		if (fileExists("SQLInject.exe")) {
			sqlinject(serv);
		}
		nuke(serv);
//		installBackdoor(serv);
	}
}