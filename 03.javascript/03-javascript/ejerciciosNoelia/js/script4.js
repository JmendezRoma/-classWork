"use strict"

let userSchedule = parseInt(prompt("Inserte la hora please"));

if (userSchedule >= 6 && userSchedule <= 13) {
    console.log("Turno de mañana es de 6 a 14");
}
else if(userSchedule >= 14 && userSchedule <= 21){
    console.log("Turno de tarde es de 14 a 22");
}
else if(userSchedule >= 22 || userSchedule <= 5){
    console.log("Turno de noche es de 22 a 6");
}
 else {
    console.log("estas en paro");
}