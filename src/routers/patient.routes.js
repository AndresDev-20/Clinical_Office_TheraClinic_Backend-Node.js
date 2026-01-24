const express = require('express');
const { getAllPatient, getOnePatient, createPatient, updatePatient, removePatient,  } = require('../controllers/patient.controller');

const patientRouter = express.Router();
patientRouter.route("/")
             .get(getAllPatient)
             .post(createPatient)
patientRouter.route("/:id")
             .get(getOnePatient)
             .put(updatePatient)
             .delete(removePatient)

module.exports = patientRouter;