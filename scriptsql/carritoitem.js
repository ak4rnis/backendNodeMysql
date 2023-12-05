const db = require("../connect");

const crearCarritoItem = async ({carrito_id, curso_id, cantidad, monto}) => {
    const [rows] = await db.execute('INSERT INTO carrito_items (carrito_id, curso_id, cantidad, monto) VALUES (?, ?, ?, ?)', [carrito_id, curso_id, cantidad, monto]);
    return rows;
};

const getCarritoItemById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM carrito_items WHERE id = ?', [id]);
    return rows[0];
};

const actualizarCarritoItem = async (id, {carrito_id, curso_id, cantidad, monto}) => {
    const [rows] = await db.execute('UPDATE carrito_items SET carrito_id = ?, curso_id = ?, cantidad = ?, monto = ? WHERE id = ?', [carrito_id, curso_id, cantidad, monto, id]);
    return rows;
}

const eliminarCarritoItem = async (id) => {
    const [rows] = await db.execute('DELETE FROM carrito_items WHERE id = ?', [id])
    return rows;
}

const mostrarCarritoItemsByCarritoId = async (carrito_id) => {
    const [rows] = await db.execute('SELECT * FROM carrito_items WHERE carrito_id = ?', [carrito_id]);
    return rows;
}

module.exports = {crearCarritoItem, getCarritoItemById, actualizarCarritoItem, eliminarCarritoItem, mostrarCarritoItemsByCarritoId};