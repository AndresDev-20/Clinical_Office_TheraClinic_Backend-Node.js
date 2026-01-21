const {User, Role} = require("../api/models")
const catchError = require("../utils/catchError")
const bcrypt = require('bcrypt')


// Viewing users
const getAllUsers = catchError(async(req, res) => {
    const users = await User.findAll({
        include: { 
            model: Role, 
            as: 'role'
        }});
    return res.status(201).json(users)
});

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
    const {names, cc, email, password, role_id} = req.body;
    const rol = await Role.findByPk(role_id);
    const haschedPassword = await bcrypt.hash(password, 10)
    if(!rol) return res.status(404).json({Message: "El rol no existe por lo que el usurio no se puede crear"});
    const newUser = await User.create({names, cc, email, password:haschedPassword, role_id})
    return res.status(201).json({message: "Usuario creado", newUser})
});

// update user
const update = catchError(async(req, res) => {
    const { id } = req.params
})


module.exports = {
    getAllUsers,
    create,
    getUsersById
}