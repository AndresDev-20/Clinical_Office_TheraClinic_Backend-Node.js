const catchError = require('../utils/catchError');
const Visita = require('../models/Visita');
const Paciente = require('../models/Paciente');
const Malestar = require('../models/Malestar');
const Observacion = require('../models/Observacion');
const Medicamento = require('../models/Medicamento');

const getAll = catchError(async(req, res) => {
	const results = await Visita.findAll({include: [Paciente, Malestar, Observacion, Medicamento]});
	return res.json(results);
});

const create = catchError(async(req, res) => {
	const body = req.body;
	const result = await Visita.create(body)
	return res.status(201).json({message: "Visita Creada", Usuario: result})
});

const getOne = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Visita.findByPk(id);
	if(!result) return res.status(404).json({message: "La Visita no existe"});
	return res.json(result);
});

const remove = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Visita.destroy({ where: {id} });
	if(result === 0) return res.status(404).json({message: "Visita no encontrada por ende no eliminada"})
    return res.status(200).json({message: "Visita eliminada exitosamente"});
});

const update = catchError(async(req, res) => {
	const { id } = req.params;
	const body= req.body;
	const result = await Visita.update(
		body,
		{ where: {id}, returning: true }
	);
	if(result[1] === 0) return res.status(404).json({message: "Visita no encontrada por ende no actualizada"});
	const getVisita = await Visita.findAll()
	return res.status(200).json({message: "Visita actualizada exitosamente", getVisita})
});



module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update
}