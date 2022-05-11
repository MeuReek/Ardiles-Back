const express = require('express')
//const Contenedor = require('./main')
const { Router } = express

const app = express()


const routerApi = new Router()

routerApi.use(express.json())

//const contenedor = new Contenedor('/productos.txt')


routerApi.get("/api", (req, res) => {
    res.send("<h1>Servidor de Productos</h1>");
  });

routerApi.get("/api/productos", async (req, res) => {
    const productos = await contenedor.getAll();
    res.send(`<h2>Lista de productos obtenidos: </h2>
              <p>${productos}</p>`);
  });
  

routerApi.get("/api/productos/:id", async (req, res) => {
    const productos = await contenedor.getAll();
    res.send(`<h2>Lista de productos obtenidos: </h2>
              <p>${productos}</p>`);
  });


routerApi.post("/api/productos/:id", async (req, res) => {
    
})

routerApi.put("/api/productos/:id", async (req, res) => {
   
  });


routerApi.delete("/api/productos/:id", async (req, res) => {
   
  });


app.use("/api", routerApi)

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})
server.on('error', error => console.log(`Error en servidor ${error}`))