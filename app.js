const argv = require('./config/yargs.js').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

let command = argv._[0];
switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(list => console.log(list))
            .catch((e) => console.log(e))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', (colors.green(archivo))))
            .catch((e) => console.log(e))
        break;
    default:
        console.log('No se reconoce el comando');
}