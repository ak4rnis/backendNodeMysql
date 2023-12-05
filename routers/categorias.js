const express = require("express");
const { CrearCategoria, VerCategoriaPorId, ActualizarCategoria, EliminarCategoria, MostrarCategorias } = require("../controllers/categorias");
const router = express.Router();

router.post("/crear_categoria", CrearCategoria);
router.get("/ver_categoria_id/:id", VerCategoriaPorId);
router.put("/actualizar_categoria/:id", ActualizarCategoria);
router.delete("/eliminar_categoria/:id", EliminarCategoria);
router.get("/mostrar_categorias", MostrarCategorias);

module.exports = router;