const { ClinicalRecord, Patient, User, ClinicalNote } = require("../api/models")
const catchError = require("../utils/catchError")

// Viewing clinical records
const getAllClinicalRecords = catchError(async(req, res) => {
    const clinicalRecords = await ClinicalRecord.findAll({
        attributes: {exclude:["patient_id", "doctor_id"]},
        include: [
            { model: Patient, as: "patient", attributes: ["id", "firstNames", "lastNames"] },
            { model: User, as: "doctor", attributes: ["id", "names"] },
            {
                model: ClinicalNote,
                as: "ClinicalNotes",
                attributes: ["id", "date", "reasonQuery", "observations", "diagnosis", "planTreatment"]
            }
        ]
    });
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
    const clinical = await ClinicalRecord.findByPk(id, {
        attributes: {exclude:["patient_id", "doctor_id"]},
        include: [
            { model: Patient, as: "patient", attributes: ["id", "firstNames", "lastNames"] },
            { model: User, as: "doctor", attributes: ["id", "names"] },
            {
                model: ClinicalNote,
                as: "ClinicalNotes",
                attributes: ["id", "date", "reasonQuery", "observations", "diagnosis", "planTreatment"]
            }
        ]
    });
    if(!clinical) return res.status(404).json({Message: "Historial clinico no entontrado"});
    return res.status(201).json(clinical);
})

// Update clinical record by ID
const updateClinicalRecords = catchError(async(req, res) => {
    const { id } = req.params;
    const data = req.body;
    const clinicalUpdate = await ClinicalRecord.update(data, {where: {id}})
    if(clinicalUpdate[0] === 0) return res.status(404).json({Error: "No se pudo actualizar, no se encontro la historia clinica"});
    return res.status(200).json({Message: "Historial actualizado"})
})

// Remove clinical record by ID
const removeClinicalRecords = catchError(async(req, res) => {
    const { id } = req.params;
    const clinicalRemove = await ClinicalRecord.destroy({where: {id}});
    if(clinicalRemove !== 1) return res.status(404).json({Error: "La histora clinica no se encontro"});
    return res.status(204).send()
})

module.exports = {
    getAllClinicalRecords,
    createClinicalRecords,
    getClinicalRecordsById,
    updateClinicalRecords,
    removeClinicalRecords
}