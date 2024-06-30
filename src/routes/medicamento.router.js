const { getAll, create, getOne, remove, update } = require('../controllers/medicamento.controllers');
const express = require('express');

const routerMedicamento = express.Router();

routerMedicamento.route('/')
	.get(getAll)
	.post(create);

routerMedicamento.route('/:id')
	.get(getOne)
	.delete(remove)
	.put(update);

module.exports = routerMedicamento;