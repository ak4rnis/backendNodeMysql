const db = require("../connect");

const crearSeccion = async ({titulo, url, duracion, curso_id}) => {
    const [rows] = await db.execute('INSERT INTO secciones (titulo, url, duracion, curso_id) VALUES (?, ?, ?, ?)', [titulo, url, duracion, curso_id]);
    return rows;
};

const getSeccionById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM secciones WHERE id = ?',[id]);
    return rows[0];
};

const actualizarSeccion = async (id, {titulo, url, duracion, curso_id}) => {
    const [rows] = await db.execute('UPDATE secciones SET titulo = ?, url = ? , duracion = ?, curso_id = ? WHERE id = ?', [titulo, url, duracion, curso_id, id]);
    return rows;
}

const eliminarSeccion = async (id) => {
    await db.execute('UPDATE curso_seccion SET seccion_id = NULL WHERE seccion_id = ?', [id]);
    const [rows] = await db.execute('DELETE FROM secciones WHERE id = ?', [id]);
    return rows;
};

const mostrarTodosLasSecciones = async () => {
    const [rows] = await db.execute('SELECT * FROM secciones');
    return rows;
};

const getSeccionByCursoId = async (curso_id) => {
    const [rows] = await db.execute('SELECT * FROM secciones WHERE curso_id = ?', [curso_id]);
    return rows;
}



module.exports = {crearSeccion, getSeccionById, actualizarSeccion, eliminarSeccion, mostrarTodosLasSecciones, getSeccionByCursoId};