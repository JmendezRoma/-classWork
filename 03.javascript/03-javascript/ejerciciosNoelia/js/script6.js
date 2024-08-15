"use script";

//como hacer para que sean required

let year = parseInt(prompt("how old are you? "));
let nationality = prompt("what is your nationality?").toLowerCase();

if (year >= 18 && nationality === "spain") {
  console.log("eres mayor de edad y sos de España");
} else if (year >= 18 && nationality !== "spain") {
  console.log("eres mayor de edad pero no sos de España");
} 
 else {
 alert("te has equivocado al ingresar los argumentos");
}


