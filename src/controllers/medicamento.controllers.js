const catchError = require('../utils/catchError');
const Medicamento = require('../models/Medicamento');

const getAll = catchError(async(req, res) => {
	const results = await Medicamento.findAll();
	return res.json(results);
});

const create = catchError(async(req, res) => {
	const body = req.body;
	const result = await Medicamento.create(body)
	return res.status(201).json({message: "Medicamento Creado", Usuario: result})
});

const getOne = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Medicamento.findByPk(id);
	if(!result) return res.status(404).json({message: "El Medicamento no existe"});
	return res.json(result);
});

const remove = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Medicamento.destroy({ where: {id} });
	if(result === 0) return res.status(404).json({message: "Medicamento no encontrado por ende no eliminado"})
    return res.status(200).json({message: "Medicamento eliminado exitosamente"});
});

const update = catchError(async(req, res) => {
	const { id } = req.params;
	const body= req.body;
	const result = await Medicamento.update(
		body,
		{ where: {id}, returning: true }
	);
	if(result[1] === 0) return res.status(404).json({message: "Medicamento no encontrado por ende no actualizado"})
	return res.status(200).json({message: "Medicamento actualizado exitosamente"})
});



module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update
}