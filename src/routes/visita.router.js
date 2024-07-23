const { getAll, create, getOne, remove, update } = require('../controllers/visita.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerVisita = express.Router();

routerVisita.route('/')
	.get(getAll, verifyJWT)
	.post( create, verifyJWT);

routerVisita.route('/:id')
	.get(getOne, verifyJWT)
	.delete(remove, verifyJWT)
	.put(update, verifyJWT);

module.exports = routerVisita;