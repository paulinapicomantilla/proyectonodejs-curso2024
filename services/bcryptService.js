const bcrypt = require("bcrypt")

// Funcionar para Hashear una contraseña

function hashPassword(plainPassword){//plainPassword es la contraseña que se quiere encriptar
    return new Promise((resolve,reect)=>{//Se retorna una promesa
        const saltRounds = 10;//    Numero de veces que se va a encriptar la contraseña
        bcrypt.hash(plainPassword, saltRounds, (error,hashedPassword)=>{       //Se encripta la contraseña
            if(error){ //Si hay un error se rechaza la promesa
                PromiseRejectionEvent(new Error("Error al hashear la contraseña"))//Se rechaza la promesa
            } else {//Si no hay error se resuelve la promesa
                resolve(hashedPassword)//Se resuelve la promesa
            }
        })
    })

}


// Funcion para comprar una contraseña con su contraseña encriptada

function comparePassword(plainPassword,hashedPassword){//Se recibe la contraseña en texto plano y la contraseña encriptada
    return new Promise((resolve,reject)=>{//Se retorna una promesa
        bcrypt.compare(plainPassword,hashedPassword, (error,match)=>{//Se compara la contraseña en texto plano con la contraseña encriptada
            if (error){//Si hay un error se rechaza la promesa
                reject(new Error("Error al comparar contraseñas"))//Se rechaza la promesa
            }
            else{//Si no hay error se resuelve la promesa
                resolve(match)//    Se resuelve la promesa
            }
        })
    })
}

module.exports ={//Se exportan las funciones
    hashPassword,//   Se exporta la funcion hashPassword
    comparePassword //Se exporta la funcion comparePassword
}