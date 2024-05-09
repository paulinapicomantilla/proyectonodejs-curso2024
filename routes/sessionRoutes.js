//Importamos express y creamos el router

const express=require("express"); // Importamos express
const router=express.Router(); //   Creamos el router

//Importamos el controlador de sessionRouter

const sessionController =require("../controllers/sessionController"); //   Importamos el controlador de sessionRouter
const verifyToken = require("../middleware/verifyToken"); // Importamos el middleware verifyToken

//Ruta protegida para obtener información sobre el usuario que inicio sesion

router.get("/currentUser", verifyToken, sessionController.getCurrentUser);//ruta protegida para obtener información del usuario que esta conectado actualmente que inicio  sesion

module.exports=router; //exportamos el router   


