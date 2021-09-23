const Sequelize = require('sequelize');
const dbConfig = require('../config/db')

const User = require('../models/User');
const Address = require('../models/Address');
const Fabricante = require('../models/Fabricante');
const Carro = require('../models/Carro');

const conexao = new Sequelize(dbConfig);

User.init(conexao);
Address.init(conexao);

Fabricante.init(conexao);
Carro.init(conexao);


User.associate(conexao.models);
Address.associate(conexao.models);

Fabricante.associate(conexao.models);
Carro.associate(conexao.models);


module.exports = conexao;