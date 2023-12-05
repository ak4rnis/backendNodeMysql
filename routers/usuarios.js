const express = require('express');
const { CrearUsuario, VerUsuarioPorId, MostrarUsuarios, ActualizarUsuario, EliminarUsuario } = require('../controllers/usuarios');
const router = express.Router();

router.post("/crear_usuario", CrearUsuario);
router.get("/ver_usuario/:id", VerUsuarioPorId);
router.get("/mostrar_usuarios", MostrarUsuarios);
router.put("/actualizar_usuario/:id", ActualizarUsuario);
router.delete("/eliminar_usuario/:id", EliminarUsuario);

module.exports = router;