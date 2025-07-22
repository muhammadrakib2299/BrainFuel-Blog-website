import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleBlogCart from "../../Components/SingleBlogCart";

function Blogs() {
  // Loading data from fetch API in main jsx router
  const blogs = useLoaderData();
  return (
    <div className="py-10">
      <section className="text-gray-100">
        <div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900 bg-gray-900"
          >
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500 bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Noster tincidunt reprimique ad pro
              </h3>
              <span className="text-xs text-gray-400 text-gray-400">
                February 19, 2021
              </span>
              <p>
                Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                in graece fuisset, eos affert putent doctus id.
              </p>
            </div>
          </a>

          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <SingleBlogCart key={blog.id} blog={blog}></SingleBlogCart>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
