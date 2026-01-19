const express = require('express');
const roleRouter = require('./role.routes');
const userRouter = require('./user.routes');

const router = express.Router();
router.use("/roles", roleRouter)
router.use("/users", userRouter)

module.exports = router;