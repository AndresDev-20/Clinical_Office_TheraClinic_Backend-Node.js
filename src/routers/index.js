const express = require('express');
const roleRouter = require('./role.routes');
const userRouter = require('./user.routes');
const patientRouter = require('./patient.routes');
const officeRouter = require('./office.routes');
const clinicalRecordRouter = require('./clinical-record.routes');
const clinicalNoteRouter = require('./clinical-note.routes');
const appointmentRouter = require('./appointment.routes');
const productRouter = require('./product.routes');
const prescriptionRouter = require('./prescription.routes');
const invoiceRouter = require('./invoice.routes');

const router = express.Router();
router.use("/roles", roleRouter)
router.use("/users", userRouter)
router.use("/patients", patientRouter)
router.use("/offices", officeRouter)
router.use("/clinical-records", clinicalRecordRouter)
router.use("/clinical-notes", clinicalNoteRouter)
router.use("/appointments", appointmentRouter)
router.use("/products", productRouter)
router.use("/prescriptions", prescriptionRouter)
router.use("/invoices", invoiceRouter)

module.exports = router;