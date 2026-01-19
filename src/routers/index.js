const express = require('express');
const roleRouter = require('./role.routes');

const router = express.Router();
router.use("/roles", roleRouter)