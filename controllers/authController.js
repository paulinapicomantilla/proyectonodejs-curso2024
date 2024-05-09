const authService=require('../services/authService'); // Importamos el módulo authService
const AuthToken = require('../models/AuthToken'); // Importamos el modelo AuthToken
const bcryptService = require('../services/bcryptService'); // Importamos el módulo bcryptService
const User = require('../models/User'); // Importamos el modelo User

// Controlador para nanejar la Autenticación de Usuarios

function login(req,res){
    const {email, contraseña} = req.body; // Obtenemos el email y la contraseña del cuerpo de la petición
    
    User.findOne({email}) //buscamos el usuario por email
    .then((user)=>{
            if(!user) { // si no existe el usuario
                res.status(401).json({message: "Usuario no encontrado - credenciales invalidas  "}); // Retornamos un mensaje de error
    }

    // si el usuario existe y las credenciales son validas comparar la contraseña ingresada por el usuario con la que esta en base de datos 
    
    bcryptService
    .comparePassword(contraseña, user.contraseña) //comparamos la contraseña ingresada por el usuario con la que esta en la base de datosby
    .then((match)=>{
        if(!match){
            return res.status(401).json({message: "Credenciales invalidas"}); // Retornamos un mensaje de error
        }
        //si las credenciales son validas es decir que las contraseñas que ingreso el usuario coinciden 
        // con la que está en la base de datos, entonces creamos un token de autenticación
    
        const token = authService.generateToken(user); // Generamos un token de autenticación   
        
        // Guardamos el token en la base de datos

            AuthToken.create({userId: user._id, token}) // Creamos un nuevo token de autenticación
            .then(() => {
            res.json({token}); // Retornamos el token en la respuesta
            })
            .catch((error)=>{
                console.error(error); // Si hay un error, lo mostramos en consola)
                res.status(500).json({message: "Error al iniciar sesion"}); // Retornamos un mensaje de error
     });
    })
     .catch((error)=>{
        console.error(error); // Si hay un error, lo mostramos en consola)
        res.status(500).json({message: "Error al iniciar sesion"}); // Retornamos un mensaje de error
    });
})
.catch((error)=>{
console.error(error); // Si hay un error, lo mostramos en consola)
res.status(500).json({message: "Error al iniciar sesion"}); // Retornamos un mensaje de error
});
}

 //Controlador para cerrar la sesion

 function logout(req,res){
    const token = req.headers.authorization.split(" ")[1]; // Obtenemos el token de la cabecera de la petición
    
    //Buscamos el token en la base de datos y lo eliminamos
    AuthToken.findOneAndDelete({token}) // Buscamos el token en la base de datos y lo eliminamos  
    .then(()=>{
        res.status(200).json({message: "Sesion cerrada con exito", token:{token}}); // Retornamos un mensaje de éxito
    })
    .catch((error)=>{
        console.error(error); // Si hay un error, lo mostramos en consola)
        res.status(500).json({message: "Error al iniciar sesion"}); // Retornamos un mensaje de error
    });
}

module.exports = { // Exportamos los controladores de autenticación
    login, // Exportamos el controlador de login
    logout // Exportamos el controlador de logout
} // Exportamos los controladores de autenticación  

