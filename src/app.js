const express = require('express')
const helmet = require('helmet')
const cors = require('cors')


// Esta es nuestra app
const app = express();

// Middleware
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());

module.exports = app;