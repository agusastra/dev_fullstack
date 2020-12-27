const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const biblioSchema = new Schema({
    nom: { type: String, required: true },
    adresse: { type: String, required: true },
    telephone: { type: String, required: true },
});

module.exports = mongoose.model('Bibliotheque', biblioSchema);