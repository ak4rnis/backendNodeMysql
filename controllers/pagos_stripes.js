const stripe = require('stripe')("sk_test_51I5bKBFSjx3I7ZtFpMxrKvCDT8WoIRt6D30dGbPS6CibRFkojHF4B3n8fIPZ7QrznBwd6UdNmUJgBGQUe6yQFyWY0010eZtFZ1");
const PagoStripe = require("../scriptsql/pago_stripe");
const Orden = require("../scriptsql/orden");

const RealizarPagoStripe = async (req, res) => {
    const { orden_id } = req.body;

    try {
        const order = await Orden.getOrdenById(orden_id);
        const monto = order.total;

        // Realizar el pago con Stripe
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(monto * 100), // Convertir a centavos
            currency: 'usd',
            payment_method_types: ['card'],
        });

        const transaccion_id = paymentIntent.id;

        // Crear registro en la base de datos para la transacción
        await PagoStripe.crearPagoStripe({ orden_id, monto, transaccion_id });

        // Devolver información del pago a la aplicación cliente
        res.json({
            paymentIntentId: paymentIntent.id,
            clientSecret: paymentIntent.clientSecret,
            stripeApikey: "pk_test_51I5bKBFSjx3I7ZtF9upa4vVQknArl3AbxB16a62kYLC3LoN8BLHUagScDeK0Ar9aKvCcnn6IraBwvX2gh4CpbWmA00ctx43jdq"
        });

    } catch (error) {
        console.error('Error en el servidor:', error);
        res.status(500).json({ message: 'Error en el servidor', error: error.message });
    }
};

module.exports = { RealizarPagoStripe };