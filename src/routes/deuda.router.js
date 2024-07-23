const { getAll, create, getOne, remove, update } = require('../controllers/deuda.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerDeuda = express.Router();

routerDeuda.route('/')
	.get(getAll, verifyJWT)
	.post(create, verifyJWT);

routerDeuda.route('/:id')
	.get(getOne, verifyJWT)
	.delete(remove, verifyJWT)
	.put(update, verifyJWT);

module.exports = routerDeuda;