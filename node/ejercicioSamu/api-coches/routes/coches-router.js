import selectCoches from "../services/selectCoches.js";
import express from "express";
import insertCocheController from "../controllers/insertCocheController.js";

const coche = express.Router();

coche.get("/coches", async (req, res) => {
  res.send(selectCoches);
});

coche.post("/coches", insertCocheController);

export default coche;
// req.body es undefined porque debemos crear un middleware que se encargue de leer y parsear el body de la petición.... (tenéis que investigar qué middleware es y cómo utilizarlo)

// Recoger los datos de un coche nuevo de la request
// Crear dicho coche en la db (con un INSERT)
// Responder con los datos del coche creado
