import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AnimatePresence, useScroll, useTransform } from "framer-motion";
import Home from "./components/Home";
import Section1 from "./components/section-transition/Section1";
import Section2 from "./components/section-transition/Section2";
import { useEffect, useRef } from "react";
import StickyFooter from "./components/Sticky_Footer/StickyFooter";
import NavbarMain from "./components/navbar/Nav";
import Button from "./components/navbar/Button";
import Index from "./components/navbar/Index";

const App = () => {
  const location = useLocation();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {}, []);
  return (
    <>
      {/* <Navbar /> */}

      {/* Page Transitions  */}

      {/* <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
      </AnimatePresence> */}

      {/* **END** */}

      {/* Section Transtion */}
      {/* <div ref={container} className="h-[200vh] relative ">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </div> */}

      {/* Sticky Footer */}
      {/* <StickyFooter /> */}

      <Index />
    </>
  );
};

export default App;
