const { Office } = require("../api/models")
const catchError = require("../utils/catchError")


// Viewing offices
const getAllOffices = catchError(async(req, res) => {
    const offices = await Office.findAll();
    return res.status(201).json(offices)
})

// Filter office by id 
const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const office = await Office.findByPk(id);
    if(!office) return res.status(404).json({error:"El consultorio no existe en la base de datos"});
    return res.status(201).json(office)
})

// Add new office
const craete = catchError(async(req, res) => {
    
})

module.exports = {
    getAllOffices,
    getOne
}