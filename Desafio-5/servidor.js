const express = require('express');

const app = express()

const handlebars = require('express-handlebars');

app.engine(
    "hbs",
    handlebars({
        extname: "hbs",
        defaultlayout: "index.hbs",
        layoutDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials"
    })
);

app.set("view engine", "hbs");

app.set("views", "./views");

app.use(express.static("./public"));


app.get("/api", (req, res) => {
res.render("<h1>Servidor de Productos</h1>");
  });

ápp.get("/api/productos", async (req, res) => {
    const productos = await contenedor.getAll();
    res.send(`<h2>Lista de productos obtenidos: </h2>
              <p>${productos}</p>`);
  });
  

app.get("/api/productos/:id", async (req, res) => {
    const productos = await contenedor.getAll();
    res.send(`<h2>Lista de productos obtenidos: </h2>
              <p>${productos}</p>`);
  });


app.post("/api/productos/:id", async (req, res) => {
    
})

app.put("/api/productos/:id", async (req, res) => {
   
  });


app.delete("/api/productos/:id", async (req, res) => {
   
  });




app.listen(8080);