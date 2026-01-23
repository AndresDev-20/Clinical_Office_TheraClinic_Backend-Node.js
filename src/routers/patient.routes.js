const express = require('express');
const { getAllPatient, getOne } = require('../controllers/patient.controller');

const patientRouter = express.Router();
patientRouter.route("/")
             .get(getAllPatient)
patientRouter.route("/:id")
             .get(getOne)

module.exports = patientRouter;