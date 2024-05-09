const jwt = require('jsonwebtoken'); // importantdo jwt

function verifyToken(req, res, next){// creamos una funcion para verificar el token
 return new Promise((resolve, reject) => { // retornamos una promesa
    const token= req.headers.authorization// obtenemos el token del header para  verificarlo requerido en la autenticacion de la sesion en el encabezado de la peticion

    if (!token) { // si no hay token
        reject({  //retornamos un error
            status:401, // retornamos un error 401
            message: 'Token de autenticacion no proporcionado'//   retornamos un mensaje de error
        });// retornamos un error
    }

    jwt.verify(// verificamos el token
        token.split(" ")[1], // obtenemos el token
    "899e234041186352d65a212160eb1737b7e797d2250b80b232dfebc098edf278",
    (error,decodedToken)=>{// verificamos el token
        if(error){// si el token no es valido
            reject({status:401, message: 'Token de autenticacion no valido'})// retornamos un error
        }else{ // si el token es valido
            req.userId = decodedToken.userId // agregamos el id de usuario decodificado para su posterior uso
            resolve() // resolvemos la promesa
        }
      } 
    );
  })
  .then(()=> next())// continua el seguimiento del siguiente middleware o del siguiente controlador
  .catch((error)=> // si hay un error
    res.status(error.status || 500).json({message: error.message})// si hay un error lo retornamos con un status 500 
);
}

module.exports = verifyToken; // exportamos la funcion  
