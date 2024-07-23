const catchError = require('../utils/catchError');
const Terapeuta = require('../models/Terapeuta');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require('../utils/sendEmail');

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
    const data = req.body;

    // If password is provided in the request, hash it before updating
    if (data.Contraseña) {
        data.Contraseña = await bcrypt.hash(data.Contraseña, 10);
    } else {
        // Exclude password from the data if it is not provided
        delete data.Contraseña;
    }

    const [updatedRowsCount, updatedRows] = await Terapeuta.update(
        data,
        { where: { id }, returning: true }
    );

    if (updatedRowsCount === 0) return res.status(404).json({ message: "Usuario no encontrado por ende no actualizado" });

    return res.status(200).json({ message: "Usuario actualizado exitosamente", updatedUser: updatedRows[0] });
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


const EmailVerify = catchError(async(req, res)=> {
	const  {Correo, urlfront} = req.body
    const user = await Terapeuta.findOne({where:{Correo}})
    if(!Terapeuta) return res.status(401).json({message: "El usuario no existe"})
		const code = require('crypto').randomBytes(64).toString('hex')
    const url = `${urlfront}/#/update/${code}/${user.id}`
    await sendEmail({
        to:Correo,
        subject:"Password Change Request",
        html:`
        <h2>Ingresa a este enlace para poder cambiar tu contraseña en terapias clinicas</h2>
        <a href=${url}>Click me</a>
        `
    })
    return res.json(res.json({message: "Acabamos de mandarte un email a tu correo, ve y revisalo por favor."}))
})

const updatePassword = catchError(async (req, res) => {
    const { Contraseña, terapeutaId } = req.body;
    const id = terapeutaId;

    const user = await Terapeuta.findOne({ where: { id } });

    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const hashPassword = await bcrypt.hash(Contraseña, 10);
    await Terapeuta.update({ Contraseña: hashPassword }, { where: { id } });

    return res.status(200).json({ message: 'Contraseña actualizada exitosamente' });
});


module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update,
	login,
	EmailVerify,
	updatePassword
}