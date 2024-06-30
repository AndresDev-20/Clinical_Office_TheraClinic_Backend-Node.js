const express = require('express');
const routerTerapeuta = require('./terapeuta.router');
const routerPaciente = require('./paciente.router');
const routerCita = require('./cita.router');
const routerMedicamento = require('./medicamento.router');
const routerEnfermedad = require('./enfermedad.router');
const routerMalestar = require('./malestar.router');
const routerAlergia = require('./alergia.controllers');
const router = express.Router();

// colocar las rutas aquí
router.use("/terapeutas", routerTerapeuta)
router.use("/pacientes", routerPaciente)
router.use("/citas", routerCita)
router.use("/medicamentos", routerMedicamento)
router.use("/enfermedades", routerEnfermedad)
router.use("/malestares", routerMalestar)
router.use("/alergias", routerAlergia)


module.exports = router;