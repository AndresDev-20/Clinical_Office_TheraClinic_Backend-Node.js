const { getAll, create, getOne, remove, update } = require('../controllers/observacion.controllers');
const express = require('express');

const routerObservacion = express.Router();

routerObservacion.route('/')
	.get(getAll)
	.post(create);

routerObservacion.route('/:id')
	.get(getOne)
	.delete(remove)
	.put(update);

module.exports = routerObservacion;