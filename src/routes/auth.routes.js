
const { Router } = require('express')
const authRouter = Router();

const authController = require('../controllers/authController');

authRouter.get('/areadocliente', authController.getLogin);
authRouter.post('/login', authController.login);


module.exports = authRouter;