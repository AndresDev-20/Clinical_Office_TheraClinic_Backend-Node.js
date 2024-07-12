const Alergia = require("./Alergia");
const Cita = require("./Cita");
const Enfermedad = require("./Enfermedad");
const Malestar = require("./Malestar");
const Medicamento = require("./Medicamento");
const Observacion = require("./Observacion");
const Paciente = require("./Paciente");
const Visita = require("./Visita");

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

Visita.hasMany(Observacion)
Observacion.belongsTo(Visita)

Visita.hasMany(Medicamento)
Medicamento.belongsTo(Visita)

Visita.hasMany(Malestar)
Malestar.belongsTo(Visita)

