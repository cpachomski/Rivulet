var express = require('express');
var app = express();

// create HTTP server with express application
var server = require('http').createServer(app);
var PORT = 3000;

// create new websocket instance for the server
var io = require('socket.io')(server);

// serve public folder as static assets
app.use(express.static( __dirname + '/public' ));

app.get('/', function(req, res, next) {
	res.sendFile( __diirname + '/public/index.html' )
});

server.listen(PORT);
console.log('Serving up some good stuff at localhost:' + PORT + '...');