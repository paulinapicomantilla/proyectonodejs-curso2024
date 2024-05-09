// Importamos Mongoose para definir y tener el esquema de usuario y el modelo.

const mongoose = require("mongoose");
const bcryptService = require("../services/bcryptService");

// Definimos el esquema de usuario utilizando el constructor de Mongoose llamado Schema.

const userSchema = new mongoose.Schema({
  nombre: {
    type: String, // El nombre es de tipo String.
    required: true, // El nombre es obligatorio.
  },
  edad: {
    type: Number,//La edad es de tipo Number
    required: true,//  la edad es obligatoria   
  },
  email: {
    type: String, // El correo electronico es de tipo String
    required: true, //    El correo electronico es obligatorio
    unique: true, //El correo electronico tiene que ser Unico
  },
  contraseña: {//La contraseña es de tipo String
    type: String,//   La contraseña es de tipo String      
    required: true, //La contraseña es obligatoria
  },
});

// Antes de guardar un nuevo usuario vamos a hasehar la contraseña.

userSchema.pre("save", function (next) {//Se ejecuta antes de guardar un nuevo usuario
  if (!this.isModified("contraseña")) {//Si la contraseña no ha sido modificada se retorna next
    return next();//  Se retorna next
  }
  bcryptService//   Se llama al servicio bcryptService      
    .hashPassword(this.contraseña)//Se llama a la funcion hashPassword del servicio bcryptService
    .then((hashedPassword) => {//    Se resuelve la promesa  
      this.contraseña = hashedPassword;//Se asigna la contraseña encriptada a la contraseña del usuario
      next()//Se retorna next
    })
    .catch((error) => {   //Se captura el error
      console.error(error);//Se imprime el error
      next(error)//   Se retorna el error
    }); //Se retorna el error
});

// Crear el modelo user utilizando el esquema definido anteriormente

const User = mongoose.model("User", userSchema);//Se crea el modelo User

// Exportamos el modelo User para usarlo en cualquier parte.

module.exports = User;//Se exporta el modelo User