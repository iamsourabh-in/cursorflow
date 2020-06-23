const express = require('express')
const app = express();
var http = require('http').createServer(app)
var path = require('path');
var io = require('socket.io')(http);

const port = 3000

app.use(express.static('public'))
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/default.html')));

http.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

var clients = 0;

io.on('connection', (socket) => {
    clients++;
    console.log('a user connected');
    socket.on('orientation', (alpha) => {
        console.log('message: ' + alpha);
        socket.broadcast.emit('change-o', alpha);
    });
    socket.on('disconnect', function () {
        clients--;
        io.sockets.emit('clients connected: ' + clients);
    });
});