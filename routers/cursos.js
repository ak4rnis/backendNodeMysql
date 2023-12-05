const express = require("express");
const { CrearCurso, VerCursoById, ActualizarCurso, EliminarCurso, MostrarCursos, MostrarCursoByCategoriaId, MostrarCursoByInstructorId } = require("../controllers/cursos");
const router = express.Router();

router.post("/crear_curso", CrearCurso);
router.get("/ver_curso_por_id/:id", VerCursoById);
router.put("/actualizar_curso/:id", ActualizarCurso);
router.delete("/eliminar_curso/:id", EliminarCurso);
router.get("/mostrar_cursos", MostrarCursos);
router.get("/mostrar_cursos_por_categoria/:categoria_id", MostrarCursoByCategoriaId);
router.get("/mostrar_cursos_por_instructor/:instructor_id", MostrarCursoByInstructorId);

module.exports = router;

