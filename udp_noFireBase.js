'use strict';

var PORT = 8080;
var IP = "";

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

const getIP = require('external-ip')();

getIP((err, ip) => {
    if (err) {
        throw err;
    }
    console.log(ip + ":" + PORT);
	IP = ip;
	IP: IP,
	PORT: PORT
});
});


server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);
	var temp = remote.address + ":" + remote.port;
	server.send(temp, 0, temp.length, remote.port, remote.address);
});

server.bind(PORT);