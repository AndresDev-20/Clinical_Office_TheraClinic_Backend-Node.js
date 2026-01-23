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

// New patient
const create = catchError(async(req, res) => {
    const data = req.body;
    const newPatient = await Patient.create(data);
    return res.status(201).json({Message: "Usuario creado", newPatient});
})

// Update patient by id
const update = catchError(async(req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updatePatiente = await Patient.update(data, {where: {id}})
})

module.exports = {
    getAllPatient,
    getOne,
    create
}