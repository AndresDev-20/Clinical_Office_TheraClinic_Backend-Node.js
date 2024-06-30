const { getAll, create, getOne, remove, update } = require('../controllers/cita.controllers');
const express = require('express');

const routerCita = express.Router();

routerCita.route('/')
	.get(getAll)
	.post(create);

routerCita.route('/:id')
	.get(getOne)
	.delete(remove)
	.put(update);

module.exports = routerCita;