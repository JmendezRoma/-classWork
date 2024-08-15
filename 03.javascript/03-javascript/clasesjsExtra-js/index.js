"use strict";

// las clases no existian en js, solo desde hace 5 años.

//no son clases como tal , porque js no es un lenguaje de clases sino un lenguaje de prototipos.

//todo lo que se puede hacer con clases en js se puede hacer con funciones en js

//sirven para simplificar y automatizar muchos objetos

const user1 = {
    name:"berto",
    surname:"Yanez",
    age: 45,
    greet: function () {
        return `Hola me llamo ${this.name} y tengo ${this.age}`
    },
    isAdult: function () {
        return this.age > 18;
    }
};

const user2 = {
    name:"Ana",
    surname:"Garcia",
    age: 32,
    greet: function () {
        return `Hola me llamo ${this.name} y tengo ${this.age}`
    },
    isAdult: function () {
        return this.age > 18;
    }
};



console.log(user1.greet());
console.log(user1.name);

console.log(user2.greet());
console.log(user2.name);
console.log(user1.isAdult());
console.log(user2.isAdult());
