const jwt = require('jsonwebtoken');

// Clave secreta para firmar los tokens
const secretKey = 'mi_clave_secreta';

// La duración de un año en segundos
const expiresInOneYear = 31536000;

const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: expiresInOneYear });
};

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};

module.exports = { generateToken, verifyToken };