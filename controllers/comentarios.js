const Comentario = require("../scriptsql/comentario");

const CrearComentario = async (req, res) => {
    const {usuario_id, curso_id, texto} = req.body;
    try{
        const comentario = await Comentario.crearComentario({usuario_id, curso_id, texto});
        res.json({comentario});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const VerComentarioPorId = async (req, res) => {
    const idComentario = req.params['id'];
    try{
        const comentario = await Comentario.getComentarioById(idComentario);
        res.json({comentario});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const ActualizarComentario = async (req, res) => {
    const idComentario = req.params['id'];
    const {usuario_id, curso_id, texto} = req.body;
    try{
        const comentario = await Comentario.actualizarComentario(idComentario, {usuario_id, curso_id, texto});
        res.json({comentario});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const EliminarComentario = async (req, res) => {
    const idComentario = req.params['id'];
    try{
        const comentario = await Comentario.eliminarComentario(idComentario);
        res.json({comentario});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarComentarios = async (req, res) => {
    try{
        const comentarios = await Comentario.mostrarComentarios();
        res.json({comentarios});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarComentariosPorUsuarioId = async (req, res) => {
    const usuarioId = req.params['usuario_id'];
    try{
        const comentarios = await Comentario.getComentarioByUsuarioId(usuarioId);
        res.json({comentarios});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarComentariosPorCursoId = async (req, res) => {
    const cursoId = req.params['curso_id'];
    try{
        const comentarios = await Comentario.getComentarioByCursoId(cursoId);
        res.json({comentarios});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}



module.exports = {CrearComentario, VerComentarioPorId, ActualizarComentario, EliminarComentario, MostrarComentarios, MostrarComentariosPorUsuarioId, MostrarComentariosPorCursoId};