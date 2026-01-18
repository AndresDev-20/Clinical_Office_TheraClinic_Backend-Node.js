const {Roles} = require("../api/models")
const catchError = require("../utils/catchError")

// Visualizacion de roles
const getAllRoles = catchError(async(req, res) => {
    const roles = await Roles.findAll()
    return res.status(201).json(roles)
})

// Creacion de un rol
const addRol = catchError(async(req, res) => {
    const data = req.body;
    const newRol = await Roles.create(data)
    return res.status(201).json({message: "El rol se creo exitosamente", newRol})
})


module.exports = {
    getAllRoles,
    addRol
}