/** @param {NS} ns */

export async function main(ns) {
    let script = "hack.js";
    var ram = 8;
    let target = ns.args[0];

	for (var i = 0; i < 99 ; ++i ) {

		if (ram > ns.getPurchasedServerMaxRam()) {
			var ram = ns.getPurchasedServerMaxRam();
			var i = 99;
		}

        var thread = Math.floor(ram / ns.getScriptRam(script));

        for (let c = 0; c < ns.getPurchasedServerLimit(); ++c) {
            ns.printf(c);
            if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
                if (i > 0) {
                    ns.killall("pserv-" + c);
                    ns.deleteServer("pserv-" + c);
                }
                var hostname = ns.purchaseServer("pserv-" + c, ram);
                await ns.scp(script, hostname);
                ns.exec(script, hostname, thread, target);
            }
        }
        var ram = ram * 4;
    }
}