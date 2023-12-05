const Ordenes = require("../scriptsql/orden");

const CrearOrden = async (req, res) => {
    const {usuario_id, total} = req.body;
    try{
        const orden = await Ordenes.crearOrden({usuario_id, total});
        res.json({orden});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const VerOrdenById = async (req, res) => {
    const ordenId = req.params['id'];
    try{
        const orden = await Ordenes.getOrdenById(ordenId);
        res.json({orden});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const ActualizarOrden = async (req, res) => {
    const ordenId = req.params['id'];
    const {usuario_id, total} = req.body;
    try{
        const orden = await Ordenes.actualizarOrden(ordenId, {usuario_id, total});
        res.json({orden});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const EliminarOrden = async (req, res) => {
    const ordenId = req.params['id'];
    try{
        const orden = await Ordenes.eliminarOrden(ordenId);
        res.json({orden});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarOrden = async (req, res) => {
    try{
        const orden = await Ordenes.mostrarOrdenes();
        res.json({orden});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
} 

const MostrarOrdenByUsuarioId = async (req, res) => {
    const usuarioId = req.params['usuario_id'];
    try{
        const orden = await Ordenes.getOrdenByUsuarioId(usuarioId);
        res.json({orden});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

module.exports = {CrearOrden, VerOrdenById,ActualizarOrden, EliminarOrden, MostrarOrden, MostrarOrdenByUsuarioId};

