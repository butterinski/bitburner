/** @param {NS} ns */

export async function gangFun(ns, task) {
 	let members = ns.gang.getMemberNames();
	let expThresh = ns.args[1];

	for (let i = 0; i < members.length; ++i) {
		ns.gang.setMemberTask(members[i], task);
		if (ns.gang.getMemberInformation(members[i]).def_exp > expThresh && expThresh !== 0) {
			ns.gang.ascendMember(members[i]);
		}
	}
}

export async function gangGear(ns) {
	let members = ns.gang.getMemberNames();
	const gear = ns.gang.getEquipmentNames();
	var purchased = false;
	let moneyThresh = 1000000000;

   	for (let i = 11; i < members.length; ++i) {
	   	if (ns.gang.getEquipmentCost("Graphene Bone Lacings") < 500000000 && ns.getServerMoneyAvailable("home") > moneyThresh) {
	   		for (let c = 0; c < gear.length; ++c) {
		   		ns.gang.purchaseEquipment(members[i], gear[c]);
	   		}
			var purchased = true;
		}
   	}
	return purchased;
}

export async function main(ns) {
	var pow = ns.gang.getGangInformation().power;
	var cachepow = pow;
	let n = ns.args[0];
	var gearDone = false;

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

	gangFun(ns, "Territory Warfare");

	while (true) {
		await ns.sleep(1);
		var pow = ns.gang.getGangInformation().power;

		if (cachepow !== pow) {
			
			while (true) {
				gangFun(ns, task);
				await ns.sleep(19875);
				var pow = ns.gang.getGangInformation().power;
				var cachepow = pow;
				gangFun(ns, "Territory Warfare");
				while (cachepow === pow) {
					await ns.sleep(1);
					var pow = ns.gang.getGangInformation().power;
				}
				if (gearDone === false){
					var gearDone = await gangGear(ns);
				}
			}
		}
	}
}