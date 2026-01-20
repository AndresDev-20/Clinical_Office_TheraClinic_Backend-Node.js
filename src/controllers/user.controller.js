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

// Filtered by id
const getUsersById = catchError(async(req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(
        id
    )
    if(!user) return res.status(404).json({error:"El usuario no existe en la base de datos"});
    return res.status(201).json(user)
});

// Add new user
const create = catchError(async(req, res) => {
    const data = req.body;
    const rol = await Role.findByPk(data.role_id);
    if(!rol) return res.status(404).json({Message: "El rol no existe por lo que el usurio no se puede crear"});
    const newUser = await User.create(data)
    return res.status(201).json({message: "Usuario creado", newUser})
})

// 

module.exports = {
    getAllUsers,
    create,
    getUsersById
}