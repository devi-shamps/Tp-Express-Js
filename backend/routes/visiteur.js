
const express = require('express');
const router = express.Router();

const visiteurCtrl = require('../controllers/visiteurController');

router.get('/', visiteurCtrl.getAllVisiteurs);
router.post('/', visiteurCtrl.createVisiteur);
router.get('/:id', visiteurCtrl.getOneVisiteur);
router.put('/:id', visiteurCtrl.modifyVisiteur);
router.delete('/:id', visiteurCtrl.deleteVisiteur);


module.exports = router;
