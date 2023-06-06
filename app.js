require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./api/routes/users');
const itemRoutes = require('./api/routes/items');
const db = process.env.MONGO_ATLAS_URL;

// Connect to MongoDB via Mongoose
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Error Logging
app.use(morgan('dev'));
// Parses form inputs, etc.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/items', itemRoutes);

app.use(function (req, res, next) {
  const error = new Error(
    'API endpoint not Found! Recheck your URL. ex: http:localhost:3000/items'
  );
  error.status = 404;
  next(error);
});

app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
