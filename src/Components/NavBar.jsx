import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // set the theme intolocal
    localStorage.setItem("theme", theme);
    // get the theme from local
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  // Handle theme button using function
  const handleToggleTheme = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      <nav className="h-17">
        <div className="navbar bg-base-100 shadow-lg py-5 px-10 fixed z-10">
          <div className="flex-1">
            <NavLink
              to="./"
              className="btn btn-ghost text-3xl gap-0 text-primary font-bold"
            >
              Brain<span className="text-secondary">fuel</span>
            </NavLink>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-3 text-lg font-bold gap-5">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Home{" "}
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Blogs
              </NavLink>
              <NavLink
                to="/bookmarks"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                Bookmarks
              </NavLink>
            </ul>
            <label className="toggle text-base-content">
              <input
                onChange={handleToggleTheme}
                type="checkbox"
                className="theme-controller"
              />

              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>

              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
