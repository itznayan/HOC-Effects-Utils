import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
