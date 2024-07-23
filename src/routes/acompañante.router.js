const { getAll, create, getOne, remove, update } = require('../controllers/acompañante.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerAcompañante = express.Router();

routerAcompañante.route('/')
	.get(getAll)
	.post(create);

routerAcompañante.route('/:id')
	.get(getOne, verifyJWT)
	.delete(remove, verifyJWT)
	.put(update, verifyJWT);

module.exports = routerAcompañante;