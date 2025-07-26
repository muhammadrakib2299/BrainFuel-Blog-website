import React from "react";
import { useLoaderData } from "react-router-dom";

function Author() {
  const blog = useLoaderData();
  return (
    <div>
      <h1>Hello, Myself {blog.user.name}. I am Author of this blog. </h1>
    </div>
  );
}

export default Author;
