/** @param {NS} ns */

export async function main(ns) {

    ns.disableLog('ALL');
    ns.tail();

    const sleeveList = [];
    for (let a = 0; a < ns.sleeve.getNumSleeves(); ++a) {
//        if (ns.sleeve.getSleeve(a).sync < 100 || ns.sleeve.getSleeve(a).shock > 0) {
              sleeveList.push(a);
//        }
    }

    for (let c = 0; c < 5; ++c) {
        for (let i = 0; i < sleeveList.length; ++i) {
            switch (c) {
                case 0:
                    ns.sleeve.setToShockRecovery(sleeveList[i]);
                    break;

                case 1:
                    while (ns.sleeve.getSleeve(sleeveList[i]).shock > 0) {
                        ns.clearLog();
                        ns.print("Sleeve " + sleeveList[i] + ": " + ns.sleeve.getSleeve(sleeveList[i]).shock.toFixed(2) + "% Shock");
                        await ns.sleep(60000);
                    }
                    ns.sleeve.setToSynchronize(sleeveList[i]);
                    break;
    
                case 2:
                    while (ns.sleeve.getSleeve(sleeveList[i]).sync < 100) {
                        ns.clearLog();
                        ns.print("Sleeve " + sleeveList[i] + ": " + ns.sleeve.getSleeve(sleeveList[i]).sync.toFixed(2) + "% Sync");
                        await ns.sleep(60000);
                    }
                    ns.sleeve.setToCommitCrime(sleeveList[i], "Mug");
                    break;

// BN4-3: UPDATE TO ns.sleeve.getSleeve(sleeveList[i]).getCrimeChance("homicide") < 66
                case 3:
                    while (ns.sleeve.getSleeve(sleeveList[i]).skills.defense < 125) {
                        ns.clearLog();
                        ns.print("Sleeve " + sleeveList[i] + ": Level " + ns.sleeve.getSleeve(sleeveList[i]).skills.defense);
                        await ns.sleep(60000);
                    }
                    ns.sleeve.setToCommitCrime(sleeveList[i], "Homicide");
                    break;
    
                case 4:
                    while (ns.heart.break() > -54000) {
                        ns.clearLog();
                        ns.print("Karma: " + Math.trunc(ns.heart.break()));
                        await ns.sleep(10000);
                    }
                    break;
            }
        }
    }  

    for (let i = 0; i < sleeveList.length; ++i) {
        switch (i) {
            case 0:
            case 1:
            case 2:
                var task = "Take on contracts";
                switch (i) {
                    case 0:
                        var contract = "Tracking";
                        break;
            
                    case 1:
                        var contract = "Bounty Hunter";
                        break;

                    case 2:
                        var contract = "Retirement";
                        break;

                }
                break;

            case 3:
            case 4:
                var task = "Field Analysis";
                break;

            case 5:
            case 6:
                var task = "Infiltrate Synthoids";
                break;

            case 7:
                var task = "Training";
                break;
        }

        switch (i) {
            case 0:
            case 1:
            case 2:
                ns.sleeve.setToBladeburnerAction(i, task, contract); 
                break;

            default:
                ns.sleeve.setToBladeburnerAction(i, task);
                break;
    
        }
    } 
}