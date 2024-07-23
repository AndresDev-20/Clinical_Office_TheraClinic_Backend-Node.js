const { getAll, create, getOne, remove, update } = require('../controllers/medicamento.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerMedicamento = express.Router();

routerMedicamento.route('/')
	.get(getAll, verifyJWT)
	.post(create, verifyJWT);

routerMedicamento.route('/:id')
	.get(getOne, verifyJWT)
	.delete(remove, verifyJWT)
	.put(update, verifyJWT);

module.exports = routerMedicamento;