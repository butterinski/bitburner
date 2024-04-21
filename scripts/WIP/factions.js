/** @param {NS} ns */

export async function main(ns) {
	// Cracks the ports on the target server, then nukes it
	var servlist = ["CSEC",
					"avmnite-02h",
					"I.I.I.I",
					"run4theh111z"];

	var script = "backdoor.js";

	for (var i = 0; i < servlist.length; ++i) {
		var serv = servlist[i];
		if (ns.serverExists(serv)){
			await ns.brutessh(serv);
			await ns.ftpcrack(serv);
			await ns.relaysmtp(serv);
			await ns.httpworm(serv);
			await ns.sqlinject(serv);
			await ns.nuke(serv);
			await ns.scp(script, serv);
			ns.exec(script, serv, 1);
		}
	}
}