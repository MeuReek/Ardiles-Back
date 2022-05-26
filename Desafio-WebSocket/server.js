const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const productos = []

const messages = [
    { author: '', date: '', message: ''}
]

app.use(express.static('views'))	
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render('inicio', { productos })
})

app.post('/productos', (req, res) => {
    productos.push(req.body)
    res.redirect('/')
})

io.on('connection', socket => {
    console.log('Cliente Conectado!')
    socket.send('messages', messages)

    socket.on('new-message', data => {
        messages.push(data)
        io.sockets.emit('messages', messages)
    })
})

const PORT = 8080;
httpServer.listen(PORT, () => console.log('Iniciando conexión en el puerto: ' + PORT))
