import pool from './config/db';

const testDbConnection = async () => {
  try {
    // Attempt to run a simple query
    const res = await pool.query('SELECT NOW()');
    console.log('Database connection successful:', res.rows[0]);
  } catch (err) {
    console.error('Database connection error:', err);
  } finally {
    // Close the database pool to end the process
    await pool.end();
  }
};

// Run the test
testDbConnection();
