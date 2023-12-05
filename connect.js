
const mysql2 = require("mysql2");

const pool = mysql2.createPool({
    host: 'viaduct.proxy.rlwy.net',
    port: 54273,  
    user: 'root',
    password: 'dE1dC-5E55C-A4BHAADCA2g3AB31fA-b',
    database: 'mateuni',
    waitForConnections: true,
    connectionLimit: 0,
    queueLimit: 0,
});

const promisePool = pool.promise();

module.exports = promisePool;