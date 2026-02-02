const express = require("express");
const { getAllAppointments, createAppointment, getAppointmentById, updateAppointment, removeAppointmentById } = require("../controllers/appointment.controller");

const appointmentRouter = express.Router();

appointmentRouter.route("/")
                 .get(getAllAppointments)
                 .post(createAppointment)
appointmentRouter.route("/:id")
                 .get(getAppointmentById)
                 .put(updateAppointment)
                 .delete(removeAppointmentById)

module.exports = appointmentRouter;