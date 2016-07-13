var express = require('express');
var app = express();
var config = require('./config.js');
var socketIO = require('socket.io');
var Twit = require('twit');

// connect to twitter with creds
var TCon = new Twit({
	consumer_key: config.twitter.consumerKey,
	consumer_secret: config.twitter.consumerSecret,
	access_token: config.twitter.accessToken,
	access_token_secret: config.twitter.accessTokenSecret
});

// create HTTP server with express application
var server = require('http').createServer(app);
var PORT = 3000;

// serve public folder as static assets
app.use(express.static( __dirname + '/public' ));

app.get('/', function(req, res, next) {
	res.sendFile( __diirname + '/public/index.html' )
});

// create new websocket instance for the server
var io = socketIO.listen(server);



io.sockets.on('connection', function(socket) {
	var stream = TCon.stream('statuses/filter', { track: '' });

	socket.on('getNewStream', function(data) {
		stream.stop();
		stream = TCon.stream('statuses/filter', { track: data.filterTerm });
		stream.on('tweet', function(tweet) {
			socket.emit('payload', { tweet: tweet })
		})
	});
});



server.listen(PORT);
console.log('Serving up some good stuff at localhost:' + PORT + '...');