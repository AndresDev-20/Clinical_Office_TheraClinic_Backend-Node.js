const Archivo  = require('../models/Archivo');
const Paciente = require('../models/Paciente');
const catchError = require('../utils/catchError');
const fs = require('fs');
const path = require('path');


const getAll = catchError(async(req, res) => {
	const result = await Archivo.findAll({include: [Paciente]});
	return res.json(result)
})

const create = catchError(async (req, res) => {
  const filePath = req.file.path;
  const { pacienteId, fecha, Nombre } = req.body;

  const archivo = await Archivo.create({ ruta: filePath, pacienteId, fecha: fecha, Nombre: Nombre });
  return res.status(200).json({ message: 'Archivo subido y guardado en la base de datos', archivo });
});

const remove = catchError(async(req, res) => {
	const { id } = req.params;

	// Encuentra el archivo antes de eliminarlo
	const archivo = await Archivo.findByPk(id);
	if (!archivo) return res.status(404).json({ message: "Archivo no encontrado por ende no eliminado" });

	const filePath = archivo.ruta;

	// Elimina el archivo de la base de datos
	const result = await Archivo.destroy({ where: { id } });
	if (result === 0) return res.status(404).json({ message: "Archivo no encontrado por ende no eliminado" });

	// Elimina el archivo del sistema de archivos
	fs.unlink(filePath, (err) => {
		if (err) {
			console.error("Error al eliminar el archivo:", err);
			return res.status(500).json({ message: "Archivo eliminado de la base de datos pero no del sistema de archivos" });
		}

		return res.status(200).json({ message: "Archivo eliminado exitosamente" });
	});
});

module.exports = {
	getAll,
  create,
  remove
};
