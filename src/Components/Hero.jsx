function Hero() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
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
            <div className="flex justify-center items-center content-center gap-2">
              <button className="btn btn-primary">Read Blogs</button>
              <button className="btn btn-primary">See Bookmarks</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
