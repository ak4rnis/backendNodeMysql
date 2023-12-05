const Carrito = require("../scriptsql/carrito");
const CarritoItem = require("../scriptsql/carritoitem");
const Curso = require("../scriptsql/curso");

const CrearCarrito = async (req, res) => {
    const {usuario_id, total} = req.body;
    try{
        const carrito = await Carrito.crearCarrito({usuario_id: req.user, total});
        res.json({carrito});
    }catch(error){
        res.status(500).json({ message: 'Error de servidor' });
    }
}

const VerCarritoPorId = async (req, res) => {
    const idCarrito = req.params['id'];
    try{
        const carrito = await Carrito.getCarritoById(idCarrito);
        res.json({carrito});
    }catch(error){
        res.status(500).json({ message: 'Error de servidor' });
    }
}

const ActualizarCarrito = async (req, res) => {
    const idCarrito = req.params['id'];
    const {usuario_id, total} = req.body;
    try{
        const carrito = await Carrito.actualizarCarrito(idCarrito, {usuario_id: req.user , total});
        res.json({carrito});
    }catch(error){
        res.status(500).json({ message: 'Error de servidor' });
    }
}

const EliminarCarrito = async (req, res) => {
    const idCarrito = req.params['id'];
    try{
        const carrito = await Carrito.eliminarCarrito(idCarrito);
        res.json({carrito});
    }catch(error){
        res.status(500).json({ message: 'Error de servidor' });
    }
}

const MostrarCarritoPorUsuarioId = async (req, res) => {
    const idUsuario = req.params['id_usuario'];
    try{
        const carrito = await Carrito.getCarritoByUserId(idUsuario);
        res.json({carrito});
    }catch(error){
        res.status(500).json({ message: 'Error de servidor' });
    }
}

const CrearCarritoItem = async (req, res) => {
    const { carrito_id, curso_id } = req.body;
    try {
        

        // Obtener información del curso
        const curso = await Curso.getCursoById(curso_id);
        if (!curso) {
            return res.status(404).json({ message: 'Curso no encontrado' });
        }

        // Crear el carrito item con cantidad 1 y el monto del curso
        const cantidad = 1;
        const monto = curso.precio;
        await CarritoItem.crearCarritoItem({ carrito_id, curso_id, cantidad, monto });

        // Obtener el carrito actual
        const carritoActual = await Carrito.getCarritoById(carrito_id);
        if (!carritoActual) {
            return res.status(404).json({ message: 'Carrito no encontrado' });
        }

        // Actualizar el monto total del carrito
        const monto_actualizado = carritoActual.total + monto;
        await Carrito.actualizarCarrito(carrito_id, {usuario_id: req.user, total: monto_actualizado });

        // Responder con éxito
        res.status(200).json({ message: "Item del carrito agregado exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error de servidor' });
    }
};

const EliminarCarritoItem = async (req, res) => {
    const idCarritoItem = req.params['id'];
    try{
        const carritoeliminado = await CarritoItem.getCarritoItemById(idCarritoItem);
        const montoeliminado = carritoeliminado.monto;
        const idcarritoeliminado = carritoeliminado.carrito_id;
        const carrito = await Carrito.getCarritoById(idcarritoeliminado);
        if(carrito.total <= 1){
            return res.status(404).json({ message: 'Total de carrito nulo' });
        }
        const totalrestado = carrito.total - montoeliminado;
        await Carrito.actualizarCarrito(idcarritoeliminado, {usuario_id: req.user, total: totalrestado});
        const carritoitem = await CarritoItem.eliminarCarritoItem(idCarritoItem);
        res.json({carritoitem});


    }catch(error){
        res.status(500).json({ message: 'Error de servidor' });
    }
}

const VerCarritoItemPorUsuarioId = async (req, res) => {
    const idCarrito = req.params['id'];
    try{
        const carritoitem = await CarritoItem.mostrarCarritoItemsByCarritoId(idCarrito);
        res.json({carritoitem});
    }catch(error){
        res.status(500).json({ message: 'Error de servidor' });
    }
}

module.exports = {CrearCarrito, ActualizarCarrito, VerCarritoPorId, EliminarCarrito, CrearCarritoItem, EliminarCarritoItem, VerCarritoItemPorUsuarioId, MostrarCarritoPorUsuarioId}