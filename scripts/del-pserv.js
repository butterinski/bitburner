/** @param {NS} ns */

export async function main(ns) {
    const pservList = ns.getPurchasedServers();
    for (var i = 0; i < pservList.length; ++i) {
        var pserv = pservList[i];
        ns.killall(pserv);
        ns.deleteServer(pserv);
    }
}