const { Office } = require("../api/models")
const catchError = require("../utils/catchError")


// Viewing offices
const getAllOffices = catchError(async(req, res) => {
    const offices = await Office.findAll();
    return res.status(201).json(offices)
})

// Filter office by id 
const getOneOffice = catchError(async(req, res) => {
    const { id } = req.params;
    const office = await Office.findByPk(id);
    if(!office) return res.status(404).json({error:"El consultorio no existe en la base de datos"});
    return res.status(201).json(office)
})

// Add new office
const createOffice = catchError(async(req, res) => {
    const data = req.body;
    const newOffice = await Office.create(data);
    return res.status(201).json(newOffice)
})

// Update office
const updateOffice = catchError(async(req, res) => {
    const { id } = req.params;
    const data = req.body;
    const officeUpdate = await Office.update(data, {where: {id}});
    if(officeUpdate[0] === 0) return res.status(404).json({Error: "El paciente no se encontro en la base de datos"});

})

// Remove office
const removeOffice = catchError(async(req, res) => {
    const { id } = req.params;
    const officeRemove = await Office.destroy(id);
    if(officeRemove !== 1) return res.status(404).json({Error: "El consultorio no se encontro"});
    return res.status(204).send()
})

module.exports = {
    getAllOffices,
    getOneOffice,
    createOffice, 
    updateOffice,
    removeOffice
}