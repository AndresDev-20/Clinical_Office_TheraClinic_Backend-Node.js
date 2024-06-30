const { getAll, create, getOne, remove, update } = require('../controllers/enfermedad.controllers');
const express = require('express');

const routerEnfermedad = express.Router();

routerEnfermedad.route('/')
	.get(getAll)
	.post(create);

routerEnfermedad.route('/:id')
	.get(getOne)
	.delete(remove)
	.put(update);

module.exports = routerEnfermedad;