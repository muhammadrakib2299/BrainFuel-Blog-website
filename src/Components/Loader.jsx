import React from "react";
import { ScaleLoader } from "react-spinners";
function Loader() {
  return (
    <div className="flex flex-col justify-center items-center py-50">
      <ScaleLoader size={100} color="#F92FD3"></ScaleLoader>
    </div>
  );
}

export default Loader;
