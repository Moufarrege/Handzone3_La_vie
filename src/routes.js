const express = require('express');

const PacientesController = require('./controllers/PacientesController');
const AtendimentosController = require('./controllers/AtendimentosController');
const PsicologosController = require('./controllers/PsicologosController');

const routes = express.Router();


routes.post('/pacientes', PacientesController.store);
routes.get('/pacientes', PacientesController.index);
routes.get('/pacientes/:id', PacientesController.show);
routes.put('/pacientes/:id', PacientesController.update);
routes.delete('/pacientes/:id', PacientesController.destroy);



routes.post('/atendimentos', AtendimentosController.store);
routes.get('/atendimentos', AtendimentosController.index);
routes.get('/atendimentos/:id', AtendimentosController.show);
routes.put('/atendimentos/:id', AtendimentosController.update);


routes.post('/psicologos', PsicologosController.store);
routes.get('/psicologos', PsicologosController.index);
routes.get('/psicologos/:id', PsicologosController.show);
routes.put('/psicologos/:id', PsicologosController.update);
routes.delete('/psicologos/:id', PsicologosController.destroy);


module.exports = routes;