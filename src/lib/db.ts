
const process = require('process');
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);


export const query = async (text: string) => {
  try {
    const res = await sql(text);
    return res
  } catch (err) {
    console.error('Database query error:', err);
    throw err;
  }
};
