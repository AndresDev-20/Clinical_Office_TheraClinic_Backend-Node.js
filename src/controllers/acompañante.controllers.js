const catchError = require('../utils/catchError');
const Acompañante = require('../models/Acompañante');

const getAll = catchError(async(req, res) => {
	const results = await Acompañante.findAll();
	return res.json(results);
});

const create = catchError(async(req, res) => {
	const body = req.body;
	const result = await Acompañante.create(body)
	return res.status(201).json({message: "Acompañante Creado", Usuario: result})
});

const getOne = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Acompañante.findByPk(id);
	if(!result) return res.status(404).json({message: "El Acompañante no existe"});
	return res.json(result);
});

const remove = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Acompañante.destroy({ where: {id} });
	if(result === 0) return res.status(404).json({message: "Acompañante no encontrado por ende no eliminado"})
    return res.status(200).json({message: "Acompañante eliminado exitosamente"});
});

const update = catchError(async(req, res) => {
	const { id } = req.params;
	const body= req.body;
	const result = await Acompañante.update(
		body,
		{ where: {id}, returning: true }
	);
	if(result[1] === 0) return res.status(404).json({message: "Acompañante no encontrado por ende no actualizado"})
	return res.status(200).json({message: "Acompañante actualizado exitosamente"})
});



module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update
}