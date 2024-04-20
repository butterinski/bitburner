/**
 * @param {NS} ns
 */
export async function main(ns) {
    var script = "hack.js";
    var hostname = "home";
    var freeram = 12;

    var threads = Math.floor((ns.getServerMaxRam(hostname) - ns.getServerUsedRam(hostname) - freeram) / ns.getScriptRam(script));
    ns.exec(script, hostname, threads, ns.args[0]);
}