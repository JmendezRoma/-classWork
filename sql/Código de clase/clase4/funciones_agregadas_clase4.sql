#Funciones Agregadas

### FUNCIONES DE CADENAS
##Largo de una cadena
SELECT length("Hola Mundo") AS "Largo";
SELECT first_name AS Nombre, length(first_name) AS Largo FROM actor;

SELECT first_name AS Nombre, length(first_name) AS Largo
FROM actor
WHERE first_name LIKE "J%"
HAVING length(first_name) > 6;

#Concatenar cadenas
SELECT concat(first_name," - " ,last_name) AS "Nombre y Apellido" FROM actor;

## Pasar todo a mayusculas
SELECT upper("Hola mundo");

SELECT upper(concat(first_name," - " ,last_name)) AS "Nombre y Apellido" FROM actor;

SELECT lower(concat(first_name," - " ,last_name)) FROM actor;

use mecanicos;

INSERT INTO mecanicos (nombre, direccion, telefono, nro_interno)
VALUES ("Juan", "Algo", "1251425", 2);
SELECT * FROM mecanicos;

INSERT INTO mecanicos (nombre, direccion, telefono, nro_interno)
VALUES (upper("Juan"),upper("Algo"), "1251425", 3);

## extraer una subcadena de una cadena de texto
SELECT substring("Hola mundo desde MySQL",6,18);

SELECT * FROM mecanicos;

##ifnull --> dos parametros val, devuelve ifnull(val, result)
SELECT nombre, direccion, ifnull(modifiedAt, "Nunca se modifico") FROM mecanicos;
SELECT nombre, direccion, ifnull(modifiedAt, (12*59)/15) FROM mecanicos;

### FUNCIONES NUMERICAS
#ABS --> el valor absoluto de un numero, devuelve la distancia de ese numero al cero
SELECT abs(-10);
SELECT abs(10);
SELECT abs(-1450);

#Redondeo
## round(valor_decimal, redondeo)
SELECT round(2.485974, 2);
SELECT round(2.485974, 3);

## POW --> potenciancion
##pow(valor,exponente)
SELECT pow(3,2);
SELECT pow(10,3);

##FUNCIONES PARA MANEJO DE FECHA

##fecha y hora actual
SELECT now();

#fecha actual
SELECT curdate();

SELECT (curdate() - "2020-07-30"); ## la cantidad de segundos

##datediff --> la diferencia de días que pasaron entre dos fechas
SELECT round(datediff(curdate(),"2020-07-30")/365);

##agragar dias a una fecha
SELECT date_add(curdate(),interval 10 day);
SELECT date_add(curdate(),interval 60 day);

#agragar años
SELECT date_add(curdate(), interval 10 year);

INSERT INTO mecanicos (nombre, direccion, telefono, nro_interno, createdAt)
VALUES (upper("gennaro"),upper("ffccrr"), "1251425", 3, date_add(curdate(),interval 60 day));

#agragar minutos
SELECT date_add(curdate(), interval 5400 minute);
SELECT date_add(now(), interval 54 minute);

##quitar tiempo a fechas
SELECT date_sub(curdate(), interval 3 year);
SELECT date_sub(now(), interval 3 year);

SELECT year(curdate());
SELECT month(curdate());
SELECT day(curdate());
SELECT concat(month(curdate()),"/",year(date_add(curdate(), interval 2 year)));

SELECT curdate();
SELECT date_format(curdate(), "%d-%m-%y");
SELECT date_format(curdate(), "%d/%m/%y");
SELECT date_format(curdate(), "%d-%m-%Y");
