const express = require("express");
const path = require("path");

const app = express();

app.get('/api/node', (req, res) => {
  res.send({api: 'Connected Node!'});
})

app.listen(3000, ()=> {
  console.log('app running');
})