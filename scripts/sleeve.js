/** @param {NS} ns */

export async function main(ns) {
    
    const sleeveList = [];
    for (let a = 0; a < ns.sleeve.getNumSleeves(); ++a) {
        if (ns.sleeve.getSleeve(a).sync < 100 || ns.sleeve.getSleeve(a).shock > 0) {
            sleeveList.push(a);
        }
    }

    for (let c = 0; c < 3; ++c) {
        for (let i = 0; i < sleeveList.length; ++i) {
            switch (c) {
                case 0:
                    ns.sleeve.setToShockRecovery(sleeveList[i]);
                    break;
                case 1:
                    while (ns.sleeve.getSleeve(sleeveList[i]).shock > 0) {
                        ns.print("Sleeve " + sleeveList[i] + ": Shock = " + ns.sleeve.getSleeve(sleeveList[i]).shock);
                        await ns.sleep(600000);
                    }
                    ns.sleeve.setToSynchronize(sleeveList[i]);
                    ns.print("Sleeve " + sleeveList[i] + " set to Synchronize");
                    break;
                case 2:
                    while (ns.sleeve.getSleeve(sleeveList[i]).sync < 100) {
                        ns.print("Sleeve " + sleeveList[i] + ": Sync = " + ns.sleeve.getSleeve(sleeveList[i]).sync);
                        await ns.sleep(600000);
                    }
                    ns.sleeve.setToBladeburnerAction(sleeveList[i], "Training");
                    ns.print("Sleeve " + sleeveList[i] + " set to Training at Bladeburner");
                    break;
            }
        }
    }   
}