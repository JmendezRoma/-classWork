const user = [
    {
        id:1,
        name: "juan"
    },
    {
        id:2,
        name: "Lucia"
    },
    {
        id:3,
        name: "Petra"
    }
]

function sumar(v1, v2) {
    return v1 +v2;
}

const restar = (v1, v2) => {
    return v1- v2;
}

const mostrarUsuarios = (user) =>{
    user.forEach(user => {
        console.log(user);
        
    });
}

const suma = sumar(12,45);

console.log(suma);
console.log(restar(4,7));
mostrarUsuarios(user);

