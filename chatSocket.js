const Message = require('./models/Message');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('join', (userId) => {
      socket.join(userId);
    });

    socket.on('sendMessage', async (data) => {
      // data: { sender, receiver, text }
      const message = new Message(data);
      await message.save();
      io.to(data.receiver).emit('receiveMessage', message);
    });
  });
};