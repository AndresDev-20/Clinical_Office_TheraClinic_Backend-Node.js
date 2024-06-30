const catchError = require('../utils/catchError');
const Malestar = require('../models/Malestar');

const getAll = catchError(async(req, res) => {
	const results = await Malestar.findAll();
	return res.json(results);
});

const create = catchError(async(req, res) => {
	const body = req.body;
	const result = await Malestar.create(body)
	return res.status(201).json({message: "Malestar Creado", Usuario: result})
});

const getOne = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Malestar.findByPk(id);
	if(!result) return res.status(404).json({message: "El Malestar no existe"});
	return res.json(result);
});

const remove = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Malestar.destroy({ where: {id} });
	if(result === 0) return res.status(404).json({message: "Malestar no encontrado por ende no eliminado"})
    return res.status(200).json({message: "Malestar eliminado exitosamente"});
});

const update = catchError(async(req, res) => {
	const { id } = req.params;
	const body= req.body;
	const result = await Malestar.update(
		body,
		{ where: {id}, returning: true }
	);
	if(result[1] === 0) return res.status(404).json({message: "Malestar no encontrado por ende no actualizado"})
	return res.status(200).json({message: "Malestar actualizado exitosamente"})
});



module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update
}