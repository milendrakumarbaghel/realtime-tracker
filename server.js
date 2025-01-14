const express = require('express');
const app = express();
const http = require('http');
const dotenv = require('dotenv');
const path = require('path'); // Importing the path module

dotenv.config();

const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // Correct usage of path

io.on('connection', function(socket) {
    console.log("connected");
});

app.get('/', function(req, res) {
    res.render('index');
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
