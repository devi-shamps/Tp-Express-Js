
const express = require('express');
const router = express.Router();

const motifCtrl = require('../controllers/motifController');

router.get('/', motifCtrl.getAllMotifs);
router.post('/', motifCtrl.createMotif);
router.get('/:id', motifCtrl.getOneMotif);
router.put('/:id', motifCtrl.modifyMotif);
router.delete('/:id', motifCtrl.deleteMotif);

module.exports = router;
