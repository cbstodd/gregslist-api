require('dotenv').config();
const express = require('express');
const router = express.Router();
const Item = require('../models/Item');
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;
const url = process.env.LOCAL_URL || 'localhost';

router.get('/', function (req, res, next) {
  Item.find()
    .exec()
    .then((items) => {
      console.log(items);
      res.status(200).json({
        count: items.length,
        urls: items.map((item) => `http://${url}:${port}/items/${item._id}`),
        items: items,
      });
    })
    .catch((err) => console.log(err));
});

router.post('/', function (req, res, next) {
  const newItem = new Item({
    _id: new mongoose.Types.ObjectId(),
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    name: req.body.name,
    price: req.body.price,
  });
  newItem
    .save()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  res.status(201).json({
    message: `New Item was created`,
    createdItem: newItem,
  });
});

router.get('/:id', function (req, res, next) {
  const id = req.params.id;
  Item.findById(id)
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
    message: 'Updated Item',
  });
});

router.delete('/:id', function (req, res, next) {
  res.status(200).json({
    message: 'Deleted Item',
  });
});

module.exports = router;
