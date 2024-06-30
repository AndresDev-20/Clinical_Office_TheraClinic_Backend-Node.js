const { getAll, create, getOne, remove, update } = require('../controllers/paciente.controllers');
const express = require('express');

const routerPaciente = express.Router();

routerPaciente.route('/')
	.get(getAll)
	.post(create);

routerPaciente.route('/:id')
	.get(getOne)
	.delete(remove)
	.put(update);

module.exports = routerPaciente;