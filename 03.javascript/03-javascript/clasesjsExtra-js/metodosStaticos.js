"use strict";

//las clases son una herramienta utiles para crear objetos tambien se pueden usar funciones

class Book {

    static store = "Mi libreria"; // propiedades estaticas son propiedaddes la las clases no de los objetos

    static description = "Esta clase define un libro";

    static compareRelease() {//los metodos staticos son propios de las clases no de los objetos
        console.log("test");
    }

    static available(book) {
        console.log(book.name);
        if (book.units > 0) {
            console.log("hay libros");
        } else {
            console.log("no hay mas libros");
        }
    }


    constructor(name, release, units){
        this.name = name;
        this.release = release;
        this.units = units;
    }

    sell () {
        if(this.units > 0)
            this.units = this.units - 1;
        console.log(`vendida una unidad de ${this.name}, quedan ${this.units}`);
    }
}

const book1 = new Book("El quijote", new DataTransfer(2012, 1), 4);

const book2 = new Book("Inferno", new DataTransfer(2016, 6),0);

book1.sell();
book1.sell();

Book.available(book1)

console.log(Book.store);
console.log(Book.description);



Book.compareRelease();