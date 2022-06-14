import { options }  from "./options/config.js";
import ClienteSQL from './bases.js';

const clienteSql = new ClienteSQL(options.mariaDb);
const clienteSqlite = new ClienteSQL(options.sqlite3);

try {
    await clienteSql.crearTabla();
    console.log("Tabla creada");

    const productos = [
        {Nombre: 'Batita', Precio: 910, imagen: ""},
        {Nombre: 'Ajuar Liso', Precio: 1820, imagen: ""},
        {Nombre: 'Ajuar Estampado', Precio: 2020, imagen: ""},
        {Nombre: 'Batita Estampada', Precio: 980, imagen: ""},
        {Nombre: 'Pantalon', Precio: 700, imagen: ""},
    ]

    await clienteSql.crearProducto(productos);
    console.log("Productos creados");

    const productosObtenidos = await clienteSql.obtenerProductos(productos);
    console.log("Productos obtenidos");
    console.table(productosObtenidos);

    const productoObtenido = await clienteSql.obtenerProducto(1);
    console.log("Producto obtenido");
    console.table(productoObtenido);

    await clienteSqlite.crearTablaMensajes();
    console.log("Tabla creada");

    const mensajes = [
        {Author: 'Juan', Date: new Date(), Message: 'Hola'},
        {Author: 'Pedro', Date: new Date(), Message: 'Hola'},
    ]

    const mensajeEnviado = await clienteSqlite.nuevoMensaje(mensajes);
    console.log("Mensaje enviado: " + mensajeEnviado);

    const mensajesEmitidos = await clienteSqlite.mostrarMensajes(mensajes);
    console.log("Lista de Mensajes");
    console.table(mensajesEmitidos);

} catch (error) {
    console.log(error);
} finally {
    clienteSql.close();
}
    
