const express = require('express');
const { GetAllOffices } = require('../controllers/office.controller');

const officeRouter = express.Router();
officeRouter.route("/")
            .get(GetAllOffices)

module.exports = officeRouter;