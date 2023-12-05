const express = require("express");
const { CrearCarrito, VerCarritoPorId, ActualizarCarrito, EliminarCarrito, MostrarCarritoPorUsuarioId, CrearCarritoItem, EliminarCarritoItem, VerCarritoItemPorUsuarioId } = require("../controllers/carritos");
const router = express.Router();

router.post("/crear_carrito", CrearCarrito);
router.get("/ver_carrito_por_id/:id", VerCarritoPorId);
router.put("/actualizar_carrito/:id", ActualizarCarrito);
router.delete("eliminar_carrito/:id", EliminarCarrito);
router.get("mostrar_carrito_por_usuario/:id_usuario", MostrarCarritoPorUsuarioId);
router.post("/crear_carritoitem", CrearCarritoItem);
router.delete("/eliminar_carritoitem/:id", EliminarCarritoItem);
router.get("/mostrar_carritoitems_por_carrito/:id", VerCarritoItemPorUsuarioId);

module.exports = router;
