const { Appointment, Patient, User, Office } = require("../api/models");
const catchError = require("../utils/catchError");

// Get all appointments
const getAllAppointments = catchError(async (req, res) => {
    const appointments = await Appointment.findAll({
        attributes: {exclude: ["patient_id", "doctor_id", "office_id", "createdAt","updatedAt"]},
        include: [
            { model: Patient, as: "Patient", attributes: ["id", "firstNames", "lastNames"] },
            { model: User, as: "doctor", attributes: ["id", "names"] },
            { model: Office, as: "office", attributes: ["id", "nameOffice"] }
        ]
    });
    return res.status(200).json(appointments);
});

// Create new appointment
const createAppointment = catchError(async (req, res) => {
    const data = req.body;
    const newAppointment = await Appointment.create(data);
    return res.status(201).json({
        message: "Cita creada exitosamente",
        data: newAppointment
    });
});

// Get appointment by ID
const getAppointmentById = catchError(async (req, res) => {
    const { id } = req.params;
    const appointment = await Appointment.findByPk(id,
        {
        attributes: {exclude: ["patient_id", "doctor_id", "office_id", "createdAt","updatedAt"]},
        include: [
            { model: Patient, as: "Patient", attributes: ["id", "firstNames", "lastNames"] },
            { model: User, as: "doctor", attributes: ["id", "names"] },
            { model: Office, as: "office", attributes: ["id", "nameOffice"] }
        ]
    });
    if (!appointment) return res.status(404).json({
        error: "Cita no encontrada"
    });
    return res.status(200).json(appointment);
});

// Update appointment by ID
const updateAppointment = catchError(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updated = await Appointment.update(data, { where: { id } });
    if (updated[0] === 0) return res.status(404).json({
        error: "No se encontró la cita o no se aplicaron cambios"
    });
    return res.status(200).json({
        message: "Cita actualizada exitosamente"
    });
});

// Delete appointment by ID
const removeAppointmentById = catchError(async (req, res) => {
    const { id } = req.params;
    const deleted = await Appointment.destroy({ where: { id } });
    if (deleted !== 1) return res.status(404).json({
        error: "No se encontró la cita para eliminar"
    });
    return res.status(204).send();
});

module.exports = {
  getAllAppointments,
  createAppointment,
  getAppointmentById,
  updateAppointment,
  removeAppointmentById,
};
