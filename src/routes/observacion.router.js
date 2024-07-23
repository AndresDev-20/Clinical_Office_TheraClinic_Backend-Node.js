const { getAll, create, getOne, remove, update } = require('../controllers/observacion.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerObservacion = express.Router();

routerObservacion.route('/')
	.get(getAll, verifyJWT)
	.post( create, verifyJWT);

routerObservacion.route('/:id')
	.get(getOne, verifyJWT)
	.delete(remove, verifyJWT)
	.put(update, verifyJWT);

module.exports = routerObservacion;