const express = require("express");
const { CrearSeccion, VerSeccionPorId, MostrarSecciones, ActualizarSeccion, EliminarSeccion, MostrarSeccionByCursoId } = require("../controllers/secciones");
const router = express.Router();

router.post("/crear_seccion", CrearSeccion);
router.get("/ver_seccion/:id", VerSeccionPorId);
router.get("/mostrar_secciones", MostrarSecciones);
router.put("/actualizar_seccion/:id", ActualizarSeccion);
router.delete("/eliminar_seccion/:id", EliminarSeccion); 
router.get("/mostrar_secciones_por_curso/:curso_id", MostrarSeccionByCursoId);

module.exports = router;