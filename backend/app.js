const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');
const motifRoutes = require('./routes/motif');
const praticienRoutes = require('./routes/praticien');
const visiteRoutes = require('./routes/visite');
const visiteurRoutes = require('./routes/visiteur');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect('mongodb+srv://dimitridechamp:n3mkibuHz86YN2Dv@cluster0.bjjzzbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());
app.use(helmet());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(helmet());
app.set('trust proxy', 1);
app.use('/api/stuff', stuffRoutes);
app.use('/api/motif', motifRoutes);
app.use('/api/praticien', praticienRoutes);
app.use('/api/visite', visiteRoutes);
app.use('/api/visiteur', visiteurRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;