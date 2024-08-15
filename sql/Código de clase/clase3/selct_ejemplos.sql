#Clausula SELECT
##SELECT, WHERE, GROUP BY, DISTINCT, ORDER BY

#SELECT campos
#FROM tabla/tablas
#WHERE condicion o condiciones
#GROUP BY
#ORDER BY
#HAVING --> condicion a una función de SQL (count(), avg(), sum())

SELECT last_name, first_name FROM actor ORDER BY last_name, first_name;

SELECT  count(last_name) FROM actor;

SELECT last_name FROM actor GROUP BY last_name;
## todos los actores que solo aparecen una vez
SELECT last_name FROM actor GROUP BY last_name HAVING COUNT(*) = 1;

##cuantas veces se repite el apellido de cada actor
SELECT last_name AS Apellido, count(last_name) AS Cantidad FROM actor GROUP BY last_name;

SELECT DISTINCT last_name FROM actor;

SELECT last_name FROM actor;

##por default el order by es asc
SELECT last_name, first_name FROM actor ORDER BY last_name, first_name DESC;

SELECT * FROM actor ORDER BY last_name;
SELECT * FROM actor ORDER BY last_name DESC;

SELECT * FROM film;
SELECT sum(rental_rate),  count(rental_rate), avg(rental_rate) FROM film;
