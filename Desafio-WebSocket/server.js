const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const productos = []

const messages = [
    { author: '', message: ''}
]

app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render('inicio', { productos })
})

app.post('/productos', (req, res) => {
    productos.push(req.body)
    res.redirect('/')
})

io.on('connection', (socket) => {
    console.log('Cliente Conectado!')
    socket.emit('messages', messages)
    socket.on('new-message', data => {
        messages.push(data)
        io.sockets.emit('messages', messages)
    })
})

const PORT = 8080;
app.listen(PORT, () => console.log('Iniciando conexión en el puerto: ' + PORT))
