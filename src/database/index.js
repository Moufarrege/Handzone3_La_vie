const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Pacientes = require('../models/Pacientes');
const Atendimentos = require('../models/Atendimentos');
const Psicologos = require('../models/Psicologos');

const databaseConnection = new Sequelize(dbConfig);

Pacientes.init(databaseConnection);
Atendimentos.init(databaseConnection);
Psicologos.init(databaseConnection);

Atendimentos.associate(databaseConnection.models);

module.exports = databaseConnection;
