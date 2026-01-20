const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const router = require("./routers");
const errorHandler = require('./utils/middlewares/errorHandler');


// Esta es nuestra app
const app = express();

// Middleware
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());

// Rutas del proyecto
app.use('/api/v1', router)

// middlewares después de las rutas
app.use(errorHandler)

module.exports = app;