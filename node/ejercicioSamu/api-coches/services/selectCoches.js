import pool from "../db/pool.js";


const [coches] = await pool.query("SELECT * FROM coches");

const title = { title: "Cochessss" };
const sendObject = { title, coches };


export default sendObject;