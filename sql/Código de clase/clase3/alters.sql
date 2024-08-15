#ALTER --> aterar la estructura de la tabla

#Cambiar el nombre de una columna
ALTER TABLE autobus RENAME COLUMN patente TO matricula;

#Modificar el tipo de dato de una columna
ALTER TABLE autobus MODIFY matricula VARCHAR(10);

#Agregar una nueva columna
ALTER TABLE autobus ADD isActivated BOOL;

ALTER TABLE mecanicos ADD isActivated BOOL DEFAULT TRUE;

#Eliminar una columna
ALTER TABLE autobus DROP COLUMN isActivated;

#Agregar clave foranea. Sería necesario crear previamente la columna
ALTER TABLE mecanicos ADD id_autobus INT;

ALTER TABLE mecanicos MODIFY id_autobus INT UNSIGNED;

ALTER TABLE mecanicos ADD FOREIGN KEY (id_autobus) REFERENCES autobus(nro_interno);
