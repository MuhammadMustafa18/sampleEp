import React from "react";
import img1 from "../../../assets/img1.jpg"
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SiYoutubeshorts } from "react-icons/si";
import SlideInText from "../Slidein";
import RevealFromMiddle from "../Revealfrommiddle";

function ContactForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-8">
      {/* Container */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            {/* Small heading */}
            <SlideInText direction="up" duration={1} delay={0.75}>
              <h4 className="text-gray-600 uppercase tracking-wide text-xs mb-2">
                Contact Us
              </h4>
            </SlideInText>
            {/* Main heading */}
            <SlideInText direction="down" duration={1} delay={0.5}>
              <h2 className="text-2xl lg:text-5xl mb-4 tracking-tight">
                Complete this form to contact our team
              </h2>
            </SlideInText>
            <SlideInText direction="left" duration={1} delay={0.75}>
              <h4 className="text-gray-400 uppercase tracking-wide text-xs mb-3">
                Follow Us
              </h4>
              {/* Social Icons */}
              <div className="flex items-center space-x-2 mb-8">
                {/* Replace # with actual links */}
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 bg-gray-50 p-2"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900  bg-gray-50 p-2"
                >
                  <GrInstagram />
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900  bg-gray-50 p-2"
                >
                  <SiYoutubeshorts />
                </a>
              </div>
            </SlideInText>

            {/* Image */}
            <SlideInText direction="inplace" duration={1} delay={1.0}>
              <div className="rounded-xl">
                <img
                  src={img1}
                  alt="City skyline"
                  className="w-2/3 h-56 object-cover rounded-2xl"
                />
              </div>
            </SlideInText>
          </div>

          {/* Right Column: The Form */}
          <SlideInText direction="left" duration={1} delay={2.0}>
            <div className="flex items-start lg:items-center">
              <form className="w-full space-y-6">
                {/* First & Last Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className=" bg-gray-50 rounded-md p-4 focus:outline-none focus:border-black"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className=" bg-gray-50 rounded-md p-4 focus:outline-none focus:border-black"
                  />
                </div>

                {/* Email Address */}
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full  bg-gray-50 rounded-md p-4 focus:outline-none focus:border-black"
                />

                {/* Location */}
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full  bg-gray-50 rounded-md p-4 "
                />

                {/* Message */}
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full  bg-gray-50 rounded-md p-4 "
                />

                {/* Submit Button */}
                <RevealFromMiddle>

                <button className="bg-black text-white px-10 py-3 rounded-full  text-md hover:bg-gray-700 transition-colors duration-300">
                  View all
                </button>
                </RevealFromMiddle>
              </form>
            </div>
          </SlideInText>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
