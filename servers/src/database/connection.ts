import knex from 'knex'; 

const connection = knex({
    client: 'mysql',
    connection: {
        host: 'hegervalesin-pc',
        user: 'heger',
        password: '',
        database: 'ecoleta'
    }
});

export default connection;