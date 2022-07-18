import express, { json } from 'express';
//import routerProductos  from './index.js';
import options from './bases/config.js';
import ClienteSQL from './bases/sqlBase.js';
import productos from './bases/sqlBase.js';
//import { HttpServer } from 'http';
//import { SocketServer } from 'socket.io';

const app = express();
//const httpserver = new HttpServer(app);
//const io = new SocketServer(server);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('json spaces', 2);

//app.use('api', routerProductos);

const clienteSql = new ClienteSQL(options.mysql, 'ApiProductos');
const addProductos = [];

app.get('/api', (req, res) => {
    const tablaProductos = clienteSql.crearTabla();
    console.table(tablaProductos);
    res.json({ "Mensaje": "Tabla creada" });
});

app.post('/api/productos', (req, res) => {
  addProductos = [req.body];
  clienteSql.crearProducto(addProductos);
  console.table(addProductos);
  res.json("Productos Agregados correctamente");
});

app.get('/api/productos', (req, res) => {
  const productosObtenidos = clienteSql.obtenerProductos();
  console.table(productosObtenidos);
  res.json(productosObtenidos);
});

app.get('/api/productos/:id', (req, res) => {
  const productoObtenido = clienteSql.obtenerProducto(req.params.id);
  console.table(productoObtenido);
  res.json(+productoObtenido);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

