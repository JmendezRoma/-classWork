import express from "express";
import morgan from "morgan";
import insertCoche from "./routes/coches-router.js";

const server = express();

server.use(morgan("dev"));
server.use(express.json())
server.use(insertCoche);

server.listen(3000, console.log("listening server, PORT: 3000"));


