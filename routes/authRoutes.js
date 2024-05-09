// importamos express y cramos un router

const express = require("express"); //importamos express
const router = express.Router();//creamos un router

//Importamos el controlador de authRoutes

const authController = require("../controllers/authController");// importamos el controlador de authRoutes

//Importamos el middleware de verifyToken de seguridad  

const verifyToken = require("../middleware/verifyToken");// importamos el middleware de seguridad***************

//Rutas para el Auth del User

router.post("/login", authController.login); //ruta para el login de la sesion


// Ruta para cerrar la sesion
//router.get("/logout", authController.logout);//ruta para el logout es decir cierre de la sesion
router.post("/logout",verifyToken, authController.logout);//ruta para el logout es decir cierre de la sesion

module.exports = router; //exportamos el router