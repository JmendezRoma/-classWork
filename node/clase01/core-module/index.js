import fs from "fs/promises"; // todas las funciones del modulo fs

const checkFile = async (file) => {
  try {
    await fs.access(file);
    console.log(`archivo existente ${file}`);
  } catch (error) {
    console.error(`no existe el archivo  ${file}`);
  }
};

//siempre que accedamos o creemos un directorio hay que aplicar un try cacth
const createDirectory = async ()=>{
    try {

        await fs.mkdir('./imagenes')
        await fs.mkdir('./database')
        
    } catch (error) {
        console.log("no se pudo crear el directorio");
        
    }
}

const readDirectory = async () => {
    try {

        let encontro = false
        const files = await fs.readdir('./');
        //console.log(files);

        files.forEach((file) => {
            if (file === "leame.txt") {
                return encontro = true
                
            }
        })
        if (encontro) {
            console.log("archivo encontrado");
            
        }else if(!encontro) {
            console.log("archivo no encontrado");
            
        }
        
        
    } catch (error) {
        console.log(error);
        
    }
}

const readFile = async (file) => {
    try {
        const contenido = await fs.readFile(file, 'utf-8')
        console.log(contenido);
        
    } catch (error) {

    }
}


//si pongo write lo que tienes se borra si lo quieres conservar se usa append
const writeFile = async (file,info) => {
    try {
        
        await fs.appendFile(file,`\n ${info}`);
        console.log("informacion agregada correctamente");
        
    } catch (error) {
        console.log("error");
        
    }
}

const deleteFile = async (file) => {
    try {
        
        await fs.unlink(file)
        console.log("archivo elimnado correctamente");
        

    } catch (error) {
        
    }
}

//checkFile('./package.json');

//checkFile('./database/comm.js');

//createDirectory();

//readDirectory();

//readFile("./info.txt");

//writeFile("./info.txt","- Info nueva por sexta vez");

//readFile("./info.txt");

deleteFile("./info.txt");
