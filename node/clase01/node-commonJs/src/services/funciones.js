"use strict";

function sumar(v1, v2) {
    return v1 +v2;
}

const restar = (v1, v2) => {
    return v1- v2;
}

const getMayor = (v1,v2) => {
    if (v1 > v2) return v1;
    return v2;
        
}

module.exports = {
    sumar,
    restar,
    getMayor
}