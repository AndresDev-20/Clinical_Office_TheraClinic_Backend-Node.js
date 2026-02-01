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
const getClinicalRecordsById = catchError(async(req, res) => {
    const { id } = req.params;
    const clinical = await ClinicalRecord.findByPk(id);
    if(!clinical) return res.status(404).json({Message: "Historial clinico no entontrado"});
    return res.status(201).json(clinical);
})

// Update clinical record by ID
const 

// Remove clinical record by ID

module.exports = {
    getAllClinicalRecords,
    createClinicalRecords,
    getClinicalRecordsById
}