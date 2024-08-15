import getPool from "./getPool.js";

const insertNewMecanico = async (nombre, direccion, telefono, nro_interno) => {
  try {
    const pool = await getPool();

    await pool.query(
        `
            INSERT INTO mecanicos (nombre, direccion, telefono, nro_interno)
            VALUES (?,?,?,?)
        `,
        [nombre, direccion, telefono, nro_interno]
    );

    console.log("mecanicos creado good");

    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};

insertNewMecanico("Prueba desde node", "NodeJs", "12221313", 1);
