const mongoose = require('mongoose');

const motifSchema = mongoose.Schema({
  libelle: { type: String, required: true },
});

module.exports = mongoose.model('Motif', motifSchema);