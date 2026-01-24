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
const create = catchError(async(req, res) => {
    const data = req.body;
    const newOffice = await Office.create(data);
    return res.status(201).json(newOffice)
})

// Update office
const update = catchError(async(req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updateOffice = await Office.update(data, {where: {id}});
    if(updateOffice[0] === 0) return res.status(404).json({Error: "El paciente no se encontro en la base de datos"});

})

module.exports = {
    getAllOffices,
    getOne,
    create, 
    update
}