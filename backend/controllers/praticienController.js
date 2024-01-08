const Praticien = require('../models/praticien');
const expressAsyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

exports.createPraticien = expressAsyncHandler(async (req, res) => {
        await body('email').isEmail().withMessage('Le format de l\'email est invalide').run(req);
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const praticien = new Praticien({
            nom: req.body.nom,
            prenom: req.body.prenom,
            tel: req.body.tel,
            email: req.body.email,
            rue: req.body.rue,
            code_postal: req.body.code_postal,
            ville: req.body.ville,
            visites: req.body.visites
        });

        await praticien.save();
        res.status(201).json({ message: 'Praticien enregistré avec succès !', praticien_id: praticien._id });
    });

exports.getOnePraticien = expressAsyncHandler(async (req, res) => {
    const praticien = await Praticien.findOne({ _id: req.params.id });
    if (!praticien) {
        res.status(404).json({ message: 'Praticien non trouvé' });
        return;
    }
    res.status(200).json(praticien);
});

exports.modifyPraticien = expressAsyncHandler(async (req, res) => {
    const praticien = new Praticien({
        _id: req.params.id,
        nom: req.body.nom,
        prenom: req.body.prenom,
        tel: req.body.tel,
        email: req.body.email,
        rue: req.body.rue,
        code_postal: req.body.code_postal,
        ville: req.body.ville,
        visites: req.body.visites
    });

    await Praticien.updateOne({_id: req.params.id}, praticien);
    res.status(201).json({ message: 'Praticien mis à jour avec succès !' });
});

exports.deletePraticien = expressAsyncHandler(async (req, res) => {
    await Praticien.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Supprimé !' });
});

exports.getAllPraticiens = expressAsyncHandler(async (req, res) => {
    const praticiens = await Praticien.find();
    res.status(200).json(praticiens);
});


