import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import Bookmarks from "./pages/Bookmarks/Bookmarks.jsx";
import MainLayout from "./SharedLayout/MainLayout.jsx";
import Blog from "./pages/Blog/Blog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("https://dev.to/api/articles?per_page=25&top=7"),
      },
      {
        path: "/blog/:id",
        element: <Blog></Blog>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>
);
