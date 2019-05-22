const localPgConnection = {
    host: 'localhost',
    database: 'labs12-dev',
    user: 'postgres',
    password: 'YOUR_PASSWORD',
};


module.exports = {
    development: {
        client: 'postgresql',
        connection: localPgConnection,
        migrations: {
            directory: './data/migrations'
        },
        seeds: {
            directory: './data/seeds'
        },
        useNullAsDefault: true
    }
}