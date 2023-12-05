const db = require("../connect");

const  crearCursoSeccion = async ({curso_id, seccion_id}) => {
    const [rows] = await db.execute('INSERT INTO curso_seccion (curso_id, seccion_id) VALUES (?, ?)', [curso_id, seccion_id]);
    return rows;
};

const getCursoSeccionById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM curso_seccion WHERE id = ?', [id]);
    return rows[0];
}

const actualizarCursoSeccion = async (id, {curso_id, seccion_id}) => {
    const [rows] = await db.execute('UPDATE curso_seccion SET curso_id = ?, seccion_id = ? WHERE id = ?', [curso_id, seccion_id, id]);
    return rows;
}

const eliminarCursoSeccion = async (id) => {
    const [rows] = await db.execute('DELETE FROM curso_seccion WHERE id = ?', [id]);
    return rows;
}

const mostrarCursoSeccions = async () => {
    const [rows] = await db.execute('SELECT * FROM curso_seccion');
    return rows;
}

const getCursoSeccionByCursoId = async (curso_id) => {
    const [rows] = await db.execute('SELECT * FROM curso_seccion WHERE curso_id = ?', [curso_id]);
    return rows;
}

const getCursoSeccionBySeccionId = async (seccion_id) => {
    const [rows] = await db.execute('SELECT * FROM curso_seccion WHERE seccion_id = ?', [seccion_id]);
    return rows;
}

module.exports = {crearCursoSeccion, getCursoSeccionById, actualizarCursoSeccion, eliminarCursoSeccion, mostrarCursoSeccions, getCursoSeccionByCursoId, getCursoSeccionBySeccionId};