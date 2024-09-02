import { motion } from "framer-motion";
import React from "react";

const withTransition = (WrappedComponent) => {
  return (props) => (
    <>
      <motion.div
        className="fixed bg-black h-screen w-full origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.6 }}
      />
      <WrappedComponent {...props} />
    </>
  );
};

export default withTransition;
