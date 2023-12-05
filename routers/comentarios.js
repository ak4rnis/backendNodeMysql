const express = require("express");
const { CrearComentario, VerComentarioPorId, MostrarComentarios, ActualizarComentario, EliminarComentario, MostrarComentariosPorUsuarioId, MostrarComentariosPorCursoId } = require("../controllers/comentarios");
const router = express.Router();

router.post("/crear_comentario", CrearComentario);
router.get("/ver_comentario/:id", VerComentarioPorId);
router.get("/mostrar_comentarios", MostrarComentarios);
router.put("/actualizar_comentario/:id", ActualizarComentario);
router.delete("/eliminar_comentario/:id", EliminarComentario);
router.get("/mostrar_comentarios_por_usuario/:usuario_id", MostrarComentariosPorUsuarioId);
router.get("/mostrar_comentarios_por_curso/:curso_id", MostrarComentariosPorCursoId);

module.exports = router;