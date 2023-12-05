const db = require("../connect");

const crearInstructor = async ({usuario_id, biografia, foto_perfil}) => {
    const [rows] = await db.execute('INSERT INTO instructores (usuario_id, biografia, foto_perfil) VALUES (?, ?, ?)', [usuario_id, biografia, foto_perfil]);
    return rows;
}

const getInstructorById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM instructores WHERE id = ?', [id]);
    return rows[0];
}

const actualizarInstructor = async (id, {biografia, foto_perfil}) => {
    const [rows] = await db.execute('UPDATE instructores SET  usuario_id = ?, biografia = ?, foto_perfil = ? WHERE id = ?', [usuario_id, biografia, foto_perfil, id]);
    return rows;
}

const eliminarInstructor = async (id) => {
    const [rows] = await db.execute('DELETE FROM instructores WHERE id = ?', [id]);
    return rows;
};

const mostrarInstructores = async () => {
    const [rows] = await db.execute('SELECT * FROM instructores');
    return rows;
};

const getInstructorByUsuarioId = async (usuario_id) => {
    const [rows] = await db.execute('SELECT * FROM instructores WHERE usuario_id = ?', [usuario_id]);
    return rows[0];
}

module.exports = {crearInstructor, getInstructorById, actualizarInstructor, eliminarInstructor, mostrarInstructores, getInstructorByUsuarioId};