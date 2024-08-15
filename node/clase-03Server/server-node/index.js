//crear un servidor de node.js
//importar un modulo core http
import http from 'http';

// const server = http.createServer((request, response) => {
//     //respondo ok (200) añ cliente y le informo al navegador que va a recibir un texto plano
//     response.writeHead(200, {'Content-type':'text/plain'});
//     response.end('Hola mundo')
// })

// server.listen(3001, () => console.log("servidor escuchando en puerto 3001"));


const users = [

    {
        id:1,
        name:"juan",
        age:20
    },
    {
        id:2,
        name:"diego",
        age:40
    },
    {
        id:3,
        name:"Maria",
        age:25
    },
    {
        id:4,
        name:"otra",
        age:349
    },
]

 const server = http.createServer((request, response) => {
   //respondo ok (200) añ cliente y le informo al navegador que va a recibir un texto plano
    response.writeHead(200, {'Content-type':'application/json'});
    response.end(JSON.stringify(users));
})

//server.listen(3001, () => console.log("servidor escuchando en puerto 3001"));
