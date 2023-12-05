const db = require("../connect");

const crearCarrito = async ({usuario_id, total}) => {
    const [rows] = await db.execute('INSERT INTO carritos (usuario_id, total) VALUES (?, ?)', [usuario_id, total]);
    return rows;
}

const getCarritoById = async(id) => {
    const [rows] = await db.execute('SELECT * FROM carritos WHERE id = ?', [id]);
    return rows[0];
}

const actualizarCarrito = async (id, {usuario_id, total}) => {
    const [rows] = await db.execute('UPDATE carritos SET usuario_id = ?, total = ? WHERE id = ?', [usuario_id, total,  id]);
    return rows;
}

const eliminarCarrito = async (id) => {
    const [rows] = await db.execute('DELETE FROM carritos WHERE id = ?', [id]);
    return rows;
}

const mostrarCarritos = async () => {
    const [rows] = await db.execute('SELECT * FROM carritos');
    return rows;
}

const getCarritoByUserId = async (usuario_id) => {
    const [rows] = await db.execute('SELECT * FROM carrito WHERE usuario_id = ?', [usuario_id]);
    return rows;
}

module.exports = {crearCarrito, getCarritoById, actualizarCarrito, eliminarCarrito, getCarritoByUserId, mostrarCarritos};