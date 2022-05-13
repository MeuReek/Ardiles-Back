const express = require('express')
const { Router } = express

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
const routerApi = Router()

routerApi.use(express.json())

const productos = [{}]

routerApi.get("/productos", async (req, res) => {
    res.send("<h1>Servidor de Productos</h1>")
    res.json(productos);
  });
  

routerApi.get("/productos/:id", async (req, res) => {
    const id = req.params.id;
    res.json(productos[id]);
  });


routerApi.post("/productos", async (req, res) => {
  productos.push(req.body)
  res.send("<h1>Servidor de Productos</h1>")
  res.json(productos);
    
})

routerApi.put("/productos/:id", async (req, res) => {
   
  });


routerApi.delete("/productos/:id", async (req, res) => {
  const id = req.params.id;
  productos[id] = {};
  res.json("Producto Eliminado");
  });


app.use("/api", routerApi)

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})
server.on('error', error => console.log(`Error en servidor ${error}`))