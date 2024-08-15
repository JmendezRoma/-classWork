"use script";

let hora = parseInt(prompt("que hora es"));

if (hora >= 6 && hora <= 12) {
    console.log("buenos dias");
}
else if(hora >= 13 && hora <= 18) {
    console.log("buenos tardes");
}

else if(hora >= 19 && hora <= 24) {
    console.log("buenas noches");
}
else if(hora >= 1 && hora <= 5) {
    console.log("buenas madrugadas");
}
else {
    console.log("estas equivocado");
}

