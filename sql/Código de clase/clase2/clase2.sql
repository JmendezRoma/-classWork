#DDL (lenguage de definicion de datos)
# CREATE, ALTER, DROP, RENAME --> nivel de estructura de tabla

# DML (lenguaje de manipulacion de datos)
# INSERT, UPDATE, DELETE --> a nivel de datos (lo que esta guardado en la tabla)

#DQL (lenguaje de consulta de datos) --> recuperar (mostrar, ver, seleccionar) datos de la tabla
# SELECT

# El resultado de un SELECT es una tabla

# Crear la base de datos

CREATE DATABASE mecanicos;
USE mecanicos;

CREATE TABLE autobus(
	nro_interno INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(100) NOT NULL,
    modelo INT UNSIGNED,
    patente VARCHAR(20) NOT NULL
);

CREATE TABLE mecanicos(
	nro_empleado INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(100) DEFAULT("sin direccion"),
    telefono VARCHAR(100),
    nro_interno INT UNSIGNED NOT NULL,
    FOREIGN KEY (nro_interno) REFERENCES autobus(nro_interno)
    #FOREIGN KEY (nro_taller) REFERENCES taller(nro_taller)
);