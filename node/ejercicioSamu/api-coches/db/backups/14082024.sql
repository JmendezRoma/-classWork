DROP DATABASE IF EXISTS app_coches;
CREATE DATABASE app_coches;

USE app_coches;

CREATE TABLE coches (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(100) NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    combustible ENUM("gasolina", "diesel") DEFAULT "gasolina",
    cambio ENUM("manual", "automático") DEFAULT "manual",
    cv INT NOT NULL,
    anho INT NOT NULL,
	color VARCHAR(50),
    km INT
);

INSERT INTO coches (marca, modelo, combustible, cambio, cv, anho, color, km) VALUES ("Opel", "Corsa", "gasolina", "manual", 90, 2018, "gris oscuro", 60000);