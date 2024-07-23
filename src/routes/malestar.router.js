const { getAll, create, getOne, remove, update } = require('../controllers/malestar.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerMalestar = express.Router();

routerMalestar.route('/')
	.get(getAll, verifyJWT)
	.post(create, verifyJWT);

routerMalestar.route('/:id')
	.get(getOne, verifyJWT)
	.delete(remove, verifyJWT)
	.put(update, verifyJWT);

module.exports = routerMalestar;