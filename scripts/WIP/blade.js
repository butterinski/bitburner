/** @param {NS} ns */

export async function gangfun(ns, task) {
	const skill = ns.bladeburner.getSkillNames();
	const ops = ns.bladeburner.getBlackOpNames();
	let n = ns.args[0];
	switch (n) {
		case "skill":
			for (let i = 0; i < 5; ++i) {
				for (let c = 0; c < bladeburner.getSkillNames().length; ++c) {
					ns.bladeburner.upgradeSkill(bladeburner.skill[i]);
				}
			}
			break;
		case "blops":
			for (let i = 0; i < skill.length; ++i) {
				ns.bladeburner.startAction("blackops", ops[i]);
			}
			break;
		default:
			break;
	}
	
}