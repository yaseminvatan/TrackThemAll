const pool = require('./connection');

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
  } else {
    console.log('Connected to the database:', res.rows);
  }
  pool.end();
});
