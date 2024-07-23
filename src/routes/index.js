const express = require('express');
const routerTerapeuta = require('./terapeuta.router');
const routerPaciente = require('./paciente.router');
const routerCita = require('./cita.router');
const routerMedicamento = require('./medicamento.router');
const routerEnfermedad = require('./enfermedad.router');
const routerMalestar = require('./malestar.router');
const routerAlergia = require('./alergia.controllers');
const routerObservacion = require('./observacion.router');
const routerVisita = require('./visita.router');
const routerAcompañante = require('./acompañante.router');
const routerArchivo = require('./archivo.router');
const routerDeuda = require('./deuda.router');
const router = express.Router();

// colocar las rutas aquí
router.use("/terapeutas", routerTerapeuta)
router.use("/pacientes", routerPaciente)
router.use("/citas", routerCita)
router.use("/medicamentos", routerMedicamento)
router.use("/enfermedades", routerEnfermedad)
router.use("/malestares", routerMalestar)
router.use("/alergias", routerAlergia)
router.use("/observaciones", routerObservacion)
router.use("/visitas", routerVisita)
router.use("/acompanantes", routerAcompañante)
router.use("/archivos", routerArchivo)
router.use("/deudas", routerDeuda)


module.exports = router;