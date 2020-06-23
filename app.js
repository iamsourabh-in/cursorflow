const express = require('express')
const app = express();
var http = require('http').createServer(app)
var path = require('path');
var io = require('socket.io')(http);

const port = 3000

app.use(express.static('public'))
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/default.html')));

http.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

io.on('connection', (socket) => {
    console.log('a user connected');
});