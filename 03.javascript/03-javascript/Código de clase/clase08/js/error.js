'use strict';

// OBJETO ERROR

//1er ejemplo
const miError = new Error("Se ha producido un error en el sistema");
console.log(miError.message); // Vemos la descripción del error

//2do ejemplo con la declaración try/catch
try{

   function suma(num1,num2,resultado) {
        resultado= num1+num2;
        console.log(resultado);
   }

   suma(10,20);
}

catch(error){
    console.log(error);
}

finally{
    console.log("Finalizó el proceso de ejecución.");
}

//3er ejemplo 
const dividir = (num1, num2) => {

    if(num2===0){
        throw new Error("¡Ojo! No podés dividir un número por cero");
    }

    return num1/num2;

}

try{
    console.log(dividir(2,0));
}

catch(error){
    console.error(`Error de la operación: ${error.message}`);
};

//4to ejemplo
function verificarLongitudTexto(cadenaTexto) {
    
    try{

        if(cadenaTexto.length < 4){
            throw new Error("El texto ingresado es demasiado corto. Debe tener más de 4 caracteres.");
        }
        return "El texto ingresado es válido. Cumple con lo solicitado";
    
    }

    catch(error){
        console.error(error.message);
    }

}

console.log(verificarLongitudTexto("JavaScript"));
verificarLongitudTexto("CSS");

