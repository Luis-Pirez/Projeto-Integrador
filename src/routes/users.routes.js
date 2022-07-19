
const { Router } = require('express')
const usersRouter = Router();

const usersController = require('../controllers/usersController');
usersRouter.get('/cadastro', usersController.getCreate);
usersRouter.post('/create', usersController.create);

module.exports = usersRouter;