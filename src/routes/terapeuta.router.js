const { getAll, create, getOne, remove, update, login, EmailVerify, updatePassword } = require('../controllers/terapeuta.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerTerapeuta = express.Router();

routerTerapeuta.route('/')
	.get(getAll, verifyJWT)
	.post(create);

routerTerapeuta.route('/login')
	.post(login);

routerTerapeuta.route('/verify')
    .post(EmailVerify)

routerTerapeuta.route('/update-password')
    .post(updatePassword)

routerTerapeuta.route('/:id')
	.get(getOne, verifyJWT)
	.delete(remove, verifyJWT)
	.put(update, verifyJWT);

module.exports = routerTerapeuta;