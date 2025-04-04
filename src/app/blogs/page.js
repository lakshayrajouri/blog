"use client";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("/api/blog");
      const data = await response.json();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blogContainer">
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <h1 className="blogTitle">{blog.title}</h1>
          <p className="blogContent">{blog.content}</p>
        </div>
      ))}
    </div>
  );
}
