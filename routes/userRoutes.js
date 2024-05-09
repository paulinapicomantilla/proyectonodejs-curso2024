

const express=require("express") // Importamos express
const router=express.Router() // Creamos un router de express



const userController=require('../controllers/userController')   //  Importamos el controlador userController

//definir las rutas para CRUD (Crear, Leer, Actualizar y Eliminar) de usuarios

router.get('/',userController.getAllUsers) // Definimos la ruta para obtener todos los usuarios
router.post('/',userController.createUser) //   Definimos la ruta para crear un usuario            
router.put('/:id',userController.updatedUser) // Definimos la ruta para actualizar un usuario
router.delete('/:id',userController.deleteUser) //  Definimos la ruta para eliminar un usuario


module.exports=router // Exportamos el router para poder utilizarlo en otras partes de la aplicación