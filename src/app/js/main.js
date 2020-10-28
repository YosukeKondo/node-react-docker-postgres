const express = require("express");
const path = require("path");
const db = require('./models/index')
const socket = require('socket.io');

const app = express();

app.get('/api/chat', (req, res) => {
  db.chat.findAll().then(records => {
    res.send(records);
  });
})

const server = app.listen(3000, () => {
  console.log('app running');
});

const io = socket(server);

io.on('connection', (socket) => {
  console.log("socketid: " + socket.id);

  socket.on('SEND_MESSAGE', function (data) {
    console.log('data:' + data);
    db.chat.create(data);
    io.emit('RECEIVE_MESSAGE', data);
  })
});