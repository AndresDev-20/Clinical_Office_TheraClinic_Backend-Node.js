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

// Update clinical note by ID
const updateClinicalNote = catchError(async(req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updateNote = await ClinicalNote.update(data, {where: {id}});
    if(updateNote[0] === 0) return res.status(404).json({Error: "No se pudo actualizar tal vez no esta en la base de datos"});
    return res.status(200).json({Message: "Nota actualizada"})
})

// Remove clinical note by ID
const removeClinicalNoteById = catchError(async(req, res) => {
    const { id } = req.params;
    const removeNote = await ClinicalNote.destroy({where: {id}});
    if(removeNote !== 1) return res.status(404).json({Error: "La nota clinica no se elimino"});
    return res.status(204).send()
})


module.exports = {
    getAllClinicalNotes,
    createClinicalNote,
    getClinicalNoteById,
    updateClinicalNote,
    removeClinicalNoteById
}