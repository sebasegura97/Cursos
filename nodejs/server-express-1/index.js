const express = require("express");
const app = express();

// Para devolver la ruta /
app.get("/", (req, res) => {
    res.send("Estoy en la ruta home");
})
// para devolver la ruta app
app.get("/app", (req, res) => {
    res.send("Estoy en la ruta app!");
})
// para devolver cualquier pagina no encontrada (usuarlo siempre como ultima ruta)
app.get("*", (req, res) => {
    res.send("Esta pagina no existe");
})
// Escuchar en el puerto 3000
app.listen(3000, () => {
    console.log("El servidor de Express esta escuchando en el puerto 3000");
});