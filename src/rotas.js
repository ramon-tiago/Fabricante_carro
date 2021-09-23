const express = require('express')

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

const FabricanteController = require('./controllers/FabricanteController');
const Carrocontroller = require('./controllers/Carrocontroller');

const rotas = express.Router()

rotas.get('/users', UserController.index);
rotas.post('/users', UserController.store);

rotas.get('/users/:user_id/addresses', AddressController.index);
rotas.post('/users/:user_id/addresses', AddressController.store);

rotas.get('/fabricantes', FabricanteController.index);
rotas.post('/fabricantes', FabricanteController.store);

rotas.get('/fabricantes/:fab_id/carros', Carrocontroller.index);
rotas.post('/fabricantes/:fab_id/carros', Carrocontroller.store);

module.exports = rotas