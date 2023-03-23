const { SerialPort } = require('serialport')
var port = "COM5";
var message = "5";
/*
var serialPort = new SerialPort(port, '../send.js', {
  baudRate: 9600
});*/

const serialPort = new SerialPort({
    path:port,
    baudRate:9600
  });


serialPort.write(message, function(err) {
  if (err) {
    return console.log("Error on write: ", err.message);
  }
  console.log("Message sent successfully");
});