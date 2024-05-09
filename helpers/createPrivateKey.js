const crypto= require('crypto'); // Importamos el módulo crypto

const secret = crypto.randomBytes(32).toString('hex'); // Generamos una clave secreta de 32 bytes y la convertimos a hexadecimal

console.log(secret); // Imprimimos la clave secreta en consola para copiarla y pegarla en la variable de entorno
//899e234041186352d65a212160eb1737b7e797d2250b80b232dfebc098edf278
