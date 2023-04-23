const conexion = require("./src/db/conexion");
const express = require("express");
const cors = require("cors");

const routes = require("./src/routes/routes");

console.log("App de node arrancada");

conexion();

//Crear servidor de node
const app = express();
const puerto = 3900;

//Configurar cors
app.use(cors());

//Convertir body a objeto js
app.use(express.json());

//Crear rutas
app.use("/", routes);

//Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
  console.log("Servidor corriendo en el puerto" + puerto);
});
