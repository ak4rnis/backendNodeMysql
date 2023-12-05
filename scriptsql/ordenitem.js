const db = require("../connect");

const crearOrdenItem = async ({orden_id, curso_id, cantidad, precio_unitario}) => {
    const [rows] = await db.execute('INSERT INTO orden_items (orden_id, curso_id, cantidad, precio_unitario) VALUES (?, ?, ?, ?)', [orden_id, curso_id, cantidad, precio_unitario]);
    return rows;
}

const getOrdenItemById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM orden_items WHERE id = ?', [id]);
    return rows[0];
};

const actualizarOrdenItemById = async (id, {orden_id, curso_id, cantidad, precio_unitario}) => {
    const [rows] = await db.execute('UPDATE orden_items SET orden_id = ?, curso_id = ?, cantidad = ?, precio_unitario = ? WHERE id = ?', [orden_id, curso_id, cantidad, precio_unitario, id]);
    return rows;
};

const eliminarOrdenItem = async (id) => {
    const [rows] = await db.execute('DELETE FROM orden_items WHERE id = ?', [id]);
    return rows;
};

const mostrarOrdenItems = async () => {
    const [rows] = await db.execute('SELECT * FROM orden_items');
    return rows;
};

const getOrdenItemByOrdenId = async (orden_id) => {
    const [rows] = await db.execute('SELECT * FROM orden_items WHERE orden_id = ?', [orden_id]);
    return rows;
}

const getOrdenItemByCursoId = async (curso_id) => {
    const [rows] = await db.execute('SELECT * FROM orden_items WHERE curso_id = ?', [curso_id]);
    return rows;
}

module.exports = {crearOrdenItem, getOrdenItemById, actualizarOrdenItemById, eliminarOrdenItem, mostrarOrdenItems, getOrdenItemByOrdenId, getOrdenItemByCursoId};
 
