import MainHOC from "./page-transition/MainHOC";

const About = () => {
  return (
    <>
      <div className="text-7xl flex font-bold justify-center items-center h-screen w-full">
        About
      </div>
    </>
  );
};

export default MainHOC(About);
