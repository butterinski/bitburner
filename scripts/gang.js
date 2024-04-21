/** @param {NS} ns */

export async function gangfun(ns, task) {
 	let members = ns.gang.getMemberNames();
	let expThresh = 50000;

	for (let i = 0; i < members.length; ++i) {
		ns.gang.setMemberTask(members[i], task);
		if (ns.gang.getMemberInformation(members[i]).def_exp > expThresh && ns.args[1] === 1) {
			ns.gang.ascendMember(members[i]);
		}
	}
}

export async function main(ns) {
	var pow = ns.gang.getGangInformation().power;
	var cachepow = pow;
	let n = ns.args[0];

	switch (n) {
		case "cash": 
			var task = "Human Trafficking";
			break;
		case "war":
			var task = "Territory Warfare";
			break;
		case "vigi":
			var task = "Vigilante Justice";
			break;
		case "t":
			var task = "Terrorism";
			break;
		case "mug":
			var task = "Mug People";
			break;
		default:
			var task = "Train Combat";
			break;
	}

	gangfun(ns, "Territory Warfare");

	while (true) {
		await ns.sleep(1);
		var pow = ns.gang.getGangInformation().power;

		if (cachepow !== pow) {
			
			while (true) {
				gangfun(ns, task);
				await ns.sleep(19875);
				var pow = ns.gang.getGangInformation().power;
				var cachepow = pow;
				gangfun(ns, "Territory Warfare");
				while (cachepow === pow) {
					await ns.sleep(1);
					var pow = ns.gang.getGangInformation().power;
				}
			}
		}
	}
}