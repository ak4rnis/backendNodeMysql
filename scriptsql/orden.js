const db = require("../connect");

const crearOrden = async ({usuario_id, total}) => {
    const [rows] = await db.execute('INSERT INTO ordenes (usuario_id, total) VALUES (?, ?)', [usuario_id, total]);
    return rows;
}

const getOrdenById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM ordenes WHERE id = ?', [id]);
    return rows[0];
};

const actualizarOrden = async (id, {usuario_id, total}) => {
    const [rows] = await db.execute('UPDATE ordenes SET usuario_id = ?, total = ? WHERE id = ?', [usuario_id, total, id]);
    return rows;
}

const eliminarOrden = async (id) => {
    const [rows] = await db.execute('DELETE FROM ordenes id = ?', [id]);
    return rows;
}

const mostrarOrdenes = async() => {
    const [rows] = await db.execute('SELECT * FROM ordenes');
    return rows;
};

const getOrdenByUsuarioId = async (usuario_id) => {
    const [rows] = await db.execute('SELECT * FROM ordenes WHERE usuario_id = ?', [usuario_id]);
    return rows;
}



module.exports = {crearOrden, getOrdenById, actualizarOrden, eliminarOrden, mostrarOrdenes, getOrdenByUsuarioId};