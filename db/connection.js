const { Pool } = require('pg');
const pool = new Pool({
  user: 'yaseminvatan',
  host: 'localhost',
  database: 'employee_db',
  password: 'Daisy',
  port: 5432
});

module.exports = pool;