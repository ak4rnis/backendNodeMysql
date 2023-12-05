const Seccion = require("../scriptsql/seccion");

const CrearSeccion = async (req, res) => {
    const {titulo, url, duracion, curso_id} = req.body;
    try{
        const seccion = await Seccion.crearSeccion({titulo, url, duracion, curso_id});
        res.json({seccion});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const VerSeccionPorId = async (req, res) => {
    const idSeccion = req.params['id'];
    try{
        const seccion = await Seccion.getSeccionById(idSeccion);
        res.json({seccion});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const ActualizarSeccion = async (req, res) => {
    const idSeccion = req.params['id'];
    const {titulo, url, duracion, curso_id} = req.body;
    try{
        const seccion = await Seccion.actualizarSeccion(idSeccion, {titulo, url, duracion, curso_id});
        res.json({seccion});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const EliminarSeccion = async (req, res) => {
    const idSeccion = req.params['id'];
    try{
        const seccion = await Seccion.eliminarSeccion(idSeccion);
        res.json({seccion});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarSecciones = async (req, res) => {
    try{
        const seccion = await Seccion.mostrarTodosLasSecciones();
        res.json({seccion});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarSeccionByCursoId = async (req, res) => {
    const cursoId = req.params['curso_id'];
    try{
        const seccion = await Seccion.getSeccionByCursoId(cursoId);
        res.json({seccion});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

module.exports = {CrearSeccion,MostrarSeccionByCursoId, VerSeccionPorId, ActualizarSeccion, EliminarSeccion, MostrarSecciones};