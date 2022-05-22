const express = require('express');
const app = express()
const handlebars = require('express-handlebars');

const productos = [];

app.engine("hbs", handlebars.engine());
app.set("view engine", "hbs");
app.set("views", "./public");
app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render("./public/views/formulario.hbs", { productos })
});

app.get("/productos", (req, res) => {
    res.render("./public/views/partials/productos.hbs", {productos})  
});


app.post("/productos", (req, res) => {
  productos.push(req.body);
  res.redirect("/productos")
});



const PORT = 8080;
app.listen(PORT, err => {
  if(err) throw new Error (`Error en el servidor ${err}`) 
  console.log(`Servidor esta corriendo satisfactoriamente en el puerto ${PORT}` )
});