import pool from "../db/pool.js";

const insertCoche = async (marca, modelo, cv, anho) => {
  await pool.query(
    `
        INSERT INTO coches(marca, modelo, cv, anho)
        VALUES(?,?,?,?)
        `,
    [marca, modelo, cv, anho]
  );
  
};

export default insertCoche;
