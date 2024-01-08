
const express = require('express');
const router = express.Router();

const visiteCtrl = require('../controllers/visiteController');

router.get('/', visiteCtrl.getAllVisites);
router.post('/', visiteCtrl.createVisite);
router.get('/:id', visiteCtrl.getOneVisite);
router.put('/:id', visiteCtrl.modifyVisite);
router.delete('/:id', visiteCtrl.deleteVisite);

module.exports = router;
