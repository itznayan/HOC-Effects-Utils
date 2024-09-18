import { motion, useTransform } from "framer-motion";
import React from "react";

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative bg-teal-950 h-screen"
    >
      Section1
    </motion.div>
  );
};

export default Section2;
