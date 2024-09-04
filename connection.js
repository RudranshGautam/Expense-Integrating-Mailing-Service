// db/connection.js
const mysql = require('mysql2/promise');

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'rudransh@1',
    database: 'ww'
});

// Export the pool
module.exports = pool;

