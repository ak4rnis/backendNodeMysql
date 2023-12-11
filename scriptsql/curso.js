const db = require("../connect");

const crearCurso = async ({titulo, descripcion, instructor_id, categoria_id, precio, nivel, imagen}) => {
    const [rows] = await db.execute('INSERT INTO cursos (titulo, descripcion, instructor_id, categoria_id, precio, nivel, imagen) VALUES (?, ?, ?, ?, ? , ?, ?)', [titulo, descripcion, instructor_id, categoria_id, precio, nivel, imagen]);
    return rows;
}


const getCursoById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM cursos WHERE id = ?', [id]);
    return rows[0]
}

const actualizarCurso = async (id, {titulo, descripcion, instructor_id, categoria_id, precio, nivel, imagen}) => {
    const [rows] = await db.execute('UPDATE cursos SET titulo = ?, descripcion = ?, instructor_id = ?, categoria_id = ?, precio = ? , nivel = ?, imagen = ? WHERE id = ?', [titulo, descripcion, instructor_id, categoria_id, precio, nivel, imagen, id]);
    return rows;
}

const eliminarCurso = async (id) => {
    const [rows] = await db.execute('DELETE FROM cursos WHERE id = ?', [id]);
    return rows;
}

const mostrarCursos = async () => {
    const [rows] = await db.execute(`SELECT c.*, cat.nombre AS categoria_nombre, u.nombre AS instructor_nombre
    FROM cursos c
    JOIN categorias cat ON c.categoria_id = cat.id
    JOIN instructores ins ON c.instructor_id = ins.usuario_id
    JOIN usuarios u ON ins.usuario_id = u.id;`);
    return rows;
}

const getCursoByInstructorId = async(instructor_id) => {
    const [rows] = await db.execute('SELECT * FROM cursos WHERE instructo_id = ?', [instructor_id]);
    return rows;
}

const getCursoByCategoriaId = async(categoria_id) => {
    const [rows] = await db.execute('SELECT * FROM cursos WHERE categoria_id = ?', [categoria_id]);
    return rows
}



module.exports = {crearCurso, getCursoById, actualizarCurso, eliminarCurso, mostrarCursos, getCursoByInstructorId, getCursoByCategoriaId};