const RespuestasComentarios = require("../scriptsql/respuestacomentario");

const CrearRespuestasComentarios = async (req, res) => {
    const {usuario_id, comentario_id, texto} = req.body;
    try{
        const respuestacomentario = await RespuestasComentarios.crearRespuestaComentario({usuario_id, comentario_id, texto});
        res.json({respuestacomentario});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const VerRespuestaComentarioById = async (req, res) => {
    const rcId = req.params['id']; 
    try{
        const respuestacomentario = await RespuestasComentarios.getRespuestaComentarioById(rcId);
        res.json({respuestacomentario});
    }catch(error)
    {
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const ActualizarRespuestaComentario = async (req, res) => {
    const rcId = req.params['id'];
    const {usuario_id, comentario_id, texto} = req.body;
    try{
        const respuestacomentario = await RespuestasComentarios.actualizarRespuestaComentario(rcId, {usuario_id, comentario_id, texto});
        res.json({respuestacomentario});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const EliminarRespuestaComentario = async (req, res) => {
    const rcId = req.params['id'];
    try{
        const respuestacomentario = await RespuestasComentarios.eliminarRespuestaComentario(rcId);
        res.json({respuestacomentario});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarRespuestasComentarios = async (req, res) => {
    try{
        const respuestacomentario = await RespuestasComentarios.mostrarTodosLasRespuestasComentarios();
        res.json({respuestacomentario});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarRespuestasComentariosPorUsuarioId = async(req, res) => {
    const usuarioId = req.params['usuario_id']
    try{
        const respuestacomentario = await RespuestasComentarios.getRespuestaComentarioByUsuarioId(usuarioId);
        res.json({respuestacomentario});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarRespuestaComentarioPorComentarioId = async (req, res) => {
    const comentarioId = req.params['comentario_id'];
    try{
        const respuestacomentario = await RespuestasComentarios.getRespuestaComentarioByComentarioId(comentarioId);
        res.json({respuestacomentario});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

module.exports = {CrearRespuestasComentarios, VerRespuestaComentarioById, ActualizarRespuestaComentario, EliminarRespuestaComentario, MostrarRespuestasComentarios, MostrarRespuestaComentarioPorComentarioId, MostrarRespuestasComentariosPorUsuarioId}