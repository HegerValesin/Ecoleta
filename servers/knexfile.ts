import path from 'path';

module.exports = {
    client: 'mysql',
    connection: {
        host: 'hegervalesin-pc',
        user: 'heger',
        password: '',
        database: 'ecoleta'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },

    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    
};