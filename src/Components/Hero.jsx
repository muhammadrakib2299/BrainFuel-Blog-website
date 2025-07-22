import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-auto">
            <h1 className="text-5xl font-bold">
              Welcome to{" "}
              <span className="text-secondary">Brain Fuels Blogs</span>
            </h1>
            <p className="py-6 max-w-lg text-center mx-auto">
              Discover a world of ideas, insights, and inspiration. BrainFuel
              Blogs brings you thoughtful articles on technology, creativity,
              self-growth, and beyond. Whether you're here to learn, explore, or
              just take a mental break, you're in the right place.
            </p>
            <div className="flex justify-center items-center content-center gap-5 pt-2">
              <Link
                to="./blogs"
                class="relative inline-block px-4 py-2 font-medium group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                <span class="relative text-black group-hover:text-white">
                  See Blogs
                </span>
              </Link>
              <Link
                to="./bookmarks"
                class="relative inline-block px-4 py-2 font-medium group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                <span class="relative text-black group-hover:text-white">
                  See Bookmarks
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
