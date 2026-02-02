const Prescription = require("../api/models");
const catchError = require("../utils/catchError");

// Get all prescriptions
const getAllPrescriptions = catchError(async (req, res) => {
    const prescriptions = await Prescription.findAll();
    return res.status(200).json(prescriptions);
});

// Create new prescription
const createPrescription = catchError(async (req, res) => {
    const data = req.body;
    const newPrescription = await Prescription.create(data);
    return res.status(201).json({
        message: "Receta creada exitosamente",
        data: newPrescription
    });
});

// Get prescription by ID
const getPrescriptionById = catchError(async (req, res) => {
    const { id } = req.params;
    const prescription = await Prescription.findOne({ where: { id } });
    if (!prescription) return res.status(404).json({
        error: "Receta no encontrada"
    });
    return res.status(200).json(prescription);
});

// Update prescription by ID
const updatePrescription = catchError(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updated = await Prescription.update(data, { where: { id } });
    if (updated[0] === 0) return res.status(404).json({
        error: "No se encontró la receta o no se aplicaron cambios"
    });
    return res.status(200).json({
        message: "Receta actualizada exitosamente"
    });
});

// Delete prescription by ID
const removePrescriptionById = catchError(async (req, res) => {
    const { id } = req.params;
    const deleted = await Prescription.destroy({ where: { id } });
    if (deleted !== 1) return res.status(404).json({
        error: "No se encontró la receta para eliminar"
    });
    return res.status(204).send();
});

module.exports = {
    getAllPrescriptions,
    createPrescription,
    getPrescriptionById,
    updatePrescription,
    removePrescriptionById
};
