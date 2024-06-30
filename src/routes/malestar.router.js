const { getAll, create, getOne, remove, update } = require('../controllers/malestar.controllers');
const express = require('express');

const routerMalestar = express.Router();

routerMalestar.route('/')
	.get(getAll)
	.post(create);

routerMalestar.route('/:id')
	.get(getOne)
	.delete(remove)
	.put(update);

module.exports = routerMalestar;