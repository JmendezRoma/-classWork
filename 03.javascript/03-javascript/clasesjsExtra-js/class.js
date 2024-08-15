//metodo especial constructor, en el momento que se crea un objeto con new el constructor se ejecuta

//se usa tambien la keyword this. para referirnos a ese objeto en particular


"use strict";

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet () {
        return `Hello my name is ${this.name}`;
    }

    isAdult() {
        return this.age > 18;
    }

    bigGreet() {
        return `${this.greet()} and my age is ${this.age}`
    }
}

const user1 = new User("Berto", 45);//se instancia una clase creando un objeto
console.log(user1);
console.log(user1.greet());
console.log(user1.isAdult());

const user2 = new User("Maria", 15);//se instancia una clase creando un objeto
console.log(user2);
console.log(user2.greet());
console.log(user2.isAdult());

const user3 = new User ("Roberto", 38);
console.log(user3);
console.log(user3.greet());
console.log(user3.isAdult());


console.log(user1.bigGreet());
console.log(user2.bigGreet());

// const user2 = new User();

// console.log(user1);
// console.log(user2);


// console.log(user1.greet());
// console.log(user1.isAdult());
// console.log(user2.greet());
// console.log(user2.isAdult());