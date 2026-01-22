const jwt = require('jsonwebtoken')

const SECRET = process.env.TOKEN_SECRET;
const EXPIRES = "1h";

// Generar el token
const generateToken = (payload) => jwt.sign(payload, SECRET, {expiresIn: EXPIRES});

// Verificamos el token, si el token fue manipulado o vencio, devuelve null
const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET);
    } catch {
        return null;
    }
}

module.exports = {generateToken, verifyToken}