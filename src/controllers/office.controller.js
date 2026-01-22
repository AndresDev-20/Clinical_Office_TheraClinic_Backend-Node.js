const { Office } = require("../api/models")
const catchError = require("../utils/catchError")


// Viewing offices
const GetAllOffices = catchError(async(req, res) => {
    const offices = await Office.findAll();
    return res.status(201).json(offices)
})

module.exports = {
    GetAllOffices
}