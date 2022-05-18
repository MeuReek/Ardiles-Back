const express = require('express')

const app = express()

app.set('views', './views')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('inicio', { productos })
})

app.post('/productos', (req, res) => {
    productos.push(req.body)
    res.redirect('/')
})

const server = app.listen(8080, () => {
    console.log('Servidor esta corriendo satisfactoriamente')
})