const express = require('express')
const { getAllRoles, addRol, updateRole, deleteRole } = require("../controllers/role.controller")

const roleRouter = express.Router();
roleRouter.route("/")
          .get(getAllRoles)
          .post(addRol)
roleRouter.route("/:id")
          .put(updateRole)
          .delete(deleteRole)

module.exports = roleRouter;