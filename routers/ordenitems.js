const express = require("express");
const { CrearOrdenItem, VerOrdenItemById, ActualizarOrdenItem, EliminarOrdenItem, MostrarOrdenesItems, MostrarOrdenesItemsByOrdenId, MostrarOrdenesItemsByCursoId } = require("../controllers/ordenitems");
const router = express.Router();

router.post("/crear_ordenitem", CrearOrdenItem);
router.get("/ver_ordenitem/:id", VerOrdenItemById);
router.put("/actualizar_ordenitem/:id", ActualizarOrdenItem);
router.delete("/eliminar_ordenitem/:id", EliminarOrdenItem);
router.get("/mostrar_ordenitems", MostrarOrdenesItems);
router.get("/mostrar_ordenitems_por_orden/:orden_id", MostrarOrdenesItemsByOrdenId);
router.get("/mostrar_ordenitems_por_curso/:curso_id", MostrarOrdenesItemsByCursoId);

module.exports = router;