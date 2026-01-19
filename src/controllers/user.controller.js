const {User, Role} = require("../api/models")
const catchError = require("../utils/catchError")

// Viewing users
const getAllUsers = catchError(async(req, res) => {
    const users = await User.findAll({
        include: { 
            model: Role, 
            as: 'role'
        }});
    return res.status(201).json(users)
})

// Add new user
const create = catchError(async(req, res) => {
    const data = req.body;
    const rol = await Role.findByPk(data.role_id);
    if(!rol) return res.status(404).json({Message: "El rol no existe por lo que el usurio no se puede crear"});
    const newUser = await User.create(data)
    return res.status(201).json({message: "Usuario creado", newUser})
})

module.exports = {
    getAllUsers,
    create
}