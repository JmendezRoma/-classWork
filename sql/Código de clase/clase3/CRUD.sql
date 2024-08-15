# C R U D --> Create, Read, Update, Delete
		   #SQL
#CREATE --> INSERT
#READ --> SELECT
#UPDATE --> UPDATE
#DELETE --> DELETE

#Actualizar datos en una tabla --> uno o varios registros y uno o mas campos por registro
##OJO USO DEL WHERE

#Modificar la direccion y el telefono del mecanico con nro_empleado=2
UPDATE mecanicos
SET direccion="Colon 1234", telefono="124789663214"
WHERE nro_empleado = 2;

UPDATE mecanicos
SET nombre="Nelson Albera"
WHERE nro_empleado = 2;

##CUIDADO NUNCA SIN WHERE
UPDATE mecanicos
SET isDeleted = 0;

INSERT INTO mecanicos (nombre, direccion,telefono,nro_interno) VALUES
("Para borrar", "Ecuador 234848484848", "0002142514", 3);

#DELETE --> Elimina uno o mas registros completos de una tabla
#OJO USO DEL WHERE
DELETE FROM mecanicos
WHERE nro_empleado=6;

#Borrado lógico --> update de algun campo ej: isDeleted (false) a (true)
UPDATE mecanicos
SET isDeleted = 1
WHERE nro_empleado=2;

##Consultar los datos de una tabla

#el * significa todos los campos, y en este caso todos los campos y todos los registros
SELECT * FROM mecanicos;

#mostrar solo el nombre y direccion de TODOS los mecanicos
SELECT nombre, direccion FROM mecanicos WHERE isDeleted=0;

#mostrar el nombre y la direccion del mecanico cuyo nro_empleado es 3
SELECT nombre, direccion FROM mecanicos WHERE nro_empleado=3;

SELECT nombre, direccion FROM mecanicos WHERE direccion="Ecuador 23";
