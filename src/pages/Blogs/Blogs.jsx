import React from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import SingleBlogCart from "../../Components/SingleBlogCart";
import Loader from "../../Components/Loader";

function Blogs() {
  // Loading data from fetch API in main jsx router
  const blogs = useLoaderData();

  // Showing loading spinner in UI
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loader></Loader>;

  return (
    <div className="py-10">
      <section className="text-gray-100">
        <div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">
          {/* Show the 1st blog */}
          <Link
            to={`/blog/${blogs[0].id}`}
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900"
          >
            <img
              src={blogs[0].cover_image}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 "
            />
            <div className="p-6 space-y-2 lg:col-span-5 py-8">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {blogs[0].title}
              </h3>
              <span className="text-xs text-gray-40">
                {new Date(blogs[0].published_at).toLocaleDateString()}
              </span>
              <p>{blogs[0].description}</p>
            </div>
          </Link>

          {/* Single blog container */}
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(1, 25).map((blog) => (
              <SingleBlogCart key={blog.id} blog={blog}></SingleBlogCart>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
