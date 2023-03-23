const express = require('express')
const app = express()
app.use(express.json())

var apiController = require('./src/api')
app.use('/api', apiController)

var port = process.env.PORT || 4000
app.listen(port, function () {
    console.log("Server started at port 4000");
})


/*
var io = require('socket.io').listen(app); 
io.sockets.on('connection', socket);

var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var sp = new SerialPort("/dev/tty.usbserial-A6023L0J", {
parser: serialport.parsers.readline("n"),
baudrate: 57600
});

sp.on("open", function() {
console.log('open');
sp.on('data', function(data) {
console.log('data received: ' + data);
});
});*/