//cualquier metodo precedido de get va a ser un getter

// recursion = cuando la funcion es llamada repetidas veces

// las propiedades que empizan por barrabaja son propiedades privadas _age

"use strict";

class User  {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname
        this.age = age
    }

    get fullName () {//cada vez que me pidas la propiedad complete name ejecutame este metodo y retornalo
        return this.name + " " + this.surname;
    }

    set age (age) {
        if (age < 18){
            throw new Error("El usuario no puede ser menor de edad")
        }
        this._age = age;
    }

    get age() { //devuelve lo que tiene esa propiedad guardada anteriormente
        return `la edad de${this.name} es ${this._age} `;
    }
}

const user1 = new User ("Jonathan", "Joel", 30);

console.log(user1.name);
console.log(user1.fullName);
console.log(user1.age);

// user1.age = 30
// console.log(user1.age);

const user2 = new User ("Johanna", "Maria", 18)
console.log(user2.age);

const user3 = new User ("Gabriel", "Garcia", 13)