//siempre es lo mismo importo hago la implementacion y exporto de primeras
import express from 'express';


const entriesRouter = express.Router();

//rutas de usuario
entriesRouter.get('/entries', (req,res) => {
    res.send('soy ruta de entradas');
})


export default entriesRouter;