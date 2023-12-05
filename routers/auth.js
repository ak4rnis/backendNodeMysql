const express = require('express');
const router = express.Router();
const {registrarUsuario, loginUsuario, getUsuarioAutenticado} = require("../controllers/auth");
const {authenticateToken} = require("../middlewares/authmiddlewares");


router.post('/registrarusuario', registrarUsuario);
router.post('/loginusuario', loginUsuario);
router.get('/verusuarioautenticado', authenticateToken, getUsuarioAutenticado);


module.exports = router;