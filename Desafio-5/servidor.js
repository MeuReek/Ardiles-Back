const { urlencoded } = require('express');
const express = require('express');
const { engine } = require('express-handlebars');

const PORT = 8080;
const productos = [];

const app = express()
app.use(urlencoded({ extended: true }));
app.engine('hbs', engine());
app.set("view engine", "hbs");
app.set("views", "/views");


app.get("/", (req, res) => {
    res.render('formulario', { productos })
});

// app.get("/productos", (req, res) => {
//     res.render("./public/views/partials/productos.hbs", {productos})  
// });


// app.post("/productos", (req, res) => {
//   productos.push(req.body);
//   res.redirect("/productos")
// });



app.listen(PORT, err => {
  if(err) throw new Error (`Error en el servidor ${err}`) 
  console.log(`Servidor esta corriendo satisfactoriamente en el puerto ${PORT}` )
});