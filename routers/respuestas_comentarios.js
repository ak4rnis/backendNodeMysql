const express = require("express");
const { CrearRespuestasComentarios, VerRespuestaComentarioById, ActualizarRespuestaComentario, EliminarRespuestaComentario, MostrarRespuestasComentarios, MostrarRespuestasComentariosPorUsuarioId, MostrarRespuestaComentarioPorComentarioId } = require("../controllers/respuestas_comentarios");
const router = express.Router();

router.post("/crear_respuesta_comentario", CrearRespuestasComentarios);
router.get("/ver_respuesta_comentario_por_id/:id", VerRespuestaComentarioById);
router.put("/actualizar_respuesta_comentario/:id", ActualizarRespuestaComentario);
router.delete("/eliminar_respuesta_comentario/:id", EliminarRespuestaComentario);
router.get("/mostrar_respuestas_comentarios", MostrarRespuestasComentarios);
router.get("/mostrar_respuestas_comentarios_por_usuario/:usuario_id", MostrarRespuestasComentariosPorUsuarioId);
router.get("/mostrar_respuestas_comentarios_por_comentario/:comentario_id", MostrarRespuestaComentarioPorComentarioId);

module.exports = router;