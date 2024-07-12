const { getAll, create, getOne, remove, update } = require('../controllers/visita.controllers');
const express = require('express');

const routerVisita = express.Router();

routerVisita.route('/')
	.get(getAll)
	.post(create);

routerVisita.route('/:id')
	.get(getOne)
	.delete(remove)
	.put(update);

module.exports = routerVisita;