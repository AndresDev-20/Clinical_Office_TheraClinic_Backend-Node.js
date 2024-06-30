const catchError = require('../utils/catchError');
const Alergia = require('../models/Alergia');

const getAll = catchError(async(req, res) => {
	const results = await Alergia.findAll();
	return res.json(results);
});

const create = catchError(async(req, res) => {
	const body = req.body;
	const result = await Alergia.create(body)
	return res.status(201).json({message: "Alergia Creada", Usuario: result})
});

const getOne = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Alergia.findByPk(id);
	if(!result) return res.status(404).json({message: "La Alergia no existe"});
	return res.json(result);
});

const remove = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Alergia.destroy({ where: {id} });
	if(result === 0) return res.status(404).json({message: "Alergia no encontrada por ende no eliminada"})
    return res.status(200).json({message: "Alergia eliminada exitosamente"});
});

const update = catchError(async(req, res) => {
	const { id } = req.params;
	const body= req.body;
	const result = await Alergia.update(
		body,
		{ where: {id}, returning: true }
	);
	if(result[1] === 0) return res.status(404).json({message: "Alergia no encontrada por ende no actualizada"})
	return res.status(200).json({message: "Alergia actualizada exitosamente"})
});



module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update
}