const express = require('express');
const roleRouter = require('./role.routes');
const userRouter = require('./user.routes');
const patientRouter = require('./patient.routes');
const officeRouter = require('./office.routes');

const router = express.Router();
router.use("/roles", roleRouter)
router.use("/users", userRouter)
router.use("/patients", patientRouter)
router.use("/offices", officeRouter)

module.exports = router;