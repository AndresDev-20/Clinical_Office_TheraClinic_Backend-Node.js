const { getAll, create, getOne, remove, update } = require('../controllers/paciente.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerPaciente = express.Router();

routerPaciente.route('/')
	.get(getAll, verifyJWT)
	.post(create, verifyJWT);

routerPaciente.route('/:id')
	.get( getOne, verifyJWT)
	.delete( remove, verifyJWT)
	.put(update, verifyJWT);

module.exports = routerPaciente;