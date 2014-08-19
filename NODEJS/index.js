var net = require('net');

// create TCP server
var server = net.createServer(function (socket) {
  // write down socket
  socket.write("Echo server\r\n");
  socket.pipe(socket);
})

// start server listening on port 8124
server.listen(8124, "127.0.0.1");