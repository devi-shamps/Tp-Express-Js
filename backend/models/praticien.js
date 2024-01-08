
const mongoose = require('mongoose');

const praticienSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  tel: { type: String, required: true },
  email: { type: String, required: true },
  rue: { type: String, required: true },
  code_postal: { type: String, required: true },
  ville: { type: String, required: true },
  visites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Visite' }]
});

module.exports = mongoose.model('Praticien', praticienSchema);
