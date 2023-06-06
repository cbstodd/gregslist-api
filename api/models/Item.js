const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model('Item', itemSchema);
