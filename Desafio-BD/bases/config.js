const options = {
    mysql: {
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'mauri',
        database: 'Productos'
    }
    },
    sqlite3: {
    client: 'sqlite3',
    connection: {
        filename: './db/ecommerce.sqlite'
    },
    useNullAsDefault: true
}
}
export default options;

