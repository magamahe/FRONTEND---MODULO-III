const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/database");

// Importar rutas
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

// Inicializar Express
const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors()); // Permitir peticiones desde cualquier origen
app.use(express.json()); // Parsear JSON en el body
app.use(express.urlencoded({ extended: true })); // Parsear datos de formularios

// Ruta de bienvenida
app.get("/", (req, res) => {
  res.json({
    message: "🚀 API REST con Node.js, Express y MongoDB",
    version: "1.0.0",
    endpoints: {
      users: "/api/users",
      products: "/api/products",
    },
  });
});

// Rutas de la API
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Ruta no encontrada",
  });
});

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
