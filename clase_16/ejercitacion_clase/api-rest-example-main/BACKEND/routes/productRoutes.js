const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET - Obtener todos los productos
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener productos",
      error: error.message,
    });
  }
});

// GET - Obtener un producto por ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Producto no encontrado",
      });
    }

    res.json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener producto",
      error: error.message,
    });
  }
});

// POST - Crear un nuevo producto
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      message: "Producto creado exitosamente",
      data: product,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Error de validación",
        error: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message: "Error al crear producto",
      error: error.message,
    });
  }
});

// PUT - Actualizar un producto
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Devolver el documento actualizado
      runValidators: true, // Ejecutar validaciones
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Producto no encontrado",
      });
    }

    res.json({
      success: true,
      message: "Producto actualizado exitosamente",
      data: product,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Error de validación",
        error: error.message,
      });
    }

    res.status(500).json({
      success: false,
      message: "Error al actualizar producto",
      error: error.message,
    });
  }
});

// DELETE - Eliminar un producto
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Producto no encontrado",
      });
    }

    res.json({
      success: true,
      message: "Producto eliminado exitosamente",
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al eliminar producto",
      error: error.message,
    });
  }
});

module.exports = router;
