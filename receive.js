const fs = require('fs')

const { SerialPort } = require('serialport')
var port = "COM5";
var message = "2";

const serialPort = new SerialPort({
    path:port,
    baudRate:9600
  });

  var fullData = '';



serialPort.on("open", function() {
  console.log("-- Connection opened --");
  serialPort.on("data", function(data) {
    console.log("Data received: " + data);

    
    if (fullData.slice(-1) == ',') {
        //console.log("Data received: " + fullData);

        const jsonString = JSON.stringify(fullData)
        /*fs.writeFile('./data.json', jsonString, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })*/


        fullData = '';
    }
    else {
        fullData += data;
    }
    });
});

serialPort.write(message, function(err) {
    if (err) {
        return console.log("Error on write: ", err.message);
    }
    console.log("Message sent successfully");
});