import React, { useState } from "react";
import Button from "./Button";
import { AnimatePresence, delay, motion } from "framer-motion";
import Nav from "./Nav";

const Index = () => {
  const [isActive, setIsActive] = useState(false);
  const variants = {
    close: {
      top: 0,
      left: 0,
      width: 100,
      height: 40,
      transition: { ease: [0.85, 0, 0.15, 1], delay: 0.35, duration: 0.55 },
    },
    open: {
      left: "25px",
      top: "-20px",
      width: 400,
      height: 550,
      transition: { ease: [0.85, 0, 0.15, 1], duration: 0.55 },
    },
  };
  return (
    <div className="background bg-zinc-900 overflow-x-hidden w-full h-screen flex justify-end px-20 py-14">
      <AnimatePresence initial={false}>
        <motion.div
          variants={variants}
          className=" bg-white relative top-0 right-0 rounded-3xl"
          animate={isActive ? "open" : "close"}
        >
          {isActive && <Nav />}
        </motion.div>
      </AnimatePresence>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Index;
