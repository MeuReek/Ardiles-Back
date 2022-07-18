import knex from "knex";


class ClienteSQL{
    constructor(options){
        this.knex = knex(options);
    }
    
    async crearTabla(){
        try{
            await this.knex.schema.dropTableIfExists('Productos');
            await this.knex.schema.createTable('Productos', table => {
            table.integer.increments('ID').primary();
            table.string('Nombre', 50).notNullable;
            table.float('Precio').notNullable;
            table.string('Imagen');
            })
        }catch(error){
            console.log(error); throw error }
    };


    async crearProducto(productos){
        try {
            await this.knex('Productos').insert(productos);
            
        } catch (error) {
                
        }
    }

    async obtenerProductos(){
        try {
            await this.knex('Productos').select('*');
        }catch(error){
            console.log(error);
        }        
    }

    async obtenerProducto(id){
        try{
            await this.knex.from('Productos').where('ID', id).first();
        }catch(error){
            console.log(error);
        }
    }
    async close(){
        try{
            await this.knex.destroy();
        }catch(error){
            console.log(error);
        }
    }
}
export default ClienteSQL;
