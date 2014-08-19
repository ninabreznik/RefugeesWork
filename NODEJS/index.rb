require 'socket'      # Sockets are in standard library

hostname = '127.0.0.1'
port = 8124

s = TCPSocket.open(hostname, port)


#loop do
#	client = s.accept
#	client.puts “The connection is now in place”
#	client.puts “The time is #(Time.now)”
#	client.puts “The connection is now closed. Thank you for connecting”
#	client.close
#end


while line = s.gets   # Read lines from the socket
  puts line.chop      # And print with platform line terminator
end
s.close               # Close the socket when done




# The second program lets you create a server (a TCPServer object) using
# the socket standard library. The TCPServer.open method is used to make the server object,
# just like we use the TCPSockset.open method to make a socket. Like a socket, a server should
# be created and then close once you are done using it. The client.close method closes the
# server. The code for it is:


# http://stackoverflow.com/questions/17029158/ruby-on-rails-tcpsocket
# http://www.ruby-doc.org/stdlib-2.1.1/libdoc/socket/rdoc/index.html
# http://www.tutorialspoint.com/ruby/ruby_socket_programming.htm
# http://slides.com/ccyphers/rails_node_redis_tie#/14
# https://devcenter.heroku.com/articles/realtime-polyglot-app-node-ruby-mongodb-socketio
# 
# https://github.com/websocket-rails/websocket-rails
# https://github.com/shokai/ruby-socket.io-client-simple
# https://github.com/igrigorik/em-websocket
# https://github.com/faye/faye-websocket-ruby
# https://github.com/websocket-rails/websocket-rails
# https://github.com/seancribbs/webmachine-ruby
# https://github.com/ngauthier/tubesock
# https://github.com/websocket-rails/websocket-rails
# https://github.com/faye/faye-websocket-ruby
# https://github.com/simulacre/sinatra-websocket


#### // https://www.npmjs.org/package/socket.io-stream
# socket io VS SOCKjs
# https://github.com/substack/stream-handbook