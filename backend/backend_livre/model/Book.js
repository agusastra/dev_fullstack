const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Book = new Schema({
  titre: {
    type: String
  },
  auteur: {
    type: String
  },
  price: {
    type: String
  },
  description: {
    type: String
  },
  verified: Date,
}, {
  collection: 'livres'
})

module.exports = mongoose.model('Book', Book)