// Importamos express y las rutas de usuario y la conexion a la db.

const express = require("express") // Importamos express
const connectDb = require("./db/db") // Importamos la conexión a la base de datos

// Creamos una instancia de Express.

//Importamos las rutas

const userRoutes = require("./routes/userRoutes") // Importamos las rutas de usuario
const authRoutes = require("./routes/authRoutes") // Importamos las rutas de autenticación
const sessionRoutes = require("./routes/sessionRoutes") // Importamos las rutas de sesión

const app = express() // Creamos una instancia de Express.
const PORT= 3010 // Definimos el puerto en el que correrá nuestro servidor.

// Middleware

app.use(express.json()) // Invocamos al middleware para que parsee los datos del body de las solicitudes en formato JSON.

// Rutas de autenticación

app.use("/api/auth", authRoutes) // Creamos las rutas de autenticación en la ruta /api/auth

// Rutas de usuarios

app.use("/api/users", userRoutes) // Creamos las rutas de usuario en la ruta /api/users

//Rutas de usuario actual

app.use("/api/session", sessionRoutes) // Creamos las rutas de sesión en la ruta /api/session

// Iniciamos la db.

connectDb() //  Iniciamos la db.  
// Inicializamos el servidor y lo ponemos en escucha en el puerto que pusimos arriba.
app.listen(PORT,()=>{ //   Inicializamos el servidor y lo ponemos en escucha en el puerto que pusimos arriba.
    console.log("Servidor corriendo en el puerto: "+ PORT)            
}) 