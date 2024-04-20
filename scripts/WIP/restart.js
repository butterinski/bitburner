let script = "hack.js"

for (let i = 0; i < getPurchasedServers().length; ++i) {
	let serv = "pserv-" + i;
	let thread = Math.floor(getServerMaxRam(serv) / getScriptRam(script));
    killall(serv);
    scp(script, serv);
    exec(script, serv, thread);
}