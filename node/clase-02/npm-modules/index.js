import {format} from 'date-fns';

const fecha = new Date();

console.log("fecha sin formato");

console.log(fecha);

//cambiar el formato original de la libreria
const fechaFormat = format(fecha, "yyyy-MM-dd");
console.log(fechaFormat);

