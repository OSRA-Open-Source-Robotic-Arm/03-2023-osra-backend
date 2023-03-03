const express = require('express')
const app = express()
app.use(express.json())

var apiController = require('./src/api')
app.use('/api', apiController)

var port = process.env.PORT || 4000
app.listen(port, function () {
    console.log("Server started at port 4000");
})

