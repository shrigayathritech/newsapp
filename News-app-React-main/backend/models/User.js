// backend/models/user.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  likedArticles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }] // Store liked articles
});

module.exports = mongoose.model('User', UserSchema);
