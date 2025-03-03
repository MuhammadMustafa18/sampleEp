import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SlideInText = ({
  children,
  className = "",
  duration = 0.5,
  direction = "up",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px" });

  // Define initial position based on direction
  const initialPositions = {
    left: { opacity: 0, x: -75 },
    right: { opacity: 0, x: 25 },
    up: { opacity: 0, y: -25 },
    down: { opacity: 0, y: 25 },
  };

  return (
    <motion.div
      ref={ref}
      initial={initialPositions[direction]}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideInText;
