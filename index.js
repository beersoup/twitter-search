const express = require('express');
const app = express();
const server = require('http').createServer(app)
    , io = require('socket.io').listen(server);

const config = require('./config.js')


server.listen(8080);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/');
});


const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config.js')
const twitter = require('twitter')

app.use('/style', express.static(__dirname + '/style'))
app.use(webpackDevMiddleware(webpack(webpackConfig)))
app.use(bodyParser.urlencoded({extended: false}))


console.log("My socket is running");

const tweets = new twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token_key: config.access_token_key,
    access_token_secret: config.access_token_secret
})

tweets.stream('statuses/filter', {track: 'react'}, function (stream) {
    stream.on('data', function (stream) {
        io.sockets.emit('streamReact', stream);
    });
});

tweets.stream('statuses/filter', {track: 'node'}, function (stream) {
    stream.on('data', function (stream) {
        io.sockets.emit('streamNode', stream);
    });
});


io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('New connection: ' + socket.id)
    tweets.get('search/tweets', {q: 'react', count: 20, f: 'tweets', result_type: 'recent'}, function (error, tweet) {
        if (!error) {
            io.sockets.emit('tweetReact', tweet);
        }
    });
    tweets.get('search/tweets', {q: 'node', count: 20, f: 'tweets', result_type: 'recent'}, function (error, tweet) {
        if (!error) {
            io.sockets.emit('tweetNode', tweet);
        }
    });

    socket.on('userSearch', function (value) {
        const params = {screen_name: value};
        tweets.get('statuses/user_timeline', params, function (error, tweet) {
            if (!error) {
                io.sockets.emit('updateUserSearch', tweet);
            }
        });
    })

}