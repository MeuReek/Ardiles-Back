import knex from "knex";

class ClienteSQL{
    constructor(options){
        this.knex = knex(options);
    }

    crearTabla(){
        return this.knex.schema.dropTableIfExists('Productos')
        .finally(() => {
            return this.knex.schema.createTable('Productos', table => {
                table.increments('ID').primary();
                table.string('Nombre', 50).notNullable;
                table.float('Precio').notNullable;
                table.string('Imagen');
            })
        }
    )}

    crearProducto(productos){
        return this.knex('Productos').insert(productos);
    }

    obtenerProductos(productos){
        return this.knex('Productos').select('*');
    }

    obtenerProducto(id){
        return this.knex('Productos').where('ID', id).first();
    }

    crearTablaMensajes(){
        return this.knex.schema.dropTableIfExists('Mensajes')
        .finally(() => {
            return this.knex.schema.createTable('Mensajes', table => {
                table.increments('ID').primary();
                table.string('Author', 50).notNullable;
                table.dateTime('Date').notNullable;
                table.string('Message');
            })
        }
    )}
    nuevoMensaje(mensaje){
        return this.knex('Mensajes').insert(mensaje);
    }
    
    mostrarMensajes(mensajes){
        return this.knex('Mensajes').select('*');
    }

    close(){
        this.knex.destroy();
    }

}
export default ClienteSQL;
