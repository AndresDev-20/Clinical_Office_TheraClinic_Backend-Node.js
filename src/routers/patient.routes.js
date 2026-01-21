const express = require('express');
const { getAllPatient } = require('../controllers/patient.controller');

const patientRouter = express.Router();
patientRouter.route("/")
             .get(getAllPatient)

module.exports = patientRouter;