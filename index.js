var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Serve client folder
app.use((express.static(__dirname+ '/client')));

// Socket.io handlers
io.on('connection', function(socket){
  console.log('A new user has connected');

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    console.log('A user has disconnected');
  });
});

// Start Server
http.listen(3000, function(){
  console.log('Listening on port 3000');
});