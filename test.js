// //import { pool } from "../lib/db"; // Import your query function

// import * as pg from "pg";

// const pool = new pg.Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false, // Required for Neon
//   },
// });

// const testDB = async () => {
//   try {
//     const result = await pool.query("SELECT NOW()");
//     console.log("✅ Database connected successfully at:", result.rows[0].now);
//   } catch (error) {
//     console.error("❌ Database connection failed:", error);
//   }
// };

// testDB();

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: false,
});

const testDB = async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("✅ Database connected successfully at:", result.rows[0].now);
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
};

testDB();

console.log("DATABASE_URL:", process.env.DATABASE_URL);
console.log("DB_URL:", process.env.DB_URL);
