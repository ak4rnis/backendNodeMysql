const db = require("../connect");

const crearCategoria = async ({nombre}) => {
    const [rows] = await db.execute('INSERT INTO categorias (nombre) VALUES (?)', [nombre]);
    return rows;
}

const getCategoriaById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM categorias WHERE id = ?', [id]);
    return rows[0];
}

const actualizarCategoria = async (id, {nombre}) => {
    const [rows] = await db.execute('UPDATE categorias SET nombre = ? WHERE id = ?', [nombre, id]);
    return rows;
}

const eliminarCategoria = async (id) => {
    const [rows] = await db.execute('DELETE FROM categorias WHERE id = ?', [id]);
    return rows;
}

const mostrarCategorias = async () => {
    const [rows] = await db.execute('SELECT * FROM categorias');
    return rows;
};

module.exports = {crearCategoria, getCategoriaById, actualizarCategoria, eliminarCategoria, mostrarCategorias};