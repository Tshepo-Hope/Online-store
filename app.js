const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Import all routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/product'));
app.use('/api/chat', require('./routes/chat'));
app.use('/api/orders', require('./routes/order'));

app.get('/', (req, res) => {
  res.send('Online Store API');
});

module.exports = app;