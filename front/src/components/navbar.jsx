import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const [bg, setbg] = useState("bg-transparent");
   useEffect(() => {
      const unsubscribe = scrollYProgress.on("change", (latest) => {
        if (latest > 0.4) {
          // Adjust this value (0.2 = 20% of the page scrolled)
          setbg("backdrop-blur-md");
        }
        if(latest < 0.4){
          setbg("bg-transparent");
        }
      });
      return () => unsubscribe(); // Cleanup
    }, [scrollYProgress]);
  return (
    <div>
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
        className={`z-10 ${bg} font-primary text-black absolute py-4 px-6 left-0 w-full h-auto flex justify-between items-center`}
      >
        {/* Logo on the Left */}
        <div className="navbar-brand text-white flex flex-col">
          <div className="text-xl md:text-2xl">MARCEM</div>
          <div className="text-xs md:text-sm">EVENT SOLUTIONS</div>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Desktop Menu (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-4 md:space-x-6">
          <li>
            <a
              href="#"
              className="duration-300 font-medium text-cl md:text-base"
            >
              <div className="bg-white text-gray-700 px-4 py-3 rounded-lg">
                Our Services
              </div>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white transition-colors duration-300 font-extralight text-xl md:text-base"
            >
              <div className="backdrop-blur-xl backdrop-filter rounded-xl text-white px-10 py-3">
                Gallery
              </div>
            </a>
          </li>
        </ul>

        {/* Contact on the Right (Desktop Only) */}
        <div className="hidden md:block">
          <a
            href="#"
            className="text-white transition-colors duration-300 font-medium text-sm md:text-base"
          >
            Contact
          </a>
        </div>
      </motion.nav>

      {/* Mobile Menu (Collapsible) */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="md:hidden bg-gray-900 text-white absolute top-20 left-0 w-full z-20"
        >
          <ul className="flex flex-col space-y-4 p-6">
            <li>
              <a
                href="#"
                className="text-white transition-colors duration-300 font-medium text-sm"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white transition-colors duration-300 font-medium text-sm"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white transition-colors duration-300 font-medium text-sm"
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
