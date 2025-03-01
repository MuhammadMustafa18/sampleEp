import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const RevealFromMiddle = ({ children, className = "", duration = 1.0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px" });

  // Keyframes for clip-path animation
  const clipPathKeyframes = [
    "inset(0 50% 0 50% round 50px)", // Start: Middle line with rounded corners
    "inset(0 25% 0 25% round 50px)", // Middle: Partially expanded
    "inset(0 0% 0 0% round 50px)", // End: Fully revealed
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: clipPathKeyframes[0] }} // Start with the middle line
      animate={
        isInView
          ? {
              clipPath: clipPathKeyframes, // Use keyframes for animation
            }
          : {}
      }
      transition={{
        duration,
        ease: "easeInOut", // Smooth easing
        times: [0, 0.5, 1], // Timing for keyframes (0%, 50%, 100%)
      }}
      className={className}
      style={{
        overflow: "hidden", // Ensure the content is clipped properly
      }}
    >
      {children}
    </motion.div>
  );
};

export default RevealFromMiddle;
