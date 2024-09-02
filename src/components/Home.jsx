import React from "react";
import withTransition from "./WithTransition";
import MainHOC from "./MainHOC";

const Home = () => {
  return (
    <div className="text-7xl flex font-bold justify-center items-center h-screen w-full">
      Home
    </div>
  );
};

export default MainHOC(Home);
