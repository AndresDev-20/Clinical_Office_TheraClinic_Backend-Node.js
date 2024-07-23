const Acompañante = require("./Acompañante");
const Alergia = require("./Alergia");
const Archivo = require("./Archivo");
const Cita = require("./Cita");
const Deuda = require("./Deuda");
const Enfermedad = require("./Enfermedad");
const Malestar = require("./Malestar");
const Medicamento = require("./Medicamento");
const Observacion = require("./Observacion");
const Paciente = require("./Paciente");
const Visita = require("./Visita");

Paciente.hasMany(Acompañante)
Acompañante.belongsTo(Paciente)

Paciente.hasMany(Cita)
Cita.belongsTo(Paciente)

Paciente.hasMany(Visita)
Visita.belongsTo(Paciente)

Paciente.hasMany(Alergia)
Alergia.belongsTo(Paciente)

Paciente.hasMany(Enfermedad)
Enfermedad.belongsTo(Paciente)

Paciente.hasMany(Malestar)
Malestar.belongsTo(Paciente)

Paciente.hasMany(Medicamento)
Medicamento.belongsTo(Paciente)

Paciente.hasMany(Deuda)
Deuda.belongsTo(Paciente)

Paciente.hasMany(Archivo)
Archivo.belongsTo(Paciente)

Visita.hasMany(Observacion)
Observacion.belongsTo(Visita)

Visita.hasMany(Medicamento)
Medicamento.belongsTo(Visita)

Visita.hasMany(Malestar)
Malestar.belongsTo(Visita)

