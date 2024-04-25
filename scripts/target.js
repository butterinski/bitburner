/** @param {NS} ns */

export async function main(ns) {
	var serv = ns.args[0];
	const file = ["BruteSSH.exe",
				  "FTPCrack.exe",
				  "relaySMTP.exe",
				  "HTTPWorm.exe",
				  "SQLInject.exe"];

	for (let i = 0; i < file.length; ++i) {
		if (ns.serverExists(serv)){
			if (ns.fileExists(file[i])) {
				switch (i) {
					case 0:
						ns.brutessh(serv);
						break;
					case 1:
						ns.ftpcrack(serv);
						break;
					case 2:
						ns.relaysmtp(serv);
						break;
					case 3:
						ns.httpworm(serv);
						break;
					case 4:
						ns.sqlinject(serv);
						break;
				}
			}
		}
	}
	ns.nuke(serv);
}