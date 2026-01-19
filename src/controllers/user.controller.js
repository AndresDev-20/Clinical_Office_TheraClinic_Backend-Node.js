const {User} = require("../api/models")
const catchError = require("../utils/catchError")

// Viewing users
const getAllUsers = catchError(async(req, res) => {
    const users = await User.findAll();
    return res.status(201).json(users)
})

// Add new user
const create = catchError(async(req, res) => {
    const data = req.body;
    const newUser = await User.create(data)
    return res.status(201).json({message: "Usuario creado", newUser})
})

module.exports = {
    getAllUsers,
    create
}