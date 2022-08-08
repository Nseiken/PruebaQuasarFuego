const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT;

app.get('/', function (req, res) {
  res.send('Hello World NODEJS EXPRESS')
})

app.listen(port)

console.log('Escuchando el puerto', port);