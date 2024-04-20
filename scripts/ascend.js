/** @param {NS} ns **/
export async function main(ns) {
    let members = ns.gang.getMemberNames();

    while (true) {
        for (let i = 0; i < members.length; ++i) {
            if (ns.gang.getMemberInformation(members[i]).def_exp > 25000 && ns.gang.getMemberInformation(members[i]).task == "Train Combat") {
                ns.gang.ascendMember(members[i]);
            }
        }
        await ns.sleep(300000);
    }
}