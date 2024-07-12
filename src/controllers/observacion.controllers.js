const catchError = require('../utils/catchError');
const Observacion = require('../models/Observacion');
const Paciente = require('../models/Paciente');

const getAll = catchError(async(req, res) => {
	const results = await Observacion.findAll({include: Paciente});
	return res.json(results);
});

const create = catchError(async(req, res) => {
	const body = req.body;
	const result = await Observacion.create(body)
	return res.status(201).json({message: "Observacion Creada", Usuario: result})
});

const getOne = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Observacion.findByPk(id);
	if(!result) return res.status(404).json({message: "La Observacion no existe"});
	return res.json(result);
});

const remove = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Observacion.destroy({ where: {id} });
	if(result === 0) return res.status(404).json({message: "Observacion no encontrada por ende no eliminada"})
    return res.status(200).json({message: "Observacion eliminada exitosamente"});
});

const update = catchError(async(req, res) => {
	const { id } = req.params;
	const body= req.body;
	const result = await Observacion.update(
		body,
		{ where: {id}, returning: true }
	);
	if(result[1] === 0) return res.status(404).json({message: "Observacion no encontrada por ende no actualizada"});
	const getObservacion = await Observacion.findAll()
	return res.status(200).json({message: "Observacion actualizada exitosamente", getObservacion})
});



module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update
}