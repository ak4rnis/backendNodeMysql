const Valoraciones = require("../scriptsql/valoraciones");

const CrearValoracion = async (req, res) => {
    const {usuario_id, curso_id, puntuacion, comentario} = req.body;
    try{
        const valoraciones = await Valoraciones.crearValoracion({usuario_id, curso_id, puntuacion, comentario});
        res.json({valoraciones});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const VerValoracionPorId = async (req, res) => {
    const valoracionId = req.params['id'];
    try{
        const valoraciones = await Valoraciones.getValoracionById(valoracionId);
        res.json({valoraciones});
    }catch(error)
    {
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const ActualizarValoracion = async (req, res) => {
    const valoracionId = req.params['id'];
    const {usuario_id, curso_id, puntuacion, comentario} = req.body;
    try{
        const valoracion = await Valoraciones.actualizarValoracion(valoracionId, {usuario_id, curso_id, puntuacion, comentario});
        res.json({valoracion});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const EliminarValoracion = async (req, res) => {
    const valoracionId = req.params['id'];
    try{
        const valoraciones = await Valoraciones.eliminarValoracion(valoracionId);
        res.json({valoraciones});
    }catch(error)
    {
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarValoraciones = async (req, res) => {
    try{
        const valoraciones = await Valoraciones.mostrarValoraciones();
        return res.json({valoraciones});
    }catch(error)
    {
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarValoracionCursoId = async (req, res) => {
    const cursoId = req.params['curso_id'];
    try{
        const valoraciones = await Valoraciones.getValoracionByCursoId(cursoId);
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarValoracionUsuarioId = async (req, res) => {
    const usuarioId = req.params['usuario_id'];
    try{
        const valoraciones = await Valoraciones.getValoracionByUsuarioId(usuarioId);

    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

module.exports = {CrearValoracion, VerValoracionPorId, ActualizarValoracion, EliminarValoracion, MostrarValoraciones, MostrarValoracionCursoId, MostrarValoracionUsuarioId}