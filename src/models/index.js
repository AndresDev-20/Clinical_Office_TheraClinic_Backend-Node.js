const Alergia = require("./Alergia");
const Cita = require("./Cita");
const Enfermedad = require("./Enfermedad");
const Malestar = require("./Malestar");
const Medicamento = require("./Medicamento");
const Paciente = require("./Paciente");

Paciente.hasMany(Cita)
Cita.belongsTo(Paciente)

Paciente.hasMany(Enfermedad)
Enfermedad.belongsTo(Paciente)

Paciente.hasMany(Medicamento)
Medicamento.belongsTo(Paciente)

Paciente.hasMany(Malestar)
Malestar.belongsTo(Paciente)

Paciente.hasMany(Alergia)
Alergia.belongsTo(Paciente)