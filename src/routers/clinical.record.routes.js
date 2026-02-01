const express = require("express");
const { getAllClinicalRecords, createClinicalRecords, getClinicalRecordsById, updateClinicalRecords, removeClinicalRecords } = require("../controllers/clinical-record.controller");

const clinicalRecordRouter = express.Router();
clinicalRecordRouter.route("/")
                    .get(getAllClinicalRecords)
                    .post(createClinicalRecords)
clinicalRecordRouter.route("/:id")
                    .get(getClinicalRecordsById)
                    .put(updateClinicalRecords)
                    .delete(removeClinicalRecords)

module.exports = clinicalRecordRouter;