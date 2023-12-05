const express = require("express");
const { RealizarPagoStripe } = require("../controllers/pagos_stripes");
const router = express.Router();

router.post("/realizar_pago_stripe", RealizarPagoStripe);

module.exports = router;