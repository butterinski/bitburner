/**
 * @param {NS} ns
 */
export async function main(ns) {
    for (let c = 0; c < 3; ++c) {
        for (let i = 0; i < ns.sleeve.getNumSleeves(); ++i) {
            switch (c) {
                case 0:
                    ns.sleeve.setToShockRecovery(i);
                    break;
                case 1:
                    while (ns.sleeve.getSleeve(i).shock > 0) {
                        ns.print("Sleeve " + i + ": Shock = " + ns.sleeve.getSleeve(i).shock);
                        await ns.sleep(600000);
                    }
                    ns.sleeve.setToSynchronize(i);
                    ns.print("Sleeve " + i + " set to Synchronize");
                    break;
                case 2:
                    while (ns.sleeve.getSleeve(i).sync < 100) {
                        ns.print("Sleeve " + i + ": Sync = " + ns.sleeve.getSleeve(i).sync);
                        await ns.sleep(600000);
                    }
                    ns.sleeve.setToCommitCrime(i, "Mug");
                    ns.print("Sleeve " + i + " set to Mugging");
                    break;
            }
        }
    }   
}