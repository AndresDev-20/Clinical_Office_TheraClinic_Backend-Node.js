const { sequelize } = require('./api/models');
const app = require('./app')

const PORT = process.env.PORT || 8080;

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log("Conexión a la base de datos establecida");
        
    } catch (error) {
        
    }
}