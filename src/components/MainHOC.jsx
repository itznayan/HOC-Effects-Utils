import { motion } from "framer-motion";
import React from "react";

const MainHOC = (WrappedComponent) => {
  return () => (
    <>
      <motion.div
        className="fixed bg-black h-screen w-full origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="fixed bg-black h-screen w-full origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.8 }}
      />
      <WrappedComponent />
    </>
  );
};

export default MainHOC;
