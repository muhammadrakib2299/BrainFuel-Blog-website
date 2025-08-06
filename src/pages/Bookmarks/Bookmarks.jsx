import React, { useEffect, useState } from "react";
import { getBlogs } from "../../utils";
import SingleBlogCart from "../../Components/SingleBlogCart";
import { Link } from "react-router-dom";

function Bookmarks() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  return (
    <div className="container py-15 px-6 max-w-7xl mx-auto space-y-6 sm:space-y-12 text-white">
      {blogs.length === 0 ? (
        <div className="text-center">
          <h1 className="text-3xl text-gray-700 font-bold text-center mt-20 pb-5">
            No Bookmarks Found
          </h1>
          <Link
            to="/blogs"
            class="relative inline-block px-4 py-2 font-medium group"
          >
            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
            <span class="relative text-black group-hover:text-white">
              Browse Blogs
            </span>
          </Link>
        </div>
      ) : (
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <SingleBlogCart
              deletable={true}
              key={blog.id}
              blog={blog}
            ></SingleBlogCart>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookmarks;
