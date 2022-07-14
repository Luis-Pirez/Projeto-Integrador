const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/index', mainController.index);
router.get('/petshops', mainController.petshops);
router.get('/clinicasveterinarias', mainController.clinicasVeterinarias);
router.get('/contato', mainController.contato);
router.get('/cadastro', mainController.cadastro);
router.get('/areadocliente', mainController.areaDoCliente);
router.get('/search', mainController.search);

module.exports = router;