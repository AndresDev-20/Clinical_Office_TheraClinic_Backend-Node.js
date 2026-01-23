const { Patient } = require("../api/models")
const catchError = require("../utils/catchError")


// viewing patient
const getAllPatient = catchError(async(req, res) => {
    const patients = await Patient.findAll();
    return res.status(201).json(patients)
})

// Filter by id
const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const patient = await Patient.findByPk(id);
    if(!patient) return res.status(404).json({message: "El paciente no se encuentra en nuestra base de datos"});
    return res.status(201).json(patient)
})

module.exports = {
    getAllPatient,
    getOne
}