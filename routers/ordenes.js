const express = require("express");
const { CrearOrden, VerOrdenById, ActualizarOrden, EliminarOrden, MostrarOrden, MostrarOrdenByUsuarioId } = require("../controllers/ordenes");
const router = express.Router();

router.post("/crear_orden", CrearOrden);
router.get("/ver_orden_por_id/:id", VerOrdenById);
router.put("/actualizar_orden/:id", ActualizarOrden);
router.delete("/eliminar_orden/:id", EliminarOrden);
router.get("/mostrar_ordenes", MostrarOrden);
router.get("/mostrar_ordenes_por_usuario/:usuario_id", MostrarOrdenByUsuarioId);

module.exports = router;