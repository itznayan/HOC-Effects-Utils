import { motion, useTransform } from "framer-motion";
import React from "react";

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 bg-stone-950 h-screen "
    >
      Section1
    </motion.div>
  );
};

export default Section1;
