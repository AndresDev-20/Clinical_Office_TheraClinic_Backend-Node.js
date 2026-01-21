const express = require('express');
const roleRouter = require('./role.routes');
const userRouter = require('./user.routes');
const patientRouter = require('./patient.routes');

const router = express.Router();
router.use("/roles", roleRouter)
router.use("/users", userRouter)
router.use("/patients", patientRouter)

module.exports = router;