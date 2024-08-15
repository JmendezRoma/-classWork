
#insertar datos en una tabla
#INSERT INTO nombre_tabla (campo1,campo2,campo3) VALUES (valor1,valor2,valor3)

SELECT * FROM autobuses; #consulta de seleccion 

#insertar datos en una tabla
#INSERT INTO nobre_tabla (campo1,campo2, campo3,...) VALUES (valor1, valor2, valor3, ...)
INSERT INTO autobus (marca,modelo,patente) VALUES ("Renault",2013,"ABC-123");

INSERT INTO autobus (modelo,patente) VALUES (2013,"ABC-123"); #error porque no le pasamos la marca

INSERT INTO autobus VALUES (DEFAULT, "Mercedes", 2015, "ABC-568", DEFAULT, DEFAULT);

INSERT INTO mecanicos (nombre, direccion, telefono,nro_interno)
VALUES ("Juan", "Laprida 20", "5489665892", 2);

select * from mecanicos;

INSERT INTO mecanicos VALUES (DEFAULT,"Daniel", "Urquiza 34", "123456789", 1, DEFAULT, DEFAULT);

INSERT INTO mecanicos (nombre, direccion, telefono, nro_interno)
VALUES ("Gerardo", "Suipacha 220", "0000000000", 1);