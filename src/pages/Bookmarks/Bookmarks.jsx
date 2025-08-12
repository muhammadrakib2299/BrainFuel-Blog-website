import React, { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../../utils";
import SingleBlogCart from "../../Components/SingleBlogCart";
import { Link } from "react-router-dom";
import EmptyString from "../../Components/EmptyString";

function Bookmarks() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);

  // handle delete function
  const handleDeleteButton = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };

  if (blogs.length < 1)
    return (
      <EmptyString
        massage="No Bookmarks available"
        address={"/blogs"}
        label={"Browse Blogs"}
      ></EmptyString>
    );
  return (
    <div className="container py-20 px-6 max-w-7xl mx-auto space-y-6 sm:space-y-12 text-white">
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <SingleBlogCart
            handleDeleteButton={handleDeleteButton}
            deletable={true}
            key={blog.id}
            blog={blog}
          ></SingleBlogCart>
        ))}
      </div>
    </div>
  );
}

export default Bookmarks;
