import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";

function SingleBlogCart({ blog, deletable }) {
  const { cover_image, title, description, published_at, id } = blog;

  return (
    <div className="flex relative">
      <div className="bg-gray-900 p-3 rounded-lg">
        <Link
          to={`/blog/${id}`}
          className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
        >
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 bg-gray-500"
            src={cover_image || placeholder}
          />

          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs text-white">
              {" "}
              {new Date(published_at).toLocaleDateString()}
            </span>
            <p className="text-white py-4">{description}</p>
          </div>
        </Link>
        {deletable && (
          <div className="absolute bg-primary p-3 rounded-full -top-5 -right-5 cursor-pointer hover:scale-105">
            <MdDeleteForever
              size={23}
              className="text-white group-hover:text-primary"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleBlogCart;
