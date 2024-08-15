//entorno local 
//variables locales de entorno que son PRIVADAS
/**
 * para levantar el entorno local .env necesito instalar un paquete npm :dotenv
 * 
 * 
 */
import 'dotenv/config';
// console.log(process.env.USER_NAME);
// console.log(process.env.DATABASE_NAME);
// console.log(process.env.PASSWORD_DB);

const {
    USER_NAME,
    DATABASE_NAME,
    PASSWORD_DB,
    API_KEY  
} = process.env

console.log(USER_NAME);
console.log(DATABASE_NAME);
console.log(PASSWORD_DB);
console.log(API_KEY);


