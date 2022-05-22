const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const handlebars = require('express-handlebars')


const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.engine("hbs", handlebars.engine())
app.set("view engine", "hbs")
app.set("views", "./views")

app.use(express.static('./public'))

const productos = []
const messages = [
    { author: '', message: ''}
]


app.get('/', (req, res) => {
    res.render('./public/main.hbs', {productos})
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

const PORT = 8080
httpServer.listen(PORT, () => console.log('Iniciando conexión en el puerto: ' + PORT))
