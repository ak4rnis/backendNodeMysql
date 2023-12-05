const CursoSeccion = require("../scriptsql/cursoseccion");

const CrearCursoSeccion = async (req, res) => {
    const {curso_id, seccion_id} = req.body;
    try{
        const cursoseccion = await CursoSeccion.crearCursoSeccion({curso_id, seccion_id});
        res.json({cursoseccion});
    }catch(error)
    {
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const VerCursoSeccionById = async (req, res) => {
    const cursoseccionId = req.params['id'];
    try{
        const cursoseccion = await CursoSeccion.getCursoSeccionById(cursoseccionId);
        res.json({cursoseccion});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const ActualizarCursoSeccion = async (req, res) => {
    const cursoseccionId = req.params['id'];
    const {curso_id, seccion_id} = req.body;
    try{
        const cursoseccion = await CursoSeccion.actualizarCursoSeccion(cursoseccionId, {curso_id, seccion_id});
        res.json({cursoseccion});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const EliminarCursoSeccion = async (req, res) => {
    const cursoseccionId = req.params['id'];
    try{
        const cursoseccion = await CursoSeccion.eliminarCursoSeccion(cursoseccionId);
        res.json({cursoseccion})
    }catch(error)
    {
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarCursoSecciones = async (req, res) => {
    try{
        const cursoseccion = await CursoSeccion.mostrarCursoSeccions();
        res.json({cursoseccion});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarCursoSeccionesPorCursoId = async (req, res) => {
    const cursoId = req.params['curso_id'];
    try{
        const cursoseccion = await CursoSeccion.getCursoSeccionByCursoId(cursoId);
        res.json({cursoseccion});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarCursoSeccionesPorSeccionId = async (req, res) => {
    const seccionId = req.params['seccion_id'];
    try{
        const cursoseccion = await CursoSeccion.getCursoSeccionBySeccionId(seccionId);
        res.json({cursoseccion});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

module.exports = {
    CrearCursoSeccion,
    VerCursoSeccionById,
    ActualizarCursoSeccion,
    EliminarCursoSeccion,
    MostrarCursoSecciones,
    MostrarCursoSeccionesPorCursoId,
    MostrarCursoSeccionesPorSeccionId
}