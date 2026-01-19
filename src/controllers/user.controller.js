const {User} = require("../api/models")
const catchError = require("../utils/catchError")

// Viewing users
const getAllUsers = catchError(async(req, res) => {
    const users = await User.findAll();
    return res.status(201).json(users)
})

module.exports = {
    getAllUsers
}