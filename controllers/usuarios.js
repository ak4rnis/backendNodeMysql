const Usuario = require("../scriptsql/usuario");
const {hashPassword, comparePassword} = require("../helpers/bcryptHelper");

const CrearUsuario = async (req, res) => {
    const {nombre, correo, contrasena, avatar, rol_usuario} = req.body;
    try{
        const hashedPassword = await hashPassword(contrasena);
        const usuario = await Usuario.crearUsuario({nombre, correo, contrasena: hashedPassword, avatar, rol_usuario});
        res.json({usuario});
    }catch(error){
        res.status(500).json({message: 'Error al crear al usuario', error: error.message});
    }
}

const VerUsuarioPorId = async (req,res) => {
    const idUsuario = req.params['id'];
    try{
        const usuario = await Usuario.getUsuarioById(idUsuario);
        res.json({usuario});
    }catch(error){
        res.status(500).json({message: 'Error al crear al usuario', error: error.message});
    }
}

const ActualizarUsuario = async (req,res) => {
    const idUsuario = req.params['id'];
    const {nombre, correo, contrasena, avatar, rol_usuario} = req.body;

    try{
       const hashedPassword = await hashPassword(contrasena);
       const user = await Usuario.actualizarUsuario(idUsuario, {nombre, correo, avatar, rol_usuario, contrasena: hashedPassword});
       res.json({user}); 
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const EliminarUsuario = async (req,res) => {
    const idUsuario = req.params['id'];
    try{
        const user = await Usuario.eliminarUsuario(idUsuario);
        res.json({user});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarUsuarios = async (req,res) => {
    try{
        const usuarios = await Usuario.mostrarTodosLosUsuarios();
        res.json({usuarios});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}



module.exports = {CrearUsuario, MostrarUsuarios, VerUsuarioPorId, ActualizarUsuario, EliminarUsuario};