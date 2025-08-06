import React, { useEffect, useState } from "react";
import { getBlogs } from "../../utils";
import SingleBlogCart from "../../Components/SingleBlogCart";

function Bookmarks() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  return (
    <div className="container py-15 px-6 max-w-7xl mx-auto space-y-6 sm:space-y-12 text-white">
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <SingleBlogCart key={blog.id} blog={blog}></SingleBlogCart>
        ))}
      </div>
    </div>
  );
}

export default Bookmarks;
