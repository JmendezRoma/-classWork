"use strict"

//OBJETO ERROR

//1er ejemplo
const miError = new Error("se ha producido un error en el sistema");
 console.log(miError.message);//Vemos la descripcion del error

 //2do ejemplo con la declaracion try/catch
try{
    function suma(num1, num2, resultado) {
        resultado = num1 + num2;
        console.log(resultado);
    }
    suma(10,20);
}

catch(error) {//es el mensaje que viene por defecto y va a ejecutar el mensaje de erros; el parametro error esta atento a las funciones del try
    console.log(error);

}

finally{//se ejecuta despues del catch aunque haya error
    console.log("finalizo el proceso de ejecucion");
}

//3er ejemplo
const dividir = (num1, num2) => {

    if (num2 ===0 ) {
        throw new Error("no puedes dividir un numero entre cero");//detiene el proceso de ejecucion y atumaticamente se va al catch; esta conectado directamente con el catch
    }

    return num1/num2;
}

try {
    console.log(dividir(2,0));
}

catch (error){
    //lo ejecuta el catch
    console.error(`Error: ${error.message}`);//console.error muestra el error en un recuadro en rojo

}

//4to ejemplo este es el ejemplo mas prolijo porque se cre una funcion exclusiva para ello
function verificarLongitudTexto(text) {
    
    try {
        if (text.length < 4) {
            throw new Error("el texto es demasiado corto, debe tener mas de 4 caracteres");
        }
        return "el texto ingresado es correcto, cumple con lo solicitado"
    }

    catch (x){
        console.error(x.message);
    }
}

console.log(verificarLongitudTexto("javaScript"));
verificarLongitudTexto("css");//ya en la linea 52 saca el mensaje de error, es redundante. Ahora no porque hay un cosole.error
