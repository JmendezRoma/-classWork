import getPool from "./getPool.js";

const updateMecanico = async (nombre, nro_empleado) => {
    try {

        const pool = await getPool();

        await pool.query(
            `
            UPDATE mecanicos
            SET nombre =?
            WHERE nro_empleado=?
            `,
            [nombre, nro_empleado]
        );

        console.log("empleado modificado");
        process.exit(0);
        
        
    } catch (error) {
        console.log(error);
        
    }
}

updateMecanico("nuevo nombre", 4)