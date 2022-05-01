const express = require('express')
const Contenedor = require('./main')

const PORT = 8080

const app = express()
const contenedor = new Contenedor('/productos.txt')

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})

app.get('/', (req, res) => {
    res.send('<h1>Servidor de Productos</h1>')
})

app.get('/productos', (req, res) => {
    const productos = contenedor.getAll()
    res.send(`<h2>Lista de productos obtenidos: </h2>
            <p>${productos}</p>`)
})

app.get('/productoRandom', (req, res) => {
    const productoRandom = contenedor.getRandom()
    res.send(`<h2>Producto obtenido de forma aleatoria: </h2>
            <p>${productoRandom}</p>`)
})

