const db = require("../connect");

const crearValoracion = async ({usuario_id, curso_id, puntuacion, comentario}) => {
    const [rows] = await db.execute('INSERT INTO valoraciones (usuario_id, curso_id, puntuacion, comentario) VALUES (?, ?, ?, ?) ', [usuario_id, curso_id, puntuacion, comentario]);
    return rows;
}

const actualizarValoracion = async (id, {usuario_id, curso_id, puntuacion, comentario}) => {
    const [rows] = await db.execute('UPDATE valoraciones SET usuario_id = ?, curso_id = ?, puntuacion = ? , comentario = ? WHERE id = ? ', [usuario_id, curso_id, puntuacion, comentario]);
    return rows;
}

const getValoracionById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM valoraciones WHERE id = ?', [id]);
    return rows;
}

const eliminarValoracion = async (id) => {
    const [rows] = await db.execute("DELETE FROM valoraciones WHERE id = ?", [id]);
    return rows;
}

const mostrarValoraciones = async () => {
    const [rows] = await db.execute("SELECT * FROM valoraciones");
    return rows;
}

const getValoracionByUsuarioId = async (usuario_id) => {
    const [rows] = await db.execute('SELECT * FROM valoraciones WHERE usuario_id = ?', [usuario_id]);
    return rows;
}

const getValoracionByCursoId = async (curso_id) => {
    const [rows] = await db.execute('SELECT * FROM valoraciones WHERE curso_id = ?', [curso_id]);
    return rows;
}




module.exports = {crearValoracion, getValoracionById, actualizarValoracion, eliminarValoracion, mostrarValoraciones, getValoracionByCursoId, getValoracionByUsuarioId};