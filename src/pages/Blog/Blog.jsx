import React, { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { saveBlog } from "../../utils";

function Blog() {
  const [tablIndex, setTabIndex] = useState(0);
  const blog = useLoaderData();

  const {
    title,
    published_at,
    reading_time_minutes,
    comments_count,
    public_reactions_count,
  } = blog;

  const handleBookMark = (blog) => {
    saveBlog(blog);
  };

  return (
    <div className="px-5 py-15">
      <div className="max-w-4xl px-6 py-16 mx-auto space-y-12">
        {/* Blog heading */}
        <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-15 md:tracking-tight md:text-5xl">
              {title}
            </h1>

            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
              <div className="flex items-center md:space-x-2">
                <p className="text-sm">
                  {reading_time_minutes} Min read •{" "}
                  {new Date(published_at).toLocaleDateString()}
                </p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                {comments_count} Comments • {public_reactions_count} views
              </p>
            </div>
          </div>

          {/* Tabs bar */}
          <div>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
              {/* Content tab */}
              <Link
                onClick={() => setTabIndex(0)}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                  tablIndex === 0 ? "border border-b-0" : "border-b"
                } dark:border-gray-600 dark:text-gray-600`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Content</span>
              </Link>
              {/* Author tab */}
              <Link
                to="author"
                onClick={() => setTabIndex(1)}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                  tablIndex === 1 ? "border border-b-0" : "border-b"
                } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>Author</span>
              </Link>
              {/* Bookmarks Tab */}
              <div
                onClick={() => handleBookMark(blog)}
                className="bg-primary ml-5 rounded-full text-3xl cursor-pointer text-white p-2 overflow-hidden hover:opacity-50 hover:scale-105"
              >
                <MdOutlineBookmarkAdd />
              </div>
            </div>
          </div>
          {/* Outlet */}
          <Outlet></Outlet>
        </article>
      </div>
    </div>
  );
}

export default Blog;
