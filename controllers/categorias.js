const Categoria = require("../scriptsql/categoria");

const CrearCategoria = async (req, res) => {
    const {nombre} = req.body;
    try{
        const categoria = await Categoria.crearCategoria({nombre});
        res.json({nombre});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const VerCategoriaPorId = async (req, res) => {
    const categoriaId = req.params['id'];
    try{
        const categoria = await Categoria.getCategoriaById(categoriaId);
        res.json({categoria});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const ActualizarCategoria = async (req, res) => {
    const categoriaId = req.params['id'];
    const {nombre} = req.body;
    try{
        const categoria = await Categoria.actualizarCategoria(categoriaId, {nombre});
        res.json({categoria});
    }catch(error){
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const EliminarCategoria = async (req, res) => {
    const categoriaId = req.params['id'];
    try{
        const categoria = await Categoria.eliminarCategoria(categoriaId);
        res.json({categoria});
    }catch(error)
    {
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
}

const MostrarCategorias = async (req, res) => {
    try{
        const categoria = await Categoria.mostrarCategorias();
        res.json({categoria});
    }catch(error)
    {
        res.status(500).json({message: 'Error en el Servidor', error: error.message});
    }
};

module.exports = {CrearCategoria, ActualizarCategoria, VerCategoriaPorId, EliminarCategoria, MostrarCategorias}