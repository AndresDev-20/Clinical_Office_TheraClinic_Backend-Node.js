const catchError = require('../utils/catchError');
const Cita = require('../models/Cita');
const Paciente = require('../models/Paciente');

const getAll = catchError(async(req, res) => {
	const results = await Cita.findAll({include: Paciente});
	return res.json(results);
});

const create = catchError(async(req, res) => {
	const body = req.body;
	const result = await Cita.create(body)
	return res.status(201).json({message: "Cita Creada", Usuario: result})
});

const getOne = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Cita.findByPk(id);
	if(!result) return res.status(404).json({message: "La cita no existe"});
	return res.json(result);
});

const remove = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Cita.destroy({ where: {id} });
	if(result === 0) return res.status(404).json({message: "Cita no encontrada por ende no eliminada"})
    return res.status(200).json({message: "Cita eliminada exitosamente"});
});

const update = catchError(async(req, res) => {
	const { id } = req.params;
	const body= req.body;
	const result = await Cita.update(
		body,
		{ where: {id}, returning: true }
	);
	if(result[1] === 0) return res.status(404).json({message: "Cita no encontrada por ende no actualizada"})
	return res.status(200).json({message: "Cita actualizada exitosamente"})
});



module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update
}