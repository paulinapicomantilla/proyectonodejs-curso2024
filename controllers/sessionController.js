const User = require("../models/User");// Importamos el modelo User

// Controlador para obtener información sobre el usuario que ha iniciado sesión
function getCurrentUser(req, res) {// Función para obtener información sobre el usuario que ha iniciado sesión
    new Promise((resolve, reject) => { // Retornamos una promesa
      // El middleware de autenticación (verificarToken) ya habrá almacenado el ID de usuario en req.userId
      const userId = req.userId; // Obtenemos el ID de usuario del objeto req
  
      // Busca al usuario en la base de datos utilizando el ID de usuario
      User.findById(userId) // Buscamos al usuario por su ID
        .then(user => { // Si se encuentra al usuario
          // Verifica si se encontró al usuario
          if (!user) { // Si no se encuentra al usuario
            reject({ status: 404, message: 'Usuario no encontrado' });// Retornamos un mensaje de error
          } else { // Si se encuentra al usuario
            resolve(user); // Resolvemos la promesa con la información del usuario
          }
        })
        .catch(error => reject({ status: 500, message: 'Error al obtener información del usuario', error })); // Si ocurre un error, retornamos un mensaje de error
    })
      .then(user => res.json(user)) //  Si se resuelve la promesa, retornamos la información del usuario en formato JSON
      .catch(error => { // Si ocurre un error
        console.error(error); //    Imprimimos el error en consola
        res.status(error.status || 500).json({ message: error.message }); // Retornamos un mensaje de error
      });
  }

module.exports = { // Exportamos el controlador
  getCurrentUser, // Exportamos el controlador para obtener información sobre el usuario que ha iniciado sesión
};
