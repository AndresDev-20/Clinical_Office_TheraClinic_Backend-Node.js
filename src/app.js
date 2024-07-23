const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./routes');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();
const path = require('path');

// Esta es nuestra aplicación
const app = express();

// Middlewares 
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());

const externalFilesPath = path.join('C:', 'Users', 'yeiso', 'OneDrive', 'Escritorio', 'My Work Frelansee', 'TheraClinic', 'Desarrollo', 'Archivos');
console.log('External Files Path:', externalFilesPath); // Para verificar la ruta en consola
app.use('/uploads', express.static(externalFilesPath))

app.use('/api/v1', router);
app.get('/', (req, res) => {
    return res.send("Welcome to express!");
})

// middlewares después de las rutas
app.use(errorHandler)

module.exports = app;
