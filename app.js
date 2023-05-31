const express = require('express');
const app = express();
const userRoutes = require('./api/routes/users');
const itemRoutes = require('./api/routes/items');

app.use('/users', userRoutes);
app.use('/items', itemRoutes);

module.exports = app;
