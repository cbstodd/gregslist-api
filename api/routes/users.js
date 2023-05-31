const express = require('express');
const router = express.Router();

let users = [
  { id: '0001', name: 'user 1' },
  { id: '0002', name: 'user 2' },
  { id: '0003', name: 'user 3' },
  { id: '0004', name: 'user 4' },
];

router.get('/', function (req, res, next) {
  res.status(200).json(users);
});

router.post('/', function (req, res, next) {
  res.status(200).json({
    message: 'Handling POST requests to /users',
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
    message: 'Updated user',
  });
});

router.delete('/:id', function (req, res, next) {
  res.status(200).json({
    message: 'Deleted user',
  });
});

module.exports = router;
