const express = require('express')

const app = express()

const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('views', './views')

app.set('view engine', 'pug')

const productos = [];

app.get('/', (re, res) => {
    res.render('inicio', { productos })
});

app.post('/productos', (req, res) => {
    productos.push(req.body)
    res.redirect('/')
})

app.listen(PORT, () => { console.log('Servidor esta corriendo satisfactoriamente en puerto' + PORT) });
