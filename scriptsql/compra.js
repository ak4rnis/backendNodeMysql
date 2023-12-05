const db = require("../connect");

const crearCompra = async ({usuario_id, curso_id}) => {
    const [rows] = await db.execute('INSERT INTO compras (usuario_id, curso_id) VALUES (?, ?)', [usuario_id, curso_id]);
    return rows;
};

const getCompraById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM compras WHERE id = ?', [id]);
    return rows[0];
}

const actualizarCompra = async (id, {usuario_id, curso_id}) => {
    const [rows] = await db.execute('UPDATE compras SET usuario_id = ?, curso_id = ? WHERE id = ? ', [usuario_id, curso_id, id]);
    return rows;
}

const eliminarCompra = async (id) => {
    const [rows] = await db.execute('DELETE FROM compras WHERE id = ?', [id]);
    return rows;
}

const mostrarCompras = async () => {
    const [rows] = await db.execute('SELECT * FROM compras');
    return rows;
};

const getCompraByUsuarioId = async(usuario_id) => {
    const [rows] = await db.execute('SELECT * FROM compras WHERE usuario_id = ?', [usuario_id]);
    return rows;
}

const getCompraByCursoId = async (curso_id) => {
    const [rows] = await db.execute('SELECT * FROM compras WHERE curso_id = ?', [curso_id]);
    return rows;
}

module.exports = {crearCompra, getCompraById, actualizarCompra, eliminarCompra, mostrarCompras, getCompraByCursoId, getCompraByUsuarioId};