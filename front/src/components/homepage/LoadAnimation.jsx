import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const LoadAnimation = ({ children, classname }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" }); // Element is in view when scrolled close

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -25   }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`
        ${classname}
        
      `}
    >
      {children}
    </motion.div>
  );
};

export default LoadAnimation;
