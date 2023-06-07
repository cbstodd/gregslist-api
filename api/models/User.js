const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  bio: { type: String, required: false },
  avatarUrl: { type: String, required: false },
  username: { type: String, required: true },
  rating: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model('User', userSchema);
