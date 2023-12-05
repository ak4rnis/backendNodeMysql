const {hashPassword, comparePassword} = require("../helpers/bcryptHelper");
const {generateToken} = require("../helpers/jwtHelper");
const Usuario = require("../scriptsql/usuario");


const registrarUsuario = async (req,res) => {
    const {nombre, correo, contrasena, avatar, rol_usuario} = req.body;
    try{
        const correouser = await Usuario.getUsuarioByCorreo(correo);
        if(correouser){
            return res.status(401).json({ message: 'Ya existe ese Usuario'});
        }
        const hashedPassword = await hashPassword(contrasena);
        const usuarionuevo = await Usuario.crearUsuario({nombre, correo, contrasena: hashedPassword, avatar: "vacio", rol_usuario: "cliente"});
        res.status(201).json({usuarionuevo});
    }catch(error){
        res.status(500).json({message: 'Error al crear al usuario', error: error.message});
    }
};

const loginUsuario = async (req, res) => {
    const {correo, contrasena} = req.body;
    try{
        const correouser = await Usuario.getUsuarioByCorreo(correo);
        if(!correouser){
            return res.status(401).json({ message: 'Correo de usuario incorrecto'});
        }
        const match = await comparePassword(contrasena, correouser.contrasena);
        if(!match){
            return res.status(401).json({message: 'Contraseña de usuario incorrecto'});
        }
        const token = generateToken({id: correouser.id, nombre: correouser.nombre, correo: correouser.correo, avatar: correouser.avatar, rol_usuario: correouser.rol_usuario});
        res.json({"token": token, "usuario": correouser});
    }catch(error){
        res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
    }

};

const getUsuarioAutenticado = async (req,res) => {
    const usuarioId = req.user.id;
    try{
        const user = await Usuario.getUsuarioById(usuarioId);
        if(!user){
            return res.status(404).json({message: 'Usuario no encontrado'});
        }

        res.json({user});
    }catch(error){
        res.status(500).json({message: 'Error al obtener el perfil de usuario', error: error.message});
    }
    
};




module.exports = {getUsuarioAutenticado, loginUsuario, registrarUsuario}



