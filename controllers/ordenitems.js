const OrdenItems = require("../scriptsql/ordenitem");

const CrearOrdenItem = async (req, res) => {
    const {orden_id, curso_id, cantidad, precio_unitario} = req.body;
    try{
        const ordenitems = await OrdenItems.crearOrdenItem({orden_id, curso_id, cantidad, precio_unitario});
        res.json({ordenitems});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const VerOrdenItemById = async (req, res) => {
    const ordenitemId = req.params['id'];
    try{
        const ordenitems = await OrdenItems.getOrdenItemById(ordenitemId);
        res.json({ordenitems});
    }catch(error)
    {
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const ActualizarOrdenItem = async (req, res) => {
    const ordenitemId = req.params['id'];
    const {orden_id, curso_id, cantidad, precio_unitario} = req.body;
    try{
        const ordenitems = await OrdenItems.actualizarOrdenItemById(ordenitemId, {orden_id, curso_id, cantidad, precio_unitario});
        res.json({ordenitems});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const EliminarOrdenItem = async (req, res) => {
    const ordenitemId = req.params['id'];
    try{
        const ordenitems = await OrdenItems.eliminarOrdenItem(ordenitemId);
        res.json({ordenitems});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarOrdenesItems = async (req, res) => {
    try{
        const ordenitems = await OrdenItems.mostrarOrdenItems();
        res.json({ordenitems});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarOrdenesItemsByOrdenId = async (req, res) => {
    const ordenId = req.params['orden_id'];
    try{
        const ordenitems = await OrdenItems.getOrdenItemByOrdenId(ordenId);
        res.json({ordenitems});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarOrdenesItemsByCursoId = async (req, res) => {
    const cursoId = req.params['curso_id'];
    try{
        const ordenitems = await OrdenItems.getOrdenItemByCursoId(cursoId);
        res.json({ordenitems})
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

module.exports = {
    CrearOrdenItem,
    VerOrdenItemById,
    ActualizarOrdenItem,
    EliminarOrdenItem,
    MostrarOrdenesItems,
    MostrarOrdenesItemsByCursoId,
    MostrarOrdenesItemsByOrdenId,
}