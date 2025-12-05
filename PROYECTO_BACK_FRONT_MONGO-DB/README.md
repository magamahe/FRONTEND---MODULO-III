# 👤 Users App (Full Stack)

Una aplicación CRUD completa (Crear, Leer, Actualizar, Eliminar) para la gestión de usuarios, construida con una API RESTful en **Node.js/Express** y un **frontend estático con HTML, Tailwind CSS y JavaScript**.

---

## 🏗️ Arquitectura del Proyecto

Este proyecto está dividido en dos directorios principales:

| Directorio | Tecnología | Descripción |
|-----------|------------|-------------|
| **backend/** | Express, TypeScript, Mongoose (MongoDB) | API RESTful que gestiona la lógica de negocio y la persistencia de datos. |
| **frontend/** | HTML, Tailwind CSS, JavaScript | Interfaz de usuario estática que consume la API a través de peticiones `fetch`. |

---

## ⚙️ Requisitos del Sistema

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión LTS recomendada)
- **npm** (viene con Node.js)
- **MongoDB** (Local o un clúster en la nube como MongoDB Atlas)

---

## 🚀 Guía de Ejecución

Sigue estos pasos para levantar y ejecutar la aplicación completa.

---

### 🟦 Paso 1: Configurar e Iniciar el Backend

El backend gestiona la conexión a la base de datos y la lógica de la API.

1. Navega al directorio del backend:

```bash
cd backend/
