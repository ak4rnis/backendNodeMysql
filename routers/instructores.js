const express = require("express");
const { CrearInstructor, VerInstructorById, ActualizarInstructor, EliminarInstructor, MostrarInstructores, MostrarInstructoresByUsuarioId } = require("../controllers/instructores");
const router = express.Router();

router.post("/crear_instructor", CrearInstructor);
router.get("/ver_instructor_por_id/:id", VerInstructorById);
router.put("/actualizar_instructor/:id", ActualizarInstructor);
router.delete("/eliminar_instructor/:id", EliminarInstructor);
router.get("/mostrar_instructores", MostrarInstructores);
router.get("/mostrar_instructores_por_usuario/:usuario_id", MostrarInstructoresByUsuarioId);

module.exports = router;