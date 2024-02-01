

const { Pool } = require('pg');
const fs = require('fs');

// Create a pool with your database connection details
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'rakamin',
  password: '',
  port: 5432,
  max: 10,    // Set the maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
});

// Define a function to perform a database query using the pool
const queryDatabase = async () => {
  const client = await pool.connect(); // Get a client from the pool

  try {
    // Use the client to run a query
    // const result = await client.query('SELECT * FROM your_table');
    const seedQuery = fs.readFileSync('seeding.sql',{encoding: 'utf8'});
    pool.query(seedQuery, (err, result) => {
        if (err) {
          console.error('Error executing query:', err);
        } else {
          console.log('Query result:', result.rows ? result.rows : null); // Assuming the result contains rows
        }
      
        console.log('Seeding completed');
      });
  } finally {
    client.release(); // Release the client back to the pool
  }
};

// Call the function to query the database
queryDatabase()
  .then(() => {
    console.log('Query executed successfully!');
  })
  .catch((error) => {
    console.error('Error executing query:', error);
  })
  .finally(() => {
    pool.end(); // End the pool when done with all queries
  });
