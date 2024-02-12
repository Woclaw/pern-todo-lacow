// This file is responsible for creating a pool connection to the database.
const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'perntodo'
});

module.exports = pool;
