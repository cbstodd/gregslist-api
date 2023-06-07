require('dotenv').config();
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;
const url = process.env.LOCAL_URL || 'localhost';

router.get('/', function (req, res, next) {
  User.find()
    .exec()
    .then((users) => {
      console.log(users);
      res.status(200).json({
        count: users.length,
        urls: users.map((User) => `http://${url}:${port}/Users/${user._id}`),
        Users: users,
      });
    })
    .catch((err) => console.log(err));
});

router.post('/', function (req, res, next) {
  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    name: req.body.name,
    price: req.body.price,
  });
  newUser
    .save()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  res.status(201).json({
    message: `New User was created`,
    createdUser: newUser,
  });
});

router.get('/:id', function (req, res, next) {
  const id = req.params.id;
  User.findById(id)
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch('/:id', function (req, res, next) {
  res.status(200).json({
    message: 'Updated User',
  });
});

router.delete('/:id', function (req, res, next) {
  res.status(200).json({
    message: 'Deleted User',
  });
});

module.exports = router;
