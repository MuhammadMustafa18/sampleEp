import React, { useEffect, useState } from "react";
import { motion, useAnimation, useScroll } from "framer-motion";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import RevealFromMiddle from "./Revealfrommiddle";

const CutCornerSquare = ({ backgroundImage, text, overlay }) => {
  
  return (
    <div className="relative w-0 h-0 sm:w-62 sm:h-64">
      {/* White Upper Portion (only if overlay exists) */}
      {overlay && (
        <div
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath:
              "polygon(0 0, calc(100% - 100px) 0, 100% 100px, 100% 100%, 5px 100%, 0 calc(100% - 10px))",
          }}
          className={`absolute w-61.75 top-0 right-0  ${overlay} bg-gray-100 z-10`}
        >
          <span
            className={`absolute bottom-0 left-1/3 ml-2 transform -translate-x-1/2 -translate-y-1/6 text-4xl font-medium text-black`}
          >
            {text}
          </span>

          {/* Upper-left text */}
          <span className={`absolute top-2 left-2  text-black`}>Marcem</span>
        </div>
      )}

      {/* Square with cut-off corners */}
      <div
        className="relative w-full h-full text-left z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          clipPath:
            "polygon(0 0, calc(100% - 100px) 0, 100% 100px, 100% 100%, 100px 100%, 0 calc(100% - 100px))",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        {/* Text color changes based on overlay */}
        <span
          className={`absolute top-1/2 left-1/3 ml-3 transform -translate-x-1/2 -translate-y-1/2 text-4xl ${
            overlay ? "text-black" : "text-white"
          }`}
        >
          {text}
        </span>

        {/* Upper-left text */}
        <span
          className={`absolute top-2 left-2  ${
            overlay ? "text-black" : "text-white"
          }`}
        >
          Marcem
        </span>

        {/* Bottom-right text */}
        <span className="absolute bottom-2 right-2  text-white">
          Event Solutions
        </span>
      </div>
    </div>
  );
};



function Button() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    

    <button class="bg-black text-white border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
      <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
      Know More
    </button>
  );
}



export const TypewriterEffect = ({
  text,
  mode = "line",
  className,
  onAnimationComplete,
}) => {
  const controls = useAnimation(); // Animation controls
  const { scrollYProgress } = useScroll(); // Track scroll progress
  const content = mode === "line" ? text.split("\n") : text.split(" ");
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    let hasAnimated = false; // Track whether the animation has been triggered

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.15 && !hasAnimated) {
        // Trigger animation only if it hasn't already been triggered
        controls.start({
          opacity: 1,
          y: 0,
          scale: 1,
        });
        hasAnimated = true; // Mark as animated
      } else if (latest <= 0.15 && hasAnimated) {
        // Reset animation if the user scrolls back above the threshold
        controls.stop(); // Stop any ongoing animations
        controls.set({ opacity: 0, y: 20, scale: 0.9 }); // Reset to initial state
        hasAnimated = false; // Allow animation to trigger again
      }
    });

    return () => unsubscribe(); // Cleanup
  }, [scrollYProgress, controls]);

  return (
    <div className="max-w-7xl">
      <motion.div>
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={controls} // Use controls here
            transition={{
              duration: 1,
              delay: index * 0.1, // Smooth staggered delay
              ease: "easeOut",
            }}
            className={className}
            onAnimationComplete={() => {
              if (index === content.length - 1) {
                setIsAnimated(true);
                onAnimationComplete?.(); // Call the parent callback once all items are animated
              }
            }}
          >
            {mode === "line" ? item : `${item} `}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
const Description = () => {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const { scrollYProgress } = useScroll();

  const [isTypewriterDone, setIsTypewriterDone] = useState(false); // Tracks if all typewriter animations are complete
  const [hasAnimated, setHasAnimated] = useState(false); // Tracks if the subsequent animations have started

  const box1y = [-110, -109, -310, -310, -310, -599, -600];
  const box2y = [-600, -599, -310, -310, -310, -109, -110];

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.15 && !hasAnimated && isTypewriterDone) {
        // Trigger animations only if typewriter is done and hasn't animated yet
        controls.start({
          y: box1y,
          opacity: [0, 0.9, 1, 1, 1, 0.9, 0],
        });
        controls2.start({
          y: box2y,
          opacity: [0, 0.9, 1, 1, 1, 0.9, 0],
        });
        setHasAnimated(true); // Prevent further animations
      }else if (latest <= 0.15 && hasAnimated) {
        controls.stop(); // Stop any ongoing animations
        controls2.stop();
        controls.set({ y: 100, opacity: 0 }); // Reset to initial state
        controls2.set({y: 100, opacity: 0 }); // Reset to initial state
        setHasAnimated(false); // Allow animation to trigger again
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, controls, controls2, isTypewriterDone, hasAnimated]);

  const onAnimationComplete = () => {
    console.log("Typewriter animation completed");
    setIsTypewriterDone(true); // Update state when typewriter animation is done
  };

  const sampleText =
    "Marcem Event Planner is Karachi's premier event planning company, dedicated to crafting unforgettable experiences. We elevate event beyond the ordinary.";
  const heading = "Who are we";

  return (
    <div className="flex flex-col items-center justify-center">
      {/* First TypewriterEffect */}
      <TypewriterEffect
        text={heading}
        mode="line"
        className="mb-8 text-md sm:text-xl text-center font-medium text-amber-600"
        onAnimationComplete={onAnimationComplete} // Pass callback
      />

      {/* Second TypewriterEffect */}
      <div className="">
        <TypewriterEffect
          text={sampleText}
          mode="line"
          className="mb-8 text-2xl sm:text-5xl text-center text-black"
          onAnimationComplete={onAnimationComplete} // Pass callback
        />
      </div>

      {/* Button */}
      <RevealFromMiddle>

      <button className="bg-black text-white px-10 py-3 rounded-full text-md hover:bg-gray-700 transition-colors duration-300">
        Know More
      </button>
      </RevealFromMiddle>

      {/* Subsequent Animations */}
      <div className="flex justify-center">
        <motion.div
          className="w-auto mx-4 sm:block hidden"
          initial={{ x: -25, y: 100, opacity: 0 }}
          animate={controls}
          whileTap={{ scale: 0.9, rotate: -5 }}
          transition={{
            duration: 3,
            times: [0, 0.1, 0.3, 0.5, 0.7, 0.85, 1],
            ease: "easeInOut",
          }}
        >
          <CutCornerSquare backgroundImage={img1} text="Hello World" />
        </motion.div>
        <motion.div
          className="w-auto mx-4 sm:block hidden"
          initial={{ x: 0, y: 100, opacity: 0 }}
          animate={controls2}
          whileTap={{ scale: 0.9, rotate: -5 }}
          transition={{
            duration: 3,
            times: [0, 0.1, 0.3, 0.5, 0.7, 0.85, 1],
            ease: "easeInOut",
          }}
        >
          <CutCornerSquare
            backgroundImage={img2}
            overlay="h-2/3"
            text="Hello World"
          />
        </motion.div>
        <motion.div
          className="w-auto mx-4 sm:block hidden"
          initial={{ x: 25, y: 100, opacity: 0 }}
          animate={controls}
          whileTap={{ scale: 0.9, rotate: -5 }}
          transition={{
            duration: 3,
            times: [0, 0.1, 0.3, 0.5, 0.7, 0.85, 1],
            ease: "easeInOut",
          }}
        >
          <CutCornerSquare backgroundImage={img3} text="Hello World" />
        </motion.div>
        <motion.div
          className="w-auto mx-4 sm:block hidden"
          initial={{ x: 50, y: 100, opacity: 0 }}
          animate={controls2}
          whileTap={{ scale: 0.9, rotate: -5 }}
          transition={{
            duration: 3,
            times: [0, 0.1, 0.3, 0.5, 0.7, 0.85, 1],
            ease: "easeInOut",
          }}
        >
          <CutCornerSquare
            backgroundImage={img4}
            overlay="h-2/3"
            text="Hello World"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
