const db = require("../connect");

const crearRespuestaComentario = async ({usuario_id, comentario_id, texto}) => {
    const [rows] = await db.execute('INSERT INTO respuestas_comentarios (usuario_id, comentario_id, texto ) VALUES (?, ?, ?)', [usuario_id, comentario_id, texto]);
    return rows;
};

const getRespuestaComentarioById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM respuestas_comentarios WHERE id = ?', [id]);
    return rows[0];
};

const actualizarRespuestaComentario = async (id, {usuario_id, comentario_id, texto}) => {
    const [rows] = await db.execute('UPDATE respuestas_comentarios SET usuario_id = ?, comentario_id = ?, texto = ? WHERE id = ?', [usuario_id, comentario_id, texto, id]);
    return rows;
}

const eliminarRespuestaComentario = async (id) => {
    const [rows] = await db.execute('DELETE FROM respuestas_comentarios WHERE id = ? ', id);
    return rows;
}

const mostrarTodosLasRespuestasComentarios = async () => {
    const [rows] = await db.execute("SELECT * FROM respuestas_comentarios");
    return rows;
}

const getRespuestaComentarioByUsuarioId = async(usuario_id) => {
    const [rows] = await db.execute('SELECT * FROM respesutas_comentarios WHERE usuariod_id = ?', [usuario_id]);
    return rows;
}

const getRespuestaComentarioByComentarioId = async(comentario_id) => {
    const [rows] = await db.execute('SELECT * FROM respesutas_comentarios WHERE comentario_id = ?', [comentario_id]);
    return rows;
}

module.exports = {crearRespuestaComentario, getRespuestaComentarioById, actualizarRespuestaComentario, eliminarRespuestaComentario, mostrarTodosLasRespuestasComentarios, getRespuestaComentarioByComentarioId, getRespuestaComentarioByUsuarioId};

