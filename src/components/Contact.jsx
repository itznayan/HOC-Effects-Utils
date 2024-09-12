import Magnetic from "./effects/Magnetic";
import MainHOC from "./page-transition/MainHOC";
import Layer from "./page-transition/Layer";
const Contact = () => {
  return (
    <>
      <div className="text-7xl flex font-bold justify-center items-center h-screen w-full">
        <Magnetic>Contact</Magnetic>
      </div>
    </>
  );
};

export default Layer(Contact);
