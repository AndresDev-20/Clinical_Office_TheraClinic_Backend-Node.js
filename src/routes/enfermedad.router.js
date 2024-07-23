const { getAll, create, getOne, remove, update } = require('../controllers/enfermedad.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerEnfermedad = express.Router();

routerEnfermedad.route('/')
	.get( getAll, verifyJWT)
	.post(create, verifyJWT);

routerEnfermedad.route('/:id')
	.get( getOne, verifyJWT)
	.delete( remove, verifyJWT)
	.put( update, verifyJWT);

module.exports = routerEnfermedad;