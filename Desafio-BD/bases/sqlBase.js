import knex from "knex";


class ClienteSQL{
    constructor(options){
        this.knex = knex(options);
    }

    async crearTabla(){
        try{
            return this.knex.schema.dropTableIfExists('Productos')
            .finally(() => {
                return this.knex.schema.createTable('Productos', table => {
                    table.increments('ID').primary();
                    table.string('Nombre', 50).notNullable;
                    table.float('Precio').notNullable;
                    table.string('Imagen');
                })
            })
        }catch(error){
            console.log(error);
        }
    }

    crearProducto(productos){
        return this.knex('Productos').insert(productos);
    }

    obtenerProductos(productos){
        return this.knex('Productos').select('*');
    }

    obtenerProducto(id){
        return this.knex('Productos').where('ID', id).first();
    }
    close(){
        this.knex.destroy();
    }

}
export default ClienteSQL;
