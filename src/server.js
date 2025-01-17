const app = require('./app')
const sequelize = require("./utils/connection")
const PORT = process.env.PORT || 8080;


const main = async() => {
    try {
        await sequelize.sync();
        console.log("Base de datos conectada")
        app.listen(PORT)
        console.log(`Servidor levantado en el puerto ${PORT}`)
    } catch (error) {
        console.log("Error en conexion")
    }
}

main()