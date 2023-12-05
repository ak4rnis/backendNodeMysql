const Instructores = require("../scriptsql/instructor");

const CrearInstructor = async (req, res) => {
    const {usuario_id, biografia, foto_perfil} = req.body;
    try{
        const instructor = await Instructores.crearInstructor({usuario_id, biografia, foto_perfil});
        res.json(instructor);
    }catch(error)
    {
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const VerInstructorById = async (req, res) => {
    const instructorId = req.params['id'];
    try{
        const instructores = await Instructores.getInstructorById(instructorId);
        res.json({instructores});
    }catch(error)
    {
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const ActualizarInstructor = async (req, res) => {
    const instructorId = req.params['id'];
    const {usuario_id, biografia, foto_perfil} = req.body; 
    try{
        const instructores = await Instructores.actualizarInstructor(instructorId, { biografia, foto_perfil});
        res.json({instructores});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const EliminarInstructor = async (req, res) => {
    const instructorId = req.params['id'];
    try{
        const instructor = await Instructores.eliminarInstructor(instructorId);
        res.json({instructor});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarInstructores = async (req, res) => {
    try{
        const instructores = await Instructores.mostrarInstructores();
        res.json({instructores});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarInstructoresByUsuarioId = async (req, res) => {
    const usuarioId = req.params['usuario_id'];
    try{
        const instructores = await Instructores.getInstructorByUsuarioId(usuarioId);
        res.json({instructores});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

module.exports = {CrearInstructor, VerInstructorById, ActualizarInstructor, EliminarInstructor, MostrarInstructores, MostrarInstructoresByUsuarioId};