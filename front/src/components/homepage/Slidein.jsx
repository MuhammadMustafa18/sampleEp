import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SlideInText = ({
  children,
  className = "",
  duration = 0.5,
  direction = "up",
  delay = 0, // Add a delay prop
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "100px" });

  // Define initial position based on direction
  const initialPositions = {
    inplace: { opacity: 0 },
    left: { opacity: 0, x: -75 },
    right: { opacity: 0, x: 25 },
    up: { opacity: 0, y: -75 },
    down: { opacity: 0, y: 75 },
  };

  return (
    <motion.div
      ref={ref}
      initial={initialPositions[direction]}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay }} // Apply the delay here
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideInText;
