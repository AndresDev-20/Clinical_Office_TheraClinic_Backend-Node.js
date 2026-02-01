const ClinicalNote = require("../api/models")
const catchError = require("../utils/catchError");

// Viewing clinical notes
const getAllClinicalNotes = catchError(async(req, res) => {
    const clinicalNote = await ClinicalNote.findAll();
    return res.status(201).json(clinicalNote)
})

// Add new clinical note


module.exports = {
    getAllClinicalNotes
}