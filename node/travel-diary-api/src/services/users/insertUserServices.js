import bcrypt from 'bcrypt';
import getPool 
 from "../../database/getPool.js";
import generateErrorsUtils from "../../utils/generateErrorsUtils.js";

const insertUserServices = async (email, password, registrationCode) => {

      const pool = await getPool();
  
      const [user] = await pool.query(
        `
                  SELECT id from users WHERE email=?
              `,
        [email] //guarda el valor
      );
  
      if (user.length)
        throw generateErrorsUtils("el email ya se encuentra registrado", 409);

//metodo para envio del email para confirmar el registro
//borra el codigo de registro y el active lo pone en 1

      const passwordHashed = await bcrypt.hash(password,10)
  
      await pool.query(
        `
                  INSERT INTO users (email, password, registrationCode)
                  VALUES (?,?,?)
              `,
        [email,passwordHashed,registrationCode]
      );
  };

export default insertUserServices;

