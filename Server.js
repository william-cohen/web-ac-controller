'use strict';

const PORT = process.env.PORT || 3000;

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app).listen(PORT);
const io = require('socket.io')(server);

app.use(express.static('./public'));

io.on('connection', function(socket) {
    socket.on('time', function(data) {
        console.log(data);
    });
});

console.log('Home AC service running on port: ' + PORT + '...');
