const { Patient, Office } = require("../api/models")
const catchError = require("../utils/catchError")


// viewing patient
const getAllPatient = catchError(async(req, res) => {
    const patients = await Patient.findAll({
        attributes: {exclude: ["office_id"]},
        include: [{
            model: Office,
            as: "office",
            attributes: ["id", "nameOffice", "city"]
        }]
    });
    return res.status(201).json(patients)
})

// Filter by id
const getOnePatient = catchError(async(req, res) => {
    const { id } = req.params;
    const patient = await Patient.findByPk(id, {
        attributes: {exclude: ["office_id"]},
        include: [{
            model: Office,
            as: "office",
            attributes: ["id", "nameOffice", "city"]
        }]
    });
    if(!patient) return res.status(404).json({Error: "El paciente no se encuentra en nuestra base de datos"});
    return res.status(201).json(patient)
})

// Add new patient
const createPatient = catchError(async(req, res) => {
    const data = req.body;
    const newPatient = await Patient.create(data);
    return res.status(201).json({Message: "Paciente creado", newPatient});
})

// Update patient by id
const updatePatient = catchError(async(req, res) => {
    const { id } = req.params;
    const data = req.body;
    const patientUpdate = await Patient.update(data, {where: {id}})
    if(patientUpdate[0] === 0) return res.status(404).json({Error: "El paciente no se encontro en la base de datos"});
    return res.status(201).json({Message: "Paciente actualizado "})
})

// Delete patient by id
const removePatient = catchError(async(req, res) => {
    const { id } = req.params;
    const patienteRemove = await Patient.destroy({where: {id}});
    if(patienteRemove !== 1) return res.status(404).json({error: "El paciente no se encontro"});
    return res.status(204).send();
})


module.exports = {
    getAllPatient,
    getOnePatient,
    createPatient,
    updatePatient,
    removePatient
}