const Cursos = require("../scriptsql/curso");

const CrearCurso = async (req, res) => {
    const {titulo, descripcion, instructor_id, categoria_id, precio, nivel, imagen} = req.body;
    try{
        const curso = await Cursos.crearCurso({titulo, descripcion, instructor_id, categoria_id, precio, nivel, imagen})
        res.json({curso});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const VerCursoById = async (req, res) => {
    const cursId = req.params['id'];
    try{
        const curso = await Cursos.getCursoById(cursId);
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const ActualizarCurso = async (req, res) => {
    const cursoId = req.params['id'];
    const {titulo, descripcion, instructor_id, categoria_id, precio, nivel, imagen} = req.body;
    try{
        const curso = await Cursos.actualizarCurso(cursoId, {titulo, descripcion, instructor_id, categoria_id, precio, nivel, imagen});
        res.json({curso});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const EliminarCurso = async (req, res) => {
    const cursoId = req.params['id'];
    try{
        const curso = await Cursos.eliminarCurso(cursoId);
        res.json({curso});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarCursos = async (req, res) => {
    try{
        const cursos = await Cursos.mostrarCursos();
        res.json(cursos);
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarCursoByInstructorId = async (req, res) => {
    const instructorId = req.params['instructor_id'];
    try{
        const curso = await Cursos.getCursoByInstructorId(instructorId);
        res.json({curso});
    }catch(error)
    {
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarCursoByCategoriaId = async (req, res) => {
    const categoriaId = req.params['categoria_id'];
    try{
        const curso = await Cursos.getCursoByCategoriaId(categoriaId);
        res.json({curso});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

module.exports = {
    CrearCurso,
    VerCursoById,
    ActualizarCurso,
    EliminarCurso,
    MostrarCursos,
    MostrarCursoByInstructorId,
    MostrarCursoByCategoriaId,
}