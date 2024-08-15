#comentario:
#DDL (lenguaje de definicion de datos)
#CREATE, ALTER, DROP, REMANE --> nivel de estructura de tabla

#DML (lenguaje de manipulacion de datos)
#SELECT, DELETE, UPDATE--> a nivel de datos (LO QUE ESTA GUARDADO EN LA TABLA)

#DQL (lenguaje de consulta de datos) -->recuperar datos de la tabla(mostrar, ver,seleccionar)
#SELECT

#EL RESULTADO DE UN SELECT ES UNA TABLA SIEMPRE
# importante ;
#ctrl + enter ejecuta la linea que este seleccionada

#Crear una base de datos:
CREATE DATABASE mecanicos;

#Usar la base de datos:
USE mecanicos;

#Crear una tabla
CREATE TABLE autobuses(
	nro_interno INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(15) NOT NULL,
    modelo INT UNSIGNED NOT NULL,
    matricula VARCHAR(20) NOT NULL,
    createdAt DATETIME DEFAULT (current_timestamp), #coje la fecha y hora de la creacion
    modifiedAt DATETIME ON UPDATE current_timestamp #cuando se actualice, se actualices toma el current_timestamp
);

CREATE TABLE mecanicos  (
	nro_empleado INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(20) DEFAULT("Sin nombre"), #sino me mando nada pone algo por defecto
    direccion VARCHAR(30) DEFAULT("direccion null"),
    telefono VARCHAR(30),#LO HAGO VARCHAR PORQUE NO VOY A OPERAR CON ESTE DATO.
    nro_interno INT UNSIGNED  NOT NULL,
    createdAt DATETIME DEFAULT (current_timestamp), 
    modifiedAt DATETIME ON UPDATE current_timestamp,
    FOREIGN KEY (nro_interno) REFERENCES autobuses(nro_interno)
);