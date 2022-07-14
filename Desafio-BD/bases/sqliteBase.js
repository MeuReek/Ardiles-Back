import knex from "knex";

class SqliteClient{
    constructor(options){
        this.knex = knex(options);
    }
    async crearTablaMensajes(){
        try{
            return this.knex.schema.dropTableIfExists('Mensajes')
            .finally(() => {
                return this.knex.schema.createTable('Mensajes', table => {
                    table.increments('ID').primary();
                    table.string('Author', 50).notNullable;
                    table.dateTime('Date').notNullable;
                    table.string('Message');
                })
            })
        }catch(error){
            console.log(error);
        }
    }
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

export default SqliteClient;