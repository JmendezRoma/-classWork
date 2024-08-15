//siempre es el mismo codigo lo copie de la clase 2 solo hay que cambiar el .env que es lo que varia

import "dotenv/config"; //para crear la variable de entorno
import mysql from "mysql2/promise"; //como puede romper, lo hago en una promesa

//ahora me traigo el entorno

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

let pool;
const getPool = async () => {
  try {
    if (!pool) {
      //si no hay pool(conexión), la creo
      pool = mysql.createPool({
        connectionLimit: 10,
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        timezone: "Z",
      });
    }

    //si ya tenia pool
    return await pool;
  } catch (error) {
    console.log(error);
  }
};

export default getPool;

