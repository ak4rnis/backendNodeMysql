const { verifyToken } = require("../helpers/jwtHelper");
const User = require("../scriptsql/usuario");

const isAdmin = (req, res, next) => {
  const user = req.user;

  if (user && user.rol_usuario === 'admin') {
    next();
  } else {
    return res.status(403).json({ message: 'Acceso no autorizado para administradores' });
  }
};

const isAuthenticated = (req, res, next) => {
  const user = req.user;

  if (user) {
    next();
  } else {
    return res.status(401).json({ message: 'Acceso no autorizado' });
  }
};

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  const [scheme, token] = authHeader.split(' ');

  if (!token || (scheme.toLowerCase() !== 'bearer' && !scheme)) {
    return res.status(401).json({ message: 'Formato de token no válido' });
  }

  try {
    const decoded = await verifyToken(token);
    const user = await User.getUsuarioById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = { isAdmin, isAuthenticated, authenticateToken };