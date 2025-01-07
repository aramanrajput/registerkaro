import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER,            
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,      
  password: process.env.DB_PASSWORD,      
  port: 5432
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
