const {Roles} = require("../api/models")
const catchError = require("../utils/catchError")

// Visualizacion de roles
const getAllRoles = catchError(async(req, res) => {
    const roles = await Roles.findAll()
    return res.status(201).json(roles)
})


module.exports = {
    getAllRoles
}