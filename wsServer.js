const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 5000 });

var fullData = '';

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    ws.send(`Server received message: ${message}`);

    if (fullData.slice(-1) == ',') {
      //console.log("Data received: " + fullData);

      const jsonString = JSON.stringify(fullData)
      fs.writeFile('./data.json', jsonString, err => {
          if (err) {
              console.log('Error writing file', err)
          } else {
              console.log('Successfully wrote file')
          }
      })


        fullData = '';
    }
    else {
        fullData += message;
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
console.log("The WebSocket server is running on port 5000")