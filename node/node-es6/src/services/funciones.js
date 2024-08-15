"use strict";

export default function sumar(v1, v2) {
    return v1 + v2;
}//por defecto se exporta esta funcion

const restar = (v1, v2) => {
    return v1 - v2;
}

const getMayor = (v1,v2) => {
    if (v1 > v2) return v1;
    return v2;
        
}



export {
    restar,
    getMayor
}