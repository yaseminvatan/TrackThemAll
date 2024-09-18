const { Pool } = require('pg');
const pool = new Pool({
  user: 'your-username',
  host: 'localhost',
  database: 'employee_db',
  password: 'your-password',
  port: 5432
});

module.exports = pool;