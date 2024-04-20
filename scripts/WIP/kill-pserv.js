// Kills all scripts running on private servers
for (var i = 0; i < getPurchasedServers().length; ++i) {
	var serv = "pserv-" + i;
	killall(serv);
}