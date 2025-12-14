const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET - Obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Excluir contraseña
    res.json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener usuarios",
      error: error.message,
    });
  }
});

// GET - Obtener un usuario por ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado",
      });
    }

    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener usuario",
      error: error.message,
    });
  }
});

// POST - Crear un nuevo usuario
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);

    // No devolver la contraseña
    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(201).json({
      success: true,
      message: "Usuario creado exitosamente",
      data: userResponse,
    });
  } catch (error) {
    // Error de validación o duplicado
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Error de validación",
        error: error.message,
      });
    }

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "El email ya está registrado",
      });
    }

    res.status(500).json({
      success: false,
      message: "Error al crear usuario",
      error: error.message,
    });
  }
});

// PUT - Actualizar un usuario
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Devolver el documento actualizado
      runValidators: true, // Ejecutar validaciones
    }).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado",
      });
    }

    res.json({
      success: true,
      message: "Usuario actualizado exitosamente",
      data: user,
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
      message: "Error al actualizar usuario",
      error: error.message,
    });
  }
});

// DELETE - Eliminar un usuario
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado",
      });
    }

    res.json({
      success: true,
      message: "Usuario eliminado exitosamente",
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al eliminar usuario",
      error: error.message,
    });
  }
});

module.exports = router;
