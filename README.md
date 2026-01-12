# 🏥 TheraClinic – Backend  
Sistema clínico en proceso de modernización

TheraClinic es un sistema para la gestión administrativa y operativa de un consultorio clínico dedicado a terapias alternativas.  
Actualmente está siendo **refactorizado y modernizado** utilizando tecnologías actuales para mejorar su rendimiento, escalabilidad y mantenibilidad.

---

## 🚀 Tecnologías utilizadas

| Área | Tecnología |
|------|------------|
| Backend | Node.js, Express.js |
| Base de datos | MySQL (modo local), Sequelize ORM |
| Control de versiones | Git & GitHub |
| Migraciones y modelos | Sequelize-CLI |

---

## 📁 Estructura del proyecto (actual)

```
Backend/
├── src/
│ ├── api/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── migrations/
│ │ └── routes/
│ └── server.js
├── .sequelizerc
├── package.json
└── README.md
```

---

## 🗄️ Base de datos  
Se está implementando Sequelize con migraciones y modelos bien estructurados para garantizar integridad y escalabilidad del sistema.

Ejemplo de comandos utilizados:

### Crear un modelo con migración
```
npx sequelize-cli model:generate --name Roles --attributes name_role:string,description_role:string
```

### Ejecutar migraciones
```
npx sequelize-cli db:migrate
```

---

## 📌 Funcionalidades implementadas hasta ahora

- Configuración base de Sequelize con Mysql.  
- Creación de la tabla **Roles** mediante migración.  
- Modelo `Roles` asociado correctamente al ORM.  
- Refactor de la estructura del proyecto para mantener un patrón limpio y escalable.  
- Documentación del proceso y configuración.

---

## 🛠️ Próximas funcionalidades

- Implementación de autenticación y autorización.
- CRUD completo para Roles.
- Configuración de otros módulos del sistema clínico (pacientes, terapeutas, citas, historial clínico, etc.).
- Integración con el frontend en React.

---

## 📚 Cómo levantar el proyecto

### 1. Instalar dependencias
```
npm install
```

### 2. Ejecutar migraciones
```
npx sequelize-cli db:migrate
```

### 3. Levantar el servidor
```
npm run dev
```

---

## ✨ Objetivo del proyecto

Modernizar completamente el sistema del consultorio clínico  
para que sea más **rápido, seguro, modular** y adaptable a nuevas necesidades.

---

## 👨‍💻 Autor  
Proyecto desarrollado por **Yeison Andrés Marroquín Bernal**👨‍💻  
Ingeniero de software – Full Stack Developer.

