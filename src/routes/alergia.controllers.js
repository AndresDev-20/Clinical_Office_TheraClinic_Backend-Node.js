const { getAll, create, getOne, remove, update } = require('../controllers/alergia.controllers');
const express = require('express');

const routerAlergia = express.Router();

routerAlergia.route('/')
	.get(getAll)
	.post(create);

routerAlergia.route('/:id')
	.get(getOne)
	.delete(remove)
	.put(update);

module.exports = routerAlergia;