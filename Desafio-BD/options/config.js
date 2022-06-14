export const options = {
    mariaDb:{
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: 'mauri',
            database: 'test'
        } 
    },
    sqlite3:{
        client: 'sqlite3',
        connection: {
            filename: './db/ecommerce.sqlite'
        },
        useNullAsDefault: true
    }
}
