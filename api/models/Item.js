const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  description: { type: String, required: false },
  imageUrl: { type: String, required: false },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: Object, required: true },
});

module.exports = mongoose.model('Item', itemSchema);
