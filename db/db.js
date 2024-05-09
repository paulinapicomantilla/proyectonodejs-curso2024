//Importamos Mongoose para crear la conexión a la base de datos de mongoDB

const mongoose = require("mongoose");

//Conectamos la DB utilizando el metodo connect() de mongoose

const mongoDBURL ="mongodb+srv://paulinapico:Curso2024Pico@cluster0.ptp52r7.mongodb.net/proyect";
    

// Funcion para conectarnos a la DB
function connectDB() {
  return new Promise((res, rej) => {
    // Conectar a la base de datos usando la URL proporcioanada
    mongoose
      .connect(mongoDBURL) // Conectar a la base de datos usando la URL proporcioanada
      .then(() => { // Si la conexion es exitosa imprimir un mensaje
        console.log("Conexion a la DB establecida correctamente");
        // Si la conexion es exitosa resolvemos la promesa-
        res();
      })
      .catch((err) => { // Si hay un error al conectar, imprimir el error y rechazar la promesa
        // Si hay un error al conectar, imprimir el error y rechazar la promesa
        console.error("Error al conectar a la DB ", err); //  Si hay un error al conectar, imprimir el error y rechazar la promesa    
        rej(err); //  Si hay un error al conectar, imprimir el error y rechazar la promesa
      });
  });
}
//Exportamos la funcion de la conexion a la base de datos para poder utilizarla en el app.js
module.exports = connectDB;