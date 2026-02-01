const { ClinicalRecord } = require("../api/models")
const catchError = require("../utils/catchError")

// Viewing clinical records
const getAllClinicalRecords = catchError(async(req, res) => {
    const clinicalRecords = await ClinicalRecord.findAll();
    return res.status(201).json(clinicalRecords);
})

// Add new clinical record
const createClinicalRecords = catchError(async(req, res) => {
    const data = req.body;
    const addClinical = await ClinicalRecord.create(data);
    return res.status(201).json({Message: "Historial creado con exito", addClinical})
})

// Filter clinical record by ID
// Update clinical record by ID
// Remove clinical record by ID

module.exports = {
    getAllClinicalRecords,
    createClinicalRecords
}