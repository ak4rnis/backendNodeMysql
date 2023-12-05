const express = require("express");
const { CrearCursoSeccion, VerCursoSeccionById, ActualizarCursoSeccion, EliminarCursoSeccion, MostrarCursoSecciones, MostrarCursoSeccionesPorCursoId, MostrarCursoSeccionesPorSeccionId } = require("../controllers/cursosecciones");
const router = express.Router();

router.post("/crear_cursoseccion", CrearCursoSeccion);
router.get("/ver_cursoseccion_por_id/:id", VerCursoSeccionById);
router.put("/actualizar_cursoseccion/:id", ActualizarCursoSeccion);
router.delete("eliminar_cursoseccion/:id", EliminarCursoSeccion);
router.get("/mostrar_cursosecciones", MostrarCursoSecciones);
router.get("/mostrar_cursosecciones_por_curso/:curso_id", MostrarCursoSeccionesPorCursoId);
router.get("/mostrar_cursosecciones_por_seccion/:seccion_id", MostrarCursoSeccionesPorSeccionId);

module.exports = router;