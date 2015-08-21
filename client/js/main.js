$(function() {
  var socket = io();
  $('form').submit(function(){
    socket.emit('chat message', $('#messageSend').val());
    $('#messageSend').val('');
    return false;
  }); 
  socket.on('chat message', function(msg){
    $('#messageContainer').append($('<li>').text(msg));
  });
});