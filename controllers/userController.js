

const User=require('../models/User'); // Importamos el modelo User de la carpeta models


// Función para obtener todos los usuarios
function getAllUsers(req, res) { // Definimos la función getAllUsers que recibe dos parámetros, req y res
    // Utilizamos el método find() de Mongoose para encontrar todos los usuarios
  
    User.find() //  Utilizamos el método find() de Mongoose para encontrar todos los usuarios
      .then(users => res.status(200).json(users)) // Enviamos la lista de usuarios en formato JSON como respuesta
      .catch(err => { // En caso de error, enviamos un mensaje de error al cliente
        console.error(err); // En caso de error, enviamos un mensaje de error al cliente
        res.status(500).send("Error al obtener usuarios"); // En caso de error, enviamos un mensaje de error al cliente
      });
  }


//*********************500 error del lado del servidor */
    function createUser(req,res){ // Definimos la función createUser que recibe dos parámetros, req y res
   
   
        const {nombre,edad,email,contraseña}=req.body; // Obtenemos los datos del body de la req - cuerpo de la solicitud


    
    User.create({nombre, edad, email, contraseña}) // Utilizamos el metodo create() de Mongoose para crear un nuevo usuario, porque campos tienen el mismo nombre
    .then((newUser)=>res.status(201).json(newUser)) // Enviamos el nuevo usuario creado como respuesta como en formato JSON
    .catch((error)=>{ // En caso de error, enviamos un mensaje de error al cliente
        console.error(error);// En caso de error, enviamos un mensaje de error al cliente
        res.status(500).send("Error al crear el usuario");   // En caso de error, enviamos un mensaje de error al cliente     
    });
}   

//Funcion para  actualizar un usuario

function updatedUser(req, res) { // Definimos la función updatedUser que recibe dos parámetros, req y res
    // Obtenemos el id del usuario a actualizar.
    const userId = req.params.id;
   
    // Obtenemos los datos actualizados del body de la req
    const updatedUser = req.body;
    
    // Utilizamos el metodo findByIdAndUpdate() de Mongoose para buscar y actualizar el usuario por ID.
   
    User.findByIdAndUpdate(userId, updatedUser, { new: true }) // Los 3 parametors del metodo son = El Primero cual es el usuario a actualizar, el segundo seria los datos a actualizar, y el tercero hace referencia a que sea actualizado como nuevo
      .then((user) => res.status(200).json(user)) // Enviamos el usuario actualizado como respuesta
      .catch((err) => { // En caso de tener error que envie un mensaje al cliente.
        console.error(err); // En caso de tener error que envie un mensaje al cliente.
        res.status(500).send("Error al actualizar el usuario"); // En caso de tener error que envie un mensaje al cliente.
      });
  }


  // Funcion para eliminar un usuario

  function deleteUser(req,res){
    // Obtenemos el id del usuario a actualizar.
  const userId = req.params.id; // Obtenemos el id del usuario a actualizar utilizando req.params.id el params.id puede cambiar si lo deseo pero en routes tambien le cambio

    // Utilizamos el metodo findByIdAndDelete() de Mongoose para buscar y eliminar un usuario por ID.
    
    User.findByIdAndDelete(userId) // Utilizamos el metodo findByIdAndDelete() de Mongoose para buscar y eliminar un usuario por ID.
    .then(()=> res.status(204).send("Usuario eliminado correctamente")) // Envaimos una confirmacoin al cliente de que el usuario se elimino correctamente
    .catch((err) => {// En caso de tener error que envie un mensaje al cliente.
        console.error(err); // En caso de tener error que envie un mensaje al cliente.
        res.status(500).send("Error al eliminar el usuario"); // En caso de tener error que envie un mensaje al cliente.
      });
    
}
    
 //exportamos las funciones para poder utilizarlas en otras partes de la aplicación -todas las funciones - todos los controladores
module.exports={    
    getAllUsers, // Exportamos la función getAllUsers
    createUser, // Exportamos la función createUser
    updatedUser, // Exportamos la función updatedUser
    deleteUser //   Exportamos la función deleteUser            
};