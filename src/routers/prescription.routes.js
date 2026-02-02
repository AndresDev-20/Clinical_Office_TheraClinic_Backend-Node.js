const express = require("express");
const { getAllPrescriptions, createPrescription, getPrescriptionById, updatePrescription, removePrescriptionById } = require("../controllers/prescription.controller");

const prescriptionRouter = express.Router();

prescriptionRouter.route("/")
                  .get(getAllPrescriptions)
                  .post(createPrescription)
prescriptionRouter.route("/:id")
                  .get(getPrescriptionById)
                  .put(updatePrescription)
                  .delete(removePrescriptionById)

module.exports = prescriptionRouter;