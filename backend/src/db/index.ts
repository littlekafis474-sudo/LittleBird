import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Create a connection pool to NeonDB
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Test the connection
export const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log('✅ NeonDB connected successfully!');
    client.release();
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
};
