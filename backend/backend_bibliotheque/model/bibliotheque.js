const mongoose = require('mongoose');

const bibliothequeShema = mongoose.Schema({
    nom: { type: String, required: true},
    adresse: { type: String, required: true},
    telephone: { type: String, required: true},
    description: { type: String, required: true}
});

module.exports = mongoose.model('Bibliotheque', bibliothequeShema);