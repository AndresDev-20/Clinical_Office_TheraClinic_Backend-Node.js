const { ClinicalRecord } = require("../api/models")
const catchError = require("../utils/catchError")

// Viewing clinical records
const getAllClinicalRecords = catchError(async(req, res) => {
    const clinicalRecords = await ClinicalRecord.findAll();
    return res.status(201).json(clinicalRecords);
})

// Add new clinical record
// Filter clinical record by ID
// Update clinical record by ID
// Remove clinical record by ID

module.exports = {
    getAllClinicalRecords
}