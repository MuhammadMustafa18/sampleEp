import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./SmoothFadein.css";
const GradientFadeInText = ({ children, className = "", duration = 1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration, ease: "easeOut" }}
      className={`${className} mask-fade-in`}
    >
      {children}
    </motion.div>
  );
};

export default GradientFadeInText;
