// app/api/blog/route.js

import pool from "@/lib/db";

export async function GET() {
  try {
    const blogContent = await pool.query("SELECT * FROM blog");
    return new Response(JSON.stringify(blogContent.rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error fetching blog:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch blog" }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, content } = body;

    if (!title || !content) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    const result = await pool.query(
      "INSERT INTO blog (title, content) VALUES ($1, $2) RETURNING *",
      [title, content]
    );

    return new Response(JSON.stringify(result.rows[0]), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error creating blog:", err);
    return new Response(JSON.stringify({ error: "Failed to create blog" }), {
      status: 500,
    });
  }
}
