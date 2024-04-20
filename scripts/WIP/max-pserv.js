var ram = getPurchasedServerMaxRam();
var script = 'hack.script';
var thread = Math.floor(ram / getScriptRam(script)); 
var i = 0;

while (i < getPurchasedServerLimit()) {
	var hostname = purchaseServer("pserv-" + i, ram);
	scp(script, hostname);
	exec(script, hostname, thread);
	++i
}