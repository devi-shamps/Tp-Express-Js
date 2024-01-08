
const express = require('express');
const router = express.Router();

const praticienCtrl = require('../controllers/praticienController');

router.get('/', praticienCtrl.getAllPraticiens);
router.post('/', praticienCtrl.createPraticien);
router.get('/:id', praticienCtrl.getOnePraticien);
router.put('/:id', praticienCtrl.modifyPraticien);
router.delete('/:id', praticienCtrl.deletePraticien);

module.exports = router;
