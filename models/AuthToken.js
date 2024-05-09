const mongoose = require('mongoose');//importacion mongoose

const authTokenSchema = new mongoose.Schema({// crear esquema
    userId:{//campo userId
        type: mongoose.Schema.Types.ObjectId,//tipo de dato
        ref: 'User',//referencia
        required: true//userId requerido
    },
    token:{ //campo token
        type: String,// token tipo de dato string
        required: true // token requerido
    },
    createdAt:{//campo createdAt
        type: Date,//tipo de dato date
        default: Date.now,//fecha actual
        expires: "3h" //expira en  3 horas
    }
});

const AuthToken= mongoose.model('AuthToken', authTokenSchema);//modelo AuthToken   

module.exports = AuthToken;//exportar AuthToken 

