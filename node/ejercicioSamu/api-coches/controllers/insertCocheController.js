import insertCoche from "../services/insertCoches.js";



async function insertCocheController(req, res, next) {
    
    const { marca, modelo, cv, anho } = req.body;

    await insertCoche(marca, modelo, cv, anho);

    res.send('coche insertado correctamente')
}

export default insertCocheController