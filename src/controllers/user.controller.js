const {User, Role} = require("../api/models")
const catchError = require("../utils/catchError")
const bcrypt = require('bcrypt')


// Viewing users
const getAllUsers = catchError(async(req, res) => {
    const users = await User.findAll({
        attributes: {exclude: ["password"]},
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
        id,
        {
        attributes: {exclude: ["password"]},
        include: { 
            model: Role, 
            as: 'role'
        }
    }
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
    const { id } = req.params;
    const {names, cc, email, password, role_id} = req.body;
    const haschedPassword = await bcrypt.hash(password, 10);
    const updateUser = await User.update(
        {names, cc, email, password:haschedPassword, role_id },
        {where: {id}}
    )
    if(updateUser[0] !== 1) return res.status(404).json({error: "El usuario no existe en la base de datos"});
    return res.status(200).json({message: "Usuario actualizado"})
})

// Delete User by Id
const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const removeUser = await User.destroy({where: {id}})
    if(removeUser !== 1) return res.status(404).json({error: "El usuario no se encontro"});
    return res.status(204).send();
})

// Loggin of user
const login = catchError(async(req, res) => {
    const {cc, password} = req.body;
    const user = await User.findOne({where: {cc}, include: [{model:Role, as: "role"}]})
})

module.exports = {
    getAllUsers,
    create,
    getUsersById,
    update,
    remove,
    login
}