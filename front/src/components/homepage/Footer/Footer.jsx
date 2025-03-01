import React from "react";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import mapimg from "../../../assets/map.png"
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-15 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="font-bold text-lg">
            Dubai <br />
            Realty
          </h2>
          <p className="mt-2 text-gray-800 font-medium">
            Building Your Dreams <br />
            In Real Estate
          </p>
          <div className="mt-24">
            <p className="text-lg mb-4">Subscribe to our news</p>
            <p className="text-sm text-gray-400 mb-4">
              Stay informed and never miss a beat. Subscribe to our exclusive
              news updates!
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="mb-6 p-2 w-full border-b "
            />
            <button className="flex items-center gap-2 px-6 py-2 text-sm rounded-3xl bg-black text-white">
              Subscribe
            </button>
          </div>
          <div className="mt-8 text-sm">
            <p className="text-gray-400">Copyright © 2025 Dubai Realty</p>
            <div className="flex  gap-4 mt-4">
              <span>Terms of Service</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="ml-14 ">
          <h3 className="font-semibold text-md mb-10">Quick Navigation</h3>
          <ul className="mt-2 text-gray-400 text-sm">
            <li className="mb-6">Home</li>
            <li className="mb-6">Our Properties</li>
            <li className="mb-6">Our Advantages</li>
            <li className="mb-6">Our Team</li>
            <li className="mb-6">Careers</li>
            <li className="mb-6">Mission and Values</li>
          </ul>
        </div>

        {/* Properties */}
        <div>
          <h3 className="font-semibold text-md mb-10">Properties</h3>
          <ul className="mt-2 text-gray-400 text-sm">
            <li className="mb-6">Apartments for Sale</li>
            <li className="mb-6">Villas for Sale</li>
            <li className="mb-6"> Townhouses for Sale</li>
            <li className="mb-6">New Developments</li>
            <li className="mb-6">Luxury Properties</li>
            <li className="mb-6">Sea View Properties</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-left">
          <h3 className="font-semibold text-3xl">
            We are here to change your future.
          </h3>
          <div className="flex flex-row items-center gap-4 ">
            <button className="flex items-center gap-2 px-6 py-2 mt-6 text-sm rounded-3xl bg-black text-white">
              Contact Us
            </button>
            <div className="flex gap-4 mt-5 text-black">
              <MdEmail size={32} />
              <FaTelegramPlane size={32} />
            </div>
          </div>
          <div className="mt-16">
            <img src={mapimg} alt="Map" className="w-2/3 rounded-xl" />
            <p className="mt-4 text-sm font-bold">
              123 Zayed Road, <br />
              Dubai Marina, <br />
              Dubai, United Arab Emirates
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
    </footer>
  );
};

export default Footer;
