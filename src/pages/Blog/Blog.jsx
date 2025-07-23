import React from "react";
import { useLoaderData } from "react-router-dom";

function Blog() {
  const blog = useLoaderData();
  return (
    <div className="mt-10">
      <h1>{blog.title}</h1>
    </div>
  );
}

export default Blog;
