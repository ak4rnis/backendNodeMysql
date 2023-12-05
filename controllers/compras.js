const Compras = require("../scriptsql/compra");

const CrearCompra = async (req, res) => {
    const {usuario_id, curso_id} = req.body;
    try{
        const compra = await Compras.crearCompra({usuario_id, curso_id});
        res.json({compra});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const VerCompraById = async (req, res ) => {
    const compraId = req.params['id'];
    try{
        const compra = await Compras.getCompraById(compraId);
        res.json({compra});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const ActualizarCompra = async (req, res) => {
    const compraId = req.params['id'];
    const {usuario_id, curso_id} = req.body;
    try{
        const compra = await Compras.actualizarCompra(compraId, {usuario_id, curso_id});
        res.json({compra});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const EliminarCompra = async (req, res) => {
    const compraId = req.params['id'];
    try{
        const compra = await Compras.eliminarCompra(compraId);
        res.json({compra});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarCompras = async (req, res) => {
    try{
        const compra = await Compras.mostrarCompras();
        res.json({compra});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarComprasByUsuarioId = async (req, res) => {
    const usuarioId = req.params['usuario_id'];
    try{
        const compra = await Compras.getCompraByUsuarioId(usuarioId);
        res.json({compra});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarComprasByCursoId = async (req, res) => {
    const cursoId = req.params['curso_id'];
    try{
        const compra = await Compras.getCompraByCursoId(cursoId);
        res.json({compra});
    }catch(error)
    {
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

module.exports = {
    CrearCompra,
    VerCompraById,
    ActualizarCompra,
    EliminarCompra,
    MostrarCompras,
    MostrarComprasByCursoId,
    MostrarComprasByUsuarioId,
}