require('dotenv').config();
const app = require('./app');
const http = require('http');
const connectDB = require('./config/db');

connectDB();

const server = http.createServer(app);

// Setup Socket.io for chat
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: '*'
  }
});
require('./chatSocket')(io); // Your chat logic handler

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});