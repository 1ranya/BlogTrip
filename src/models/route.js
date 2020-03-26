const mongoose = require('mongoose')

const pays = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  information: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('route', pays)