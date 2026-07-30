const mongoose = require('mongoose');

// Simple CD schema
const cdSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

// Export model
module.exports = mongoose.model('CD', cdSchema);

