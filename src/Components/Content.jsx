import React from "react";
import { useLoaderData } from "react-router-dom";
import Blog from "../pages/Blog/Blog";
import placeholder from "../assets/404.jpg";
import Markdown from "https://esm.sh/react-markdown@10";
import rehypeRaw from "rehype-raw";

function Content() {
  const blog = useLoaderData();
  const { cover_image, title, tags, body_html } = blog;
  return (
    <div>
      <div className="mx-auto group hover:no-underline focus:no-underline">
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500 mb-4"
          src={cover_image || placeholder}
        />
        {/* hastags */}
        {tags.map((tag) => (
          <a
            key={tag}
            href="#"
            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
          >
            #{tag}
          </a>
        ))}

        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold  group-focus:underline">
            {title}
          </h3>
          <div className="py-4">
            <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
