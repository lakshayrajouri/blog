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
    <div>
      <div className="fixed">
        <Link href="/blogs" className="button">
          View Blogs
        </Link>
        <h1 className="heading">Add New Blog</h1>
      </div>
      <div className="blogContainer">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Title"
            className="formInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            className="formInput"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit" className="formButton">
            Submit
          </button>
        </form>
      </div>
      <div className="message">
        {success && <p>Blog added successfully!</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
