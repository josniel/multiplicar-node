const fs = require('fs');
var colors = require('colors/safe');
let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`Los valores introducidos ${base} o ${limite} no son números`);
            return;
        }
        let data = ''
        console.log('======================='.green);
        console.log(`======Tabla de ${base}=======`.green);
        console.log('======================='.green);
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }
        resolve(data)
    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`Los valores introducidos ${base} o ${limite} no son números`);
            return;
        }
        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        fs.writeFile(`Tablas/tabla-${base}-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-${limite}.txt`)
        });
    });
}
module.exports = {
    crearArchivo,
    listarTabla
}