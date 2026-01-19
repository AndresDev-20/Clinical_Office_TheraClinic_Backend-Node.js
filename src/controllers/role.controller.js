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

// Actualizar rol
const updateRole = catchError(async(req, res) => {
    const { id } = req.params;
    const data = req.body;
    const roleUpdate = await Roles.update(data, {where: {id}})
    if(roleUpdate[0] === 0) return res.status(404).json({error: "El rol no se actualizo porque no existe en la base de datos"})
    return res.json({menssage: "El rol se actualizo exitosamente"});
})

module.exports = {
    getAllRoles,
    addRol,
    updateRole
}