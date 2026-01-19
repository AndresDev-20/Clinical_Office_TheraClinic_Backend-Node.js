const express = require('express')
const { getAllRoles, addRol } = require("../controllers/role.controller")

const roleRouter = express.Router();
roleRouter.route("/")
          .get(getAllRoles)
          .post(addRol)

module.exports = roleRouter;