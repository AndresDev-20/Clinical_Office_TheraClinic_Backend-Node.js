const ClinicalNote = require("../api/models")
const catchError = require("../utils/catchError");

// Viewing clinical notes
const getAllClinicalNotes = catchError(async(req, res) => {
    const clinicalNote = await ClinicalNote.findAll();
    return res.status(201).json(clinicalNote)
})

// Add new clinical note
const createClinicalNote = catchError(async(req, res) => {
    const data = req.body;
    const newClinicalNote = await ClinicalNote.create(data);
    return res.status(201).json({Message: "Nota creada"}, newClinicalNote);
})

// Filter clinical note by ID
const getClinicalNoteById = catchError(async(req, res) => {
    const { id } = req.body;
    const note = await ClinicalNote({where: {id}});
    if(!note) return res.status(404).json({Err: "No se encontro el registro de la nota en la base de datos"});
    return res.status(201).json(note)
})

// Update clinical Note by ID
const updateClinicalNote = catchError(async(req, res) => {
    const { id } = req.params;
})


module.exports = {
    getAllClinicalNotes,
    createClinicalNote,
    getClinicalNoteById
}