const db = require("../connect");

const crearPagoStripe = async ({orden_id, monto, transaccion_id}) => {
    const [rows] = await db.execute('INSERT INTO pagos_stripe (orden_id, monto, transaccion_id) VALUES (?, ?, ?)', [orden_id,monto, transaccion_id]);
    return rows;
}

const getPagoStripeById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM pagos_stripe WHERE id = ?', [id]);
    return rows[0];
}

const actualizarPagoStripe = async (id, {orden_id, monto, transaccion_id}) => {
    const [rows] = await db.execute('UPDATE pagos_stripe SET orden_id = ?, monto = ?, transaccion_id = ? WHERE id = ?', [orden_id, monto, transaccion_id, id]);
    return rows;
} 

const eliminarPagoStripe = async (id) => {
    const [rows] = await db.execute('DELETE FROM pagos_stripe WHERE id = ?', [id]);
    return rows;
}

const mostrarTodosLosPagosStripe = async () => {
    const [rows] = await db.execute('SELECT * FROM pagos_stripe');
    return rows;
};

module.exports = {crearPagoStripe, getPagoStripeById, actualizarPagoStripe, eliminarPagoStripe, mostrarTodosLosPagosStripe};