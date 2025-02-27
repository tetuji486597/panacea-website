const mongoose = require('mongoose');

const waitlistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  signupDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Waitlist', waitlistSchema); 