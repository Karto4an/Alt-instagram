const Pool = require('pg').Pool
const pool = new Pool({
    username: "Karto4an",
    password: "password",
    host: "127.0.0.1",
    port: 5432,
    database: "alt_insta"
})

module.exports = pool
