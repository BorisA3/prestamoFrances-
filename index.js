// importar express
const express = require("express");

// Crear un servidor express
const app = express();

// Crear una ruta para /
app.get("/", (req,res, next) => {
    res.send("!Bienvenido");
});


// Inicializar el servidor en un puerto en especifico
app.listen(5000, () => {
    console.log("Servidor ejecutandose en el puerto 5000");
});