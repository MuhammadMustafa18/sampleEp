import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const RevealFadeInText = ({
  children,
  className = "",
  duration = 2,
  delay = 0.5,
  containerHeight = "50px",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "100px" });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        height: 0, // Start with no height (invisible)
        overflow: "hidden", // Hide the overflow to make it "invisible"
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              height: containerHeight, // Expand to show the content inside the container
            }
          : {}
      }
      transition={{
        duration: duration,
        delay: delay, // Delay for the animation
      }}
      className={`${className} overflow-hidden`}
      style={{ height: containerHeight }} // Set the fixed height of the container
    >
      {children}
    </motion.div>
  );
};

export default RevealFadeInText;
