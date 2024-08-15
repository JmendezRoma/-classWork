CREATE DATABASE mecanicos;
USE mecanicos;

CREATE TABLE autobus(
	nro_interno INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(100) NOT NULL,
    modelo INT UNSIGNED,
    patente VARCHAR(20) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE mecanicos(
	nro_empleado INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(100) DEFAULT("sin direccion"),
    telefono VARCHAR(100),
    nro_interno INT UNSIGNED NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (nro_interno) REFERENCES autobus(nro_interno)
    #FOREIGN KEY (nro_taller) REFERENCES taller(nro_taller)
);