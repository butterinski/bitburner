/**
 * @param {NS} ns
 */
export async function main(ns) {
	let members = ns.gang.getMemberNames();
	let equipment = ns.gang.getEquipmentNames();

	for (let i = 0; i < members.length; ++i) {
		for (let b = 0; b < equipment.length; ++b) {
			ns.gang.purchaseEquipment(members[i], equipment[b]);
		}
	}
}