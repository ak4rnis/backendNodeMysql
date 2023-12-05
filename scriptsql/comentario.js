const db = require("../connect");

const crearComentario = async ({usuario_id, curso_id, texto}) => {
    const [rows] = await db.execute('INSERT INTO comentarios (usuario_id, curso_id, texto) VALUES (?, ?, ?)', [usuario_id, curso_id, texto]);
    return rows;
};

const getComentarioById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM comentarios WHERE id = ?', [id]);
    return rows[0];
}

const actualizarComentario = async (id, {usuario_id, curso_id, texto}) => {
    const [rows] = await db.execute('UPDATE comentarios SET usuario_id = ?, curso_id = ?, texto = ? WHERE id = ?', [usuario_id, curso_id, texto, id]);
    return rows;
};

const eliminarComentario = async (id) => {
    const [rows] = await db.execute('DELETE FROM comentarios WHERE id = ?', [id]);
}

const mostrarComentarios = async () => {
    const [rows] = await db.execute('SELECT * FROM comentarios');
    return rows;
}

const getComentarioByUsuarioId = async(usuario_id) => {
    const [rows] = await db.execute('SELECT * FROM comentarios WHERE usuario_id = ?', [usuario_id]);
    return rows;
}

const getComentarioByCursoId = async (curso_id) => {
    const [rows] = await db.execute('SELECT * FROM comentarios WHERE curso_id = ?', [curso_id]);
    return rows;
}

module.exports = {crearComentario, getComentarioById, actualizarComentario, eliminarComentario, mostrarComentarios, getComentarioByUsuarioId, getComentarioByCursoId};