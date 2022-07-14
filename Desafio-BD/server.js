import express from 'express';
import productosRouter  from './index.js';
import ClienteSQL from './bases/sqlBase.js';
import productos from './bases/sqlBase.js';
//import { HttpServer } from 'http';
//import { SocketServer } from 'socket.io';

const app = express();
//const httpserver = new HttpServer(app);
//const io = new SocketServer(server);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('api/productos', productosRouter);

/*app.get('/api', (req, res) => {
    const productos = req.body;
    res.json(productos);
});
*/
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

