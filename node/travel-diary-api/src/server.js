import express from 'express';
import morgan from 'morgan';

import userRouter from './routes/usersRouter.js';
import entriesRouter from './routes/entriesRouter.js';

const server = express();

//middelware a nivel de app o sea global, morgan muestra info de peticiones y respuestas del servidor
server.use(morgan('dev'));
server.use(express.json());//codifica todo lo que viene desde un formulario y viene por body(req)

//implementacion de las rutas
//no hay nunca un endpoint que sea '/'
server.use(userRouter);
server.use(entriesRouter);

//implementacion middelwares de control de ruta no encontrada y de errores
//middlewere de manejo de errores
//no lleva el next() porque es el error y no interesa que pase a la siguiente ruta
server.use((error, req, res, next) => {
    console.log(error);

    res.status(error.httpStatus || 500).send({
        status: 'ERROR',
        message: error.message
    }); 
});

//middleware de ruta no encontrada
server.use((req,res) => {
    res.status(404).send({
        status: 'ERROR',
        message: 'NOT FOUND'
    })
})


export default server;
