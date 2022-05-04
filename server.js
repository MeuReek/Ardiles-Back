const express = require("express");
const Contenedor = require("./main");

const PORT = 8080;

const app = express();
const contenedor = new Contenedor("/productos.txt");

const server = app.listen(PORT, () => {
  console.log("Servidor HTTP escuchando en el puerto " + PORT);
});

app.get("/", (req, res) => {
  res.send("<h1>Servidor de Productos</h1>");
});

app.get("/productos", async (req, res) => {
  const productos = await contenedor.getAll();
  res.send(`<h2>Lista de productos obtenidos: </h2>
            <p>${productos}</p>`);
});

app.get("/productoRandom", async (req, res) => {
  const productoRandom = await contenedor.getRandom();
  res.send(productoRandom);
});
