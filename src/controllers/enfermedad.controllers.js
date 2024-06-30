const catchError = require('../utils/catchError');
const Enfermedad = require('../models/Enfermedad');

const getAll = catchError(async(req, res) => {
	const results = await Enfermedad.findAll();
	return res.json(results);
});

const create = catchError(async(req, res) => {
	const body = req.body;
	const result = await Enfermedad.create(body)
	return res.status(201).json({message: "Enfermedad Creada", Usuario: result})
});

const getOne = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Enfermedad.findByPk(id);
	if(!result) return res.status(404).json({message: "La Enfermedad no existe"});
	return res.json(result);
});

const remove = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Enfermedad.destroy({ where: {id} });
	if(result === 0) return res.status(404).json({message: "Enfermedad no encontrada por ende no eliminada"})
    return res.status(200).json({message: "Enfermedad eliminada exitosamente"});
});

const update = catchError(async(req, res) => {
	const { id } = req.params;
	const body= req.body;
	const result = await Enfermedad.update(
		body,
		{ where: {id}, returning: true }
	);
	if(result[1] === 0) return res.status(404).json({message: "Enfermedad no encontrada por ende no actualizada"})
	return res.status(200).json({message: "Enfermedad actualizada exitosamente"})
});



module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update
}