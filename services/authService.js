const jwt =require('jsonwebtoken'); // Importamos el módulo jsonwebtoken

//Almacenamos nuestra clave secreta

const JWT_SECRET =
"899e234041186352d65a212160eb1737b7e797d2250b80b232dfebc098edf278";

//Función para crear un token JWT

function generateToken(user){ // Recibimos un objeto user
    const payload={ // Creamos el payload para el token con el objetivo de guardar el id y el email del usuario
        userId: user._id, // Guardamos el id del usuario
        email: user.email, // Guardamos el email del usuario
    };
    
    const token = jwt.sign(payload, JWT_SECRET,{expiresIn:"3h"}); //    Creamos el token con el payload, la clave secreta y un tiempo de expiración de 3 
    return token; // Retornamos el token para que sea utilizado en otras partes de la aplicación
}

module.exports = {
    generateToken // Exportamos la función para que pueda ser utilizada en otros archivos  
} 