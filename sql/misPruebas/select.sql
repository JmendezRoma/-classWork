select marca,modelo from autobus; 
#select * from mecanicos;
#insert into autobus(nro_interno,marca,modelo,patente) VALUES (DEFAULT, "Man", 2018, "AXBC_3123");
#SELECT marca FROM autobus WHERE marca = "Renault";insert into autobus(marca,modelo,patente) VALUES ( "Volvo", 2005, "AXsdBC_3a2123");
select min(modelo) from autobus;
select max(modelo) from autobus;

select * from mecanicos limit 1; #muestra uno 

select * from mecanicos order by nro_empleado desc;
