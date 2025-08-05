import React from "react";
import NavBar from "../../Components/NavBar";
import Hero from "../../Components/Hero";
import svg from "../../assets/wave.svg";
import Loader from "../../Components/Loader";

function Home() {
  return (
    <div>
      <div className="relative">
        <Hero></Hero>
        <img className="absolute bottom-0 w-full" src={svg} alt="" />
      </div>
    </div>
  );
}

export default Home;
