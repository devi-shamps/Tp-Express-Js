
const Motif = require('../models/motif');
const expressAsyncHandler = require('express-async-handler');

exports.createMotif = expressAsyncHandler(async (req, res) => {
  const motif = new Motif({
    libelle: req.body.libelle,
  });

  await motif.save();
  res.status(201).json({ 
    message: "Motif saved successfully!",
    motif_id: motif._id 
  });
});

exports.getOneMotif = expressAsyncHandler(async (req, res) => {
  const motif = await Motif.findOne({ _id: req.params.id });
  if (!motif) {
    res.status(404).json({ message: 'Motif not found' });
    return;
  }
  res.status(200).json(motif);
});

exports.modifyMotif = expressAsyncHandler(async (req, res) => {
  const motif = {
    _id: req.params.id,
    libelle: req.body.libelle
  };

  await Motif.updateOne({_id: req.params.id}, motif);
  res.status(201).json({ message: 'Motif updated successfully!', motif_id: motif._id });
});

exports.deleteMotif = expressAsyncHandler(async (req, res) => {
  await Motif.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: 'Deleted!' });
});

exports.getAllMotifs = expressAsyncHandler(async (req, res) => {
  const motifs = await Motif.find();
  res.status(200).json(motifs);
});
