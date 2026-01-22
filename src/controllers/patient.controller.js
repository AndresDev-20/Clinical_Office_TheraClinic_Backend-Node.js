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
    const patient = await Patient.findByPk();
})

module.exports = {
    getAllPatient
}