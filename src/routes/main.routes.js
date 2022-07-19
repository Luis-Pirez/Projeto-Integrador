const express = require('express');
const { Router } = require('express')
const router = Router();

const mainController = require('../controllers/mainController');
const authRouter = require('./auth.routes');

router.get('/', mainController.index);
router.get('/index', mainController.paginaInicial);
router.get('/petshops', mainController.petshops);
router.get('/clinicasveterinarias', mainController.clinicasVeterinarias);
router.get('/contato', mainController.contato);
router.get('/cadastro', mainController.cadastro);
router.get('/areadocliente', mainController.areaDoCliente);
router.get('/search', mainController.search);

module.exports = router;