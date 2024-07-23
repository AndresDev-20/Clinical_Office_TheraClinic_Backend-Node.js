const catchError = require('../utils/catchError');
const Deuda = require('../models/Deuda');
const Paciente = require('../models/Paciente');

const getAll = catchError(async(req, res) => {
	const results = await Deuda.findAll({include: [Paciente]});
	return res.json(results);
});

const create = catchError(async(req, res) => {
	const body = req.body;
	const result = await Deuda.create(body)
	return res.status(201).json({message: "Deuda Creada", Usuario: result})
});

const getOne = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Deuda.findByPk(id);
	if(!result) return res.status(404).json({message: "La Deuda no existe"});
	return res.json(result);
});

const remove = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Deuda.destroy({ where: {id} });
	if(result === 0) return res.status(404).json({message: "Deuda no encontrada por ende no eliminada"})
    return res.status(200).json({message: "Deuda eliminada exitosamente"});
});

const update = catchError(async(req, res) => {
	const { id } = req.params;
	const body= req.body;
	const result = await Deuda.update(
		body,
		{ where: {id}, returning: true }
	);
	if(result[1] === 0) return res.status(404).json({message: "Deuda no encontrada por ende no actualizada"})
	return res.status(200).json({message: "Deuda actualizada exitosamente"})
});



module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update
}