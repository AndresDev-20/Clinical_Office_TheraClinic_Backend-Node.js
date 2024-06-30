const { getAll, create, getOne, remove, update, login } = require('../controllers/terapeuta.controllers');
const express = require('express');

const routerTerapeuta = express.Router();

routerTerapeuta.route('/')
	.get(getAll)
	.post(create);

routerTerapeuta.route('/login')
	.post(login);

routerTerapeuta.route('/:id')
	.get(getOne)
	.delete(remove)
	.put(update);

module.exports = routerTerapeuta;