const { getAll, create, getOne, remove, update } = require('../controllers/cita.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerCita = express.Router();

routerCita.route('/')
	.get(getAll, verifyJWT)
	.post(create, verifyJWT);

routerCita.route('/:id')
	.get(getOne, verifyJWT)
	.delete(remove, verifyJWT)
	.put(update, verifyJWT);

module.exports = routerCita;