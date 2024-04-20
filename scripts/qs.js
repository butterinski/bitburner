/**
 * @param {NS} ns
 */
export async function main(ns) {
    let host = "home";
    let target = "foodnstuff";

    await ns.exec("./target.js", host, 1, target);
    ns.exec("./phack.js", host, 1, target);
    ns.exec("./sleeve.js", host, 1);
    if (typeof ns.gang.getMemberNames().length !== 'undefined') {
        ns.exec("./war.js", host, 1);
        ns.exec("./ascend.js", host, 1);
    }   
}