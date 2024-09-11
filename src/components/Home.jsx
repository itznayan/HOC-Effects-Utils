import React from "react";
import withTransition from "./page-transition/WithTransition";
import MagneticEffect from "./effects/MagneticEffect";

const Home = () => {
  return (
    <div className="text-7xl flex font-bold justify-center items-center h-screen w-full">
      <MagneticEffect>Home</MagneticEffect>
    </div>
  );
};

export default withTransition(Home);
