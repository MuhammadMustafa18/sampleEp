import { motion } from "framer-motion";
import heroVideo from "../assets/hero2.mp4";
import { useRef, useEffect, useState } from "react";
import { useSprings, animated } from "@react-spring/web";
import RevealFromMiddle from "./homepage/Revealfrommiddle";

const BlurText = ({
  text = "",
  delay = 100,
  className = "",
  animateBy = "words", // 'words' or 'letters'
  direction = "top", // 'top' or 'bottom'
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = "easeOutCubic",
  onAnimationComplete,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  // Default animations based on direction
  const defaultFrom =
    direction === "top"
      ? {
          filter: "blur(10px)",
          opacity: 0,
          transform: "translate3d(0,-50px,0)",
        }
      : {
          filter: "blur(10px)",
          opacity: 0,
          transform: "translate3d(0,50px,0)",
        };

  const defaultTo = [
    {
      filter: "blur(5px)",
      opacity: 0.5,
      transform:
        direction === "top" ? "translate3d(0,5px,0)" : "translate3d(0,-5px,0)",
    },
    { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next) => {
            for (const step of animationTo || defaultTo) {
              await next(step);
            }
            animatedCount.current += 1;
            if (
              animatedCount.current === elements.length &&
              onAnimationComplete
            ) {
              onAnimationComplete();
            }
          }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <p
      ref={ref}
      className={`blur-text ${className} inline-block text-center`}
      style={{ whiteSpace: "pre-wrap" }} // Preserve spaces for better readability
    >
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={props}
          className="inline-block transition-transform will-change-[transform,filter,opacity]"
        >
          {elements[index] === " " ? "\u00A0" : elements[index]}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </animated.span>
      ))}
    </p>
  );
};

const Hero = () => {
  return (
    <div className="hero h-screen w-full relative flex items-center bg-black justify-center">
      {/* Background Video */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        initial={{ filter: "blur(20px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Text & Button */}
      <div className="text-center z-10">
        <BlurText
          text="Expert Event Solutions for Unforgettable Experiences!"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 text-white font-primary shadow-xl"
        />
        <RevealFromMiddle>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors duration-300">
          Get Started
        </button>
        </RevealFromMiddle>
      </div>
    </div>
  );
};

export default Hero;
