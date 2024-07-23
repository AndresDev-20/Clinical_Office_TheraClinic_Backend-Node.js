const { getAll, create, remove } = require('../controllers/archivo.controllers');
const upload = require('../utils/multerConfig');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerArchivo = express.Router();

routerArchivo.route('/')
	.get(getAll)
	.post(upload.single('pdf'), create, verifyJWT);
routerArchivo.route('/:id')
    .delete(remove)

module.exports = routerArchivo;