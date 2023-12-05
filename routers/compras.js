const express = require("express");
const { CrearCompra, VerCompraById, ActualizarCompra, EliminarCompra, MostrarCompras, MostrarComprasByUsuarioId, MostrarComprasByCursoId } = require("../controllers/compras");
const router = express.Router();

router.post("/crear_compra", CrearCompra);
router.get("/ver_compra_por_id/:id", VerCompraById);
router.put("/actualizar_compra/:id", ActualizarCompra);
router.delete("/eliminar_compra/:id", EliminarCompra);
router.get("/mostrar_compras", MostrarCompras);
router.get("/mostrar_compras_por_usuario/:usuario_id", MostrarComprasByUsuarioId);
router.get("/mostrar_compras_por_curso/:curso_id", MostrarComprasByCursoId);

module.exports = router;