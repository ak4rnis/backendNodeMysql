const db = require("../connect");

const crearUsuario = async ({nombre, correo, contrasena, avatar, rol_usuario}) => {
    const [rows] = await db.execute('INSERT INTO usuarios (nombre, correo, contrasena, avatar, rol_usuario) VALUES (?, ?, ?, ?, ?)', [nombre, correo, contrasena, avatar, rol_usuario]);
    return rows;
};

const getUsuarioByCorreo = async (correo) => {
    const [rows] = await db.execute('SELECT * FROM usuarios WHERE correo = ?', [correo]);
    return rows[0];
};

const getUsuarioById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM usuarios WHERE id = ?', [id]);
    return rows[0];
};

const actualizarUsuario = async (id, {nombre, correo, avatar, rol_usuario, contrasena}) => {
    const [rows] = await db.execute('UPDATE usuarios SET nombre = ?, correo = ? , avatar = ?, rol_usuario = ?, contrasena = ? WHERE id = ?', [nombre, correo, avatar, rol_usuario, contrasena, id])
    return rows;
}

const eliminarUsuario = async (id) => {
    await db.execute('UPDATE valoraciones SET usuario_id = NULL WHERE usuario_id = ?', [id]);
    await db.execute('UPDATE respuestas_comentarios SET usuario_id = NULL WHERE usuario_id = ?', [id]);
    await db.execute('UPDATE ordenes SET usuario_id = NULL WHERE usuario_id = ?', [id]);
    await db.execute('UPDATE instructores SET usuario_id = NULL WHERE usuario_id = ?', [id]);
    await db.execute('UPDATE compras SET usuario_id = NULL WHERE usuario_id = ?', [id]);
    await db.execute('UPDATE comentarios SET usuario_id = NULL WHERE usuario_id = ?', [id]);
    await db.execute('UPDATE carritos SET usuario_id = NULL WHERE usuario_id = ?', [id]);
    await db.execute('UPDATE valoraciones SET usuario_id = NULL WHERE usuario_id = ?', [id]);
    const [rows] = await db.execute('DELETE FROM usuarios WHERE id = ?', [id]);
    return rows;
};

const mostrarTodosLosUsuarios = async () => {
    const [rows] = await db.execute("SELECT * FROM usuarios");
    return rows;
  };



module.exports = {crearUsuario, getUsuarioByCorreo, getUsuarioById, actualizarUsuario, eliminarUsuario, mostrarTodosLosUsuarios};

