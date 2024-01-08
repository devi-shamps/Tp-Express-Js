const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');


const visiteurSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  tel: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date_embauche: { type: Date, required: true },
  visites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Visite' }]  
});

visiteurSchema.plugin(encrypt, {
  secret: 'F7FSoeailRM9nFUJ', 
  encryptedFields: ['nom', 'prenom', 'tel', 'date_embauche', 'visites'] 
});

module.exports = mongoose.model('Visiteur', visiteurSchema);
