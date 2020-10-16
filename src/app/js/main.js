const express = require("express");
const path = require("path");
const db = require('./models/index')

const app = express();

app.get('/api/node', (req, res) => {
  res.send({api: 'Connected Node!'});
})

app.get('/api/docker', (req, res) => {
  const dockerMsg = 'Connected Docker!';
  res.send({docker: dockerMsg});
})

app.get('/api/postgres', (req, res) => {
 db.task.findAll().then(tasks => {
   res.send(tasks);
 });
})

app.listen(3000, ()=> {
  console.log('app running');
})