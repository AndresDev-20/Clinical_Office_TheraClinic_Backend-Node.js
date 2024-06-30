const catchError = require('../utils/catchError');
const Paciente = require('../models/Paciente');
const Malestar = require('../models/Malestar');
const Medicamento = require('../models/Medicamento');
const Cita = require('../models/Cita');
const Enfermedad = require('../models/Enfermedad');
const Alergia = require('../models/Alergia');

const getAll = catchError(async(req, res) => {
	const results = await Paciente.findAll({include: [Malestar, Medicamento, Cita, Enfermedad, Alergia]});
	return res.json(results);
});

const create = catchError(async(req, res) => {
	const body = req.body;
	const result = await Paciente.create(body)
	return res.status(201).json({message: "Usuario Creado", Usuario: result})
});

const getOne = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Paciente.findByPk(id, {include: [Malestar, Medicamento, Cita, Enfermedad, Alergia]});
	if(!result) return res.status(404).json({message: "El usuario no existe"});
	return res.json(result);
});

const remove = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Paciente.destroy({ where: {id} });
	if(result === 0) return res.status(404).json({message: "Usuario no encontrado por ende no eliminado"})
    return res.status(200).json({message: "Usuario eliminado exitosamente"});
});

const update = catchError(async(req, res) => {
	const { id } = req.params;
	const body= req.body;
	const result = await Paciente.update(
		body,
		{ where: {id}, returning: true }
	);
	if(result[1] === 0) return res.status(404).json({message: "Usuario no encontrado por ende no actualizado"})
	return res.status(200).json({message: "Usuario actualizado exitosamente"})
});



module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update
}