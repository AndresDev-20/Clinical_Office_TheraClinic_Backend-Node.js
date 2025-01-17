const express = require('express')
const helmet = require('helmet')
const cors = require('cors');
const router = require('./routes');
const errorHandler = require('./utils/errorHandler')
require('dotenv').config();

// Aplicacion
const app = express();

// Middlewares
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false
}))
app.use(cors())
app.use('/api/v1', router)
app.use('/', function(req, res) {
    return res.send("Hello, welcome to Aplication...")
})
app.use(errorHandler)

module.exports = app;