/** @param {NS} ns */

export async function main(ns) {

    ns.disableLog('ALL');
    ns.tail();

    for (var i = 0; i < ns.sleeve.getNumSleeves(); ++i) {
        ns.sleeve.setToShockRecovery(i);
    } --i

    while (ns.sleeve.getSleeve(i).shock > 20) {
        ns.clearLog();
        ns.print("Sleeve Shock: " + ns.sleeve.getSleeve(i).shock.toFixed(2) + "%");
        await ns.sleep(10000);
    }

    for (i = 0; i < ns.sleeve.getNumSleeves(); ++i) {
        ns.sleeve.setToSynchronize(i);
    } --i

    while (ns.sleeve.getSleeve(i).sync < 100) {
        ns.clearLog();
        ns.print("Sleeve Sync: " + ns.sleeve.getSleeve(i).sync.toFixed(2) + "%");
        await ns.sleep(10000);
    }

// BN4-3: UPDATE TO ns.sleeve.getSleeve(i).getCrimeChance("homicide") < 66 [MAYBE]
    
    for (i = 0; i < ns.sleeve.getNumSleeves(); ++i) {
        ns.sleeve.setToCommitCrime(i, "Mug");
    } --i

    while (ns.sleeve.getSleeve(i).skills.defense < 125) {
        ns.clearLog();
        ns.print("Sleeve Defense: Lvl. " + ns.sleeve.getSleeve(i).skills.defense);
        await ns.sleep(10000);
    }

    for (i = 0; i < ns.sleeve.getNumSleeves(); ++i) {
        ns.sleeve.setToCommitCrime(i, "Homicide");
    }

    while (ns.heart.break() > -54000) {
        ns.clearLog();
        ns.print("Karma: " + Math.trunc(ns.heart.break()));
        await ns.sleep(10000);
    }



    for (i = 0; i < ns.sleeve.getNumSleeves(); ++i) {
        switch (i) {

            case 0:
            case 1:
            case 2:
                ns.sleeve.setToBladeburnerAction(i, "Training");
                break;
            
            case 3:
            case 4:
            case 5:
                ns.sleeve.setToBladeburnerAction(i, "Infiltrate Synthoids");
                break;
            
            case 6:
                ns.sleeve.setToBladeburnerAction(i, "Field Analysis");
                break;
            case 7:
                ns.sleeve.setToBladeburnerAction(i, "Diplomacy");
                break;
                
//            case 5:
//            case 6:
//            case 7:
//                switch (i) {
//                    case 5:
//                        var contract = "Tracking";
//                        break;
//            
//                    case 6:
//                        var contract = "Bounty Hunter";
//                        break;
//
//                    case 7:
//                        var contract = "Retirement";
//                        break;
//                    default:
//                        break;
//
//                }
//                ns.sleeve.setToBladeburnerAction(i, "Take on contracts", contract);
//                break;

            default:
                ns.sleeve.setToBladeburnerAction(i, "Training");
                break;
        }
    } 
}