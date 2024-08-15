
//path 2 tipos absolutas o relativas
//console.log(process.env);//muestra el entorno de node
//console.log(process.env.PATH);
//console.log(process.pid);
//console.log(process.version);
//console.log(process.cwd());// pad de la app que se esta ejecutando ruta relativa
//const ruta = "C:\Users\jona_\OneDrive\Escritorio\claseHackaBoss\node\clase-02\variables-globales"

//importante
// const ruta2 = process.cwd() + "api/src" // ruta relativa

//console.log("programa se esta ejecutando");

//console.log(process.argv);

//console.log(process.argv[3]);// pasar datos desde la line de comandos node index.js 1 2 3 4 y despues puedes hacer que te muestra la posicion 3 porque te lo devuelve como array

// const val1 = Number(process.argv[2]);
// const val2 = Number(process.argv[3]);
// const suma = val1+val2;
// console.log(suma);

//modulo core que permite configurar las rutas de mi proyecto
//garantiza que el proyecto funcione correctamente(subida de archivo)
import path from 'path'; 

const ruta = path.join(process.cwd(), "/database/users.json")//permite crear una ruta a partir de varias partes
console.log(ruta);

console.log(path.extname(ruta));
