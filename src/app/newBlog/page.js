"use client";

import { useState } from "react";
import Link from "next/link";

export default function BlogsPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      setSuccess(true);
      setTitle("");
      setContent("");
    } else {
      const errData = await res.json();
      setError(errData.error || "Something went wrong");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <Link href="/blogs" className="button">
        View Blogs
      </Link>
      <div className="blogContainer">
        <h1 className="text-2xl font-bold mb-4">Add New Blog</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            className="w-full border p-2 rounded h-40"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
        {success && (
          <p className="text-green-600 mt-2">Blog added successfully!</p>
        )}
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </div>
    </div>
  );
}
