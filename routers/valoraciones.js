const express = require("express");
const { CrearValoracion, VerValoracionPorId, ActualizarValoracion, EliminarValoracion, MostrarValoraciones, MostrarValoracionCursoId, MostrarValoracionUsuarioId } = require("../controllers/valoraciones");
const router = express.Router();

router.post("/crear_valoracion", CrearValoracion);
router.get("/ver_valoracion_por_id/:id", VerValoracionPorId);
router.put("/actualizar_valoracion/:id", ActualizarValoracion);
router.delete("/eliminar_valoracion/:id", EliminarValoracion);
router.get("/mostrar_valoraciones", MostrarValoraciones);
router.get("/mostrar_valoraciones_por_curso/:curso_id", MostrarValoracionCursoId);
router.get("/mostrar_valoraciones_por_usuario/:usuario_id", MostrarValoracionUsuarioId);

module.exports = router;