import React from "react";
import MagneticEffect from "./effects/MagneticEffect";
import Layer from "./page-transition/Layer";
const Home = () => {
  return (
    <div className="text-7xl flex font-bold justify-center items-center h-screen w-full">
      <MagneticEffect>Home</MagneticEffect>
    </div>
  );
};

export default Layer(Home);
