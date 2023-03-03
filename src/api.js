var express = require("express")
var router = express.Router()
var dataJson = require('../data.json');
const fs = require('fs')

router.get('/get', (req, res) => {
  fs.readFile("./data.json", "utf8", (err, jsonString) => {
    if (err) {
      res.json({
        message: "File read failed: " + err
      })
    }

    try {
      const response = JSON.parse(jsonString);
      res.json(response)
    } catch (err) {
      res.json({
        message: "Error parsing JSON string: " + err
      })
    }
  });
})

router.post('/post', (req, res) => {
  const jsonString = JSON.stringify(req.body)
  fs.writeFile('./data.json', jsonString, err => {
      if (err) {
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote file')
        res.json({
          message: "The data has been updated successfully !"
        })
      }
  })
})


module.exports = router