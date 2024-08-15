import server from "./src/server.js";


//condicionamos el puerto para trabajar en prodccion y en desarrollo
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${ PORT }`);
    
})