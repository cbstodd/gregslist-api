const express = require('express');
const router = express.Router();

let items = [
  { id: '0001', name: 'Item 1' },
  { id: '0002', name: 'Item 2' },
  { id: '0003', name: 'Item 3' },
  { id: '0004', name: 'Item 4' },
];

router.get('/', function (req, res, next) {
  res.status(200).json(items);
});

router.post('/', function (req, res, next) {
  const newItem = {
    id: req.body.id,
    name: req.body.name,
  };
  res.status(201).json({
    message: `New Item was created`,
    createdItem: newItem,
  });
});

router.get('/:id', function (req, res, next) {
  const id = req.params.id;
  if (id === '0001') {
    res.status(200).json({
      id: id,
      name: id.name,
    });
  } else {
    res.status(200).json({
      message: 'You passed an ID',
    });
  }
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
