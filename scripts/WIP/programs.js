// List of programs
var programs = [
	"BruteSSH.exe",
	"FTPCrack.exe",
	"relaySMTP.exe",
	"HTTPWorm.exe",
	"SQLInject.exe",
	"ServerProfiler.exe",
	"DeepscanV1.exe",
	"DeepscanV2.exe",
	"AutoLink.exe"];
	//"Formulas.exe"];

var cost = [
	0,
	1500000,
	5000000,
	30000000,
	250000000,
	500000,
	500000,
	25000000,
	1000000];
	//5000000000];

// Script to autobuy all programs
for (var c = 0; c < programs.length; ++c) {

	if (getServerMoneyAvailable("home") > cost[c]) {
	purchaseProgram(programs[c])
	}

}