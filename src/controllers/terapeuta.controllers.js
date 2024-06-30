const catchError = require('../utils/catchError');
const Terapeuta = require('../models/Terapeuta');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAll = catchError(async(req, res) => {
	const results = await Terapeuta.findAll();
	return res.json(results);
});

const create = catchError(async(req, res) => {
	const {Contraseña, ...rest} = req.body;
	const hashPassword = await bcrypt.hash(Contraseña, 10);
	const result = await Terapeuta.create({...rest, Contraseña: hashPassword});
	return res.status(201).json({message: "Usuario Creado", Usuario: result})
});

const getOne = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Terapeuta.findByPk(id);
	if(!result) return res.status(404).json({message: "El usuario no existe"});
	return res.json(result);
});

const remove = catchError(async(req, res) => {
	const { id } = req.params;
	const result = await Terapeuta.destroy({ where: {id} });
	if(result === 0) return res.status(404).json({message: "Usuario no encontrado por ende no eliminado"})
    return res.status(200).json({message: "Usuario eliminado exitosamente"});
});

const update = catchError(async(req, res) => {
	const { id } = req.params;
	const {Contraseña, ...rest} = req.body;
	const hashPassword = await bcrypt.hash(Contraseña, 10)
	const result = await Terapeuta.update(
		{...rest, Contraseña: hashPassword},
		{ where: {id}, returning: true }
	);
	if(result[1] === 0) return res.status(404).json({message: "Usuario no encontrado por ende no actualizado"})
	return res.status(200).json({message: "Usuario actualizado exitosamente"})
});

const login = catchError(async(req, res) => {
	const {Identificacion, Contraseña} = req.body;
	const user = await Terapeuta.findOne({where: {Identificacion}})
	if(!user) return res.status(404).json({message: "Usuario no encontrado"});

	const password = await bcrypt.compare(Contraseña, user.Contraseña)
	if(!password) return res.status(404).json({message: "La contraseña no es correcta"});

	const token = jwt.sign(
		{user},
		process.env.TOKEN_SECRET,
		{expiresIn: "1d"}
	)
	return res.json({user, token})
})

module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update,
	login
}