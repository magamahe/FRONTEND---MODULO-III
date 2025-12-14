# API REST con Node.js, Express y MongoDB

API REST simple para realizar pruebas desde un frontend. Incluye operaciones CRUD para usuarios y productos.

## 🚀 Características

- ✅ Node.js + Express
- ✅ MongoDB con Mongoose
- ✅ Variables de entorno con dotenv
- ✅ CORS habilitado
- ✅ Validación de datos
- ✅ Manejo de errores
- ✅ Schemas para Usuarios y Productos

## 📋 Requisitos Previos

- Node.js (v14 o superior)
- MongoDB instalado localmente o cuenta en MongoDB Atlas

## 🔧 Instalación

1. Clonar o descargar el proyecto (correr el comando en la terminal)

```bash
git clone https://github.com/FrancoLadronDeGuevara/api-rest-example.git
```

2. Moverse a la carpeta del proyecto e instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:
   - Copiar `.env.example` a `.env`
   - Editar `.env` con tu configuración de MongoDB

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/api_rest_db
```

Para MongoDB Atlas (si ya tienes una base de datos creada), usa:

```env
MONGODB_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/nombre_db?retryWrites=true&w=majority
```

Sino usa el MONGODB_URI que pasé al grupo de Whatsapp

## ▶️ Ejecutar el Servidor

### Modo desarrollo (con auto-reinicio):

```bash
npm run dev
```

### Modo producción:

```bash
npm start
```

El servidor estará disponible en: `http://localhost:3000`

## 📚 Endpoints de la API

### Usuarios

#### Obtener todos los usuarios

```http
GET /api/users
```

#### Obtener un usuario por ID

```http
GET /api/users/:id
```

#### Crear un nuevo usuario

```http
POST /api/users
Content-Type: application/json

{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "password": "123456",
  "age": 25
}
```

#### Actualizar un usuario

```http
PUT /api/users/:id
Content-Type: application/json

{
  "name": "Juan Pérez Actualizado",
  "age": 26
}
```

#### Eliminar un usuario

```http
DELETE /api/users/:id
```

---

### Productos

#### Obtener todos los productos

```http
GET /api/products
```

#### Obtener un producto por ID

```http
GET /api/products/:id
```

#### Crear un nuevo producto

```http
POST /api/products
Content-Type: application/json

{
  "name": "Laptop",
  "description": "Laptop de alta gama",
  "price": 1500,
  "stock": 10,
  "category": "Electrónica",
  "brand": "HP"
}
```

#### Actualizar un producto

```http
PUT /api/products/:id
Content-Type: application/json

{
  "price": 1400,
  "stock": 8
}
```

#### Eliminar un producto

```http
DELETE /api/products/:id
```

## 🧪 Probar la API

### Usando curl (Terminal)

```bash
# Crear un usuario
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Ana García","email":"ana@example.com","password":"123456","age":28}'

# Obtener todos los usuarios
curl http://localhost:3000/api/users

# Crear un producto
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Mouse","description":"Mouse inalámbrico","price":25,"stock":50,"category":"Accesorios"}'

# Obtener todos los productos
curl http://localhost:3000/api/products
```

### Usando JavaScript (Frontend)

```javascript
// Crear un usuario
fetch("http://localhost:3000/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "María López",
    email: "maria@example.com",
    password: "123456",
    age: 30,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// Obtener todos los productos
fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

## 📁 Estructura del Proyecto

```
API-Rest/
├── config/
│   └── database.js       # Configuración de MongoDB
├── models/
│   ├── User.js          # Schema de Usuario
│   └── Product.js       # Schema de Producto
├── routes/
│   ├── userRoutes.js    # Rutas de usuarios
│   └── productRoutes.js # Rutas de productos
├── .env                 # Variables de entorno (no subir a git)
├── .env.example         # Ejemplo de variables de entorno
├── .gitignore          # Archivos ignorados por git
├── package.json        # Dependencias del proyecto
├── server.js           # Archivo principal del servidor
└── README.md           # Documentación
```

## 🔒 Schemas

### Usuario

- `name`: String (requerido)
- `email`: String (requerido, único, validación de formato)
- `password`: String (requerido, mínimo 6 caracteres)
- `age`: Number (opcional, no negativo)
- `profileImage`: String (opcional, tiene una url por defecto)
- `createdAt`: Date (automático)
- `updatedAt`: Date (automático)

### Producto

- `name`: String (requerido)
- `description`: String (requerido)
- `price`: Number (requerido, no negativo)
- `stock`: Number (requerido, no negativo)
- `category`: String (requerido)
- `brand`: String (requerido)
- `createdAt`: Date (automático)
- `updatedAt`: Date (automático)

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución
- **Express**: Framework web
- **MongoDB**: Base de datos NoSQL
- **Mongoose**: ODM para MongoDB
- **dotenv**: Manejo de variables de entorno
- **cors**: Permitir peticiones cross-origin
- **nodemon**: Auto-reinicio en desarrollo

## 📝 Notas

- Las contraseñas se almacenan en texto plano (solo para pruebas). En producción, usar bcrypt para hashear.
- CORS está habilitado para todos los orígenes. En producción, configurar orígenes específicos.
- La validación de datos se realiza en el schema de Mongoose.

## 🤝 Contribuir

Este es un proyecto de prueba. Siéntete libre de modificarlo según tus necesidades.
