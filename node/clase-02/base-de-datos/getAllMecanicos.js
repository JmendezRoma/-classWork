//consultar todos los mecanicos
//cada vez que necesitemos acceder a una base de datos para hacer un select o un insert o un update o un delete si o si nos traemos el getPool
import getPool from "./getPool.js";

const getAllMecanicos = async () => {
    try {
        
        const pool = await getPool();
        //const result = await pool.query('SELECT * FROM mecanicos'); //el query se usa para todas las consultas
        const [mecanicos] = await pool.query('SELECT * FROM mecanicos')
        console.log(mecanicos);
        
        process.exit(0);

    } catch (error) {
        console.log(error);
        
    }
}
getAllMecanicos();