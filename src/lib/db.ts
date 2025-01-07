import { Pool } from 'pg';
const process = require('process');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Set to false for self-signed certificates
  },
});

export const query = async (text: string, params?: any[]) => {
  try {
    const res = await pool.query(text, params);
    return res.rows;
  } catch (err) {
    console.error('Database query error:', err);
    throw err;
  }
};
