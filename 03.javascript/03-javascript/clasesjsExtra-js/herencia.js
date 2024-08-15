"use strict";

class Person { //clase padre

    constructor(name) {
    this.name = name;
    this.sleeping = false;
    }

    sleep () {
        this.sleeping = true;
        console.log(`${this.name} esta durmiendo`);
    }

    wakeUp () {
        this.sleeping = false;
        console.log(`${this.name} se despierta`);
    }
    
}

const jonathan = new Person("Jonathan");
console.log(jonathan);

jonathan.sleep();
console.log(jonathan.sleeping);
jonathan.wakeUp();
console.log(jonathan.sleeping);




class Student extends Person{ //clase hija
// no tiene constructor, le pasa el de la clase padre pero ...

    constructor(name, bootcamp) {
        super(name);// super es que nos referimos a la propiedad name del constructor padre
        this.bootcamp = bootcamp;//no se puede declarar antes
    }

    study() { //es un metodo que solo existe en la clase student
        console.log(`${this.name} empieza a estudiar ppara ${this.bootcamp}`);
    }

    wakeUp(){ //como hay dos metodos llamados iguales la clase elige primero la que tiene implementada, sino lo hubiera eligiria la del padre
        console.log(`${this.name} no se quiere levanar`);
    }

    wakeUp() {//sobreescribir metodo
        super.wakeUp();// se puede utilizar super tambien para referirnos a la metodo de la clase hereda
        this.study();//metodo de la clase hija
        console.log("ni de coña");
    }
}

const marta = new Student("Marta", "JR39AB");
marta.sleep();
marta.wakeUp();
marta.study();

// console.log(marta);

