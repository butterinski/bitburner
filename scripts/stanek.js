/**
 * @param {NS} ns
 */
export async function main(ns) {
    const rootX = [0,0,3,2,4,2,0];
    const rootY = [0,1,0,1,1,3,3];
    while (true) {
        for (let i = 0; i < rootX.length; ++i) {
            await ns.stanek.chargeFragment(rootX[i], rootY[i]);
        }   
    }
}