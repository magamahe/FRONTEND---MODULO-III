const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "El nombre del producto es obligatorio"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "La descripción es obligatoria"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "El precio es obligatorio"],
    min: [0, "El precio no puede ser negativo"],
  },
  stock: {
    type: Number,
    required: [true, "El stock es obligatorio"],
    min: [0, "El stock no puede ser negativo"],
    default: 0,
  },
  category: {
    type: String,
    required: [true, "La categoría es obligatoria"],
    trim: true,
  },
  brand: {
    type: String,
    required: [true, "La marca del producto es obligatoria"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
