const { getAll, create, getOne, remove, update } = require('../controllers/alergia.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerAlergia = express.Router();

routerAlergia.route('/')
	.get(getAll, verifyJWT)
	.post(create, verifyJWT);

routerAlergia.route('/:id')
	.get(getOne, verifyJWT)
	.delete(remove, verifyJWT)
	.put(update, verifyJWT);

module.exports = routerAlergia;