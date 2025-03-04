import { useState } from "react";
import {
  ChevronDown,
  SlidersHorizontal,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import CountUp from "./CountUp";
import img1 from "../../../assets/event1.webp"
import img3 from "../../../assets/event3.jfif";
import img2 from "../../../assets/event2.jpg";
import img4 from "../../../assets/event4.webp";
import Card from "./Card";
import SplitText from "../Splittext";
import SlideInText from "../Slidein";
import RevealFromMiddle from "../Revealfrommiddle";





export default function Featured() {
  const [selectedCategory, setSelectedCategory] = useState("Buy");
  const [selectedProperty, setSelectedProperty] = useState("Any property");
  const [selectedArea, setSelectedArea] = useState("All areas");

  return (
    <div className="p-6 bg-white">
        <SlideInText direction="up" duration={1.0} delay={0.75}>

      <div className="text-sm text-gray-500 mb-5">
        Recent AI Driven Recommendations
      </div>
        </SlideInText>

      <div className="flex justify-between ">
        <SlideInText direction="down" duration={1} delay={0.5}>
          <h2 className="text-5xl sm:text-7xl tracking-tighter font-medium mb-3">
            Recent Events
          </h2>
        </SlideInText>
        <div>
          <span className="text-5xl sm:text-7xl tracking-tighter  mr-2">
            <CountUp
              from={0}
              to={526}
              separator=","
              direction="up"
              duration={1.5}
              className="count-up-text"
            />
          </span>
          <span className="text-gray-500 text-xl">Events</span>
        </div>
      </div>
      <div className="flex items-center flex-wrap justify-between mt-4 text-sm sm:texl-lg">
        <SlideInText duration={1.0} direction="left">

        <div className="flex items-center flex-wrap gap-4 ">
          
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-3xl text-gray-700 ">
            <SlidersHorizontal size={16} /> Filter
          </button>

          <Dropdown label={selectedCategory} setLabel={setSelectedCategory} />
          <Dropdown label={selectedProperty} setLabel={setSelectedProperty} />
          <Dropdown label={selectedArea} setLabel={setSelectedArea} />
        </div>
        </SlideInText>

        <div className=" items-center gap-4">
          <RevealFromMiddle>

          <button className="bg-black text-white px-10 py-3 rounded-full text-md hover:bg-gray-700 transition-colors duration-300">
            View all
          </button>
          </RevealFromMiddle>

        </div>
      </div>
      <hr className="my-7 border-gray-300" />
      <FeaturedProperties />
    </div>
  );
}

const properties = [
  {
    id: "01",
    title: "Elegant Wedding at Rosewood Hall",
    location: "Rosewood Hall, London",
    image: img1, // Replace with actual image source
    guests: 100,
  },
  {
    id: "02",
    title: "Corporate Gala for XYZ Company",
    location: "Grand Hyatt Ballroom, New York",
    image: img2, // Replace with actual image source
    guests: 100,
  },
  {
    id: "03",
    title: "50th Birthday Bash - Retro Theme",
    location: "Private Villa, Miami",
    image: img3, // Replace with actual image source
    guests: 80,
  },
  {
    id: "04",
    title: "Baby Shower - Whimsical Garden Party",
    location: "The Greenhouse Café, California",
    image: img4, // Replace with actual image source
    guests: 40,
  },
];

export function FeaturedProperties() {
    const [activeId, setActiveId] = useState(null); // Track which property is active

    const toggleEffect = (id) => {
      setActiveId(activeId === id ? null : id); // Toggle effect for touch
    };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {properties.map((property) => (
        <div
          key={property.id}
          className={`relative rounded-2xl overflow-hidden shadow-lg transition duration-300 ease-in-out group
          ${activeId === property.id ? "is-active" : ""} `}
          onClick={() => toggleEffect(property.id)} // Toggle on click (mobile)
        >
          <img
            src={property.image}
            alt={property.title}
            className="w-full  h-[500px] sm:h-[580px] object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-2300 group-hover:opacity-0 is-active:opacity-0"></div>
          <div className="absolute top-4 left-4 flex items-center bg-white px-3 py-1 rounded-full text-sm font-semibold transition-opacity duration-300 group-hover:opacity-0">
            <MapPin size={16} className="mr-1" /> {property.location}
          </div>
          <div className="absolute bottom-4 left-4 text-white transition-opacity duration-300 group-hover:opacity-0">
            <p className="text-xl">{property.id}</p>
            <h3 className="text-3xl">{property.title}</h3>
          </div>
          <div className="absolute top-4 right-4 bg-white p-2 rounded-full transition-opacity duration-300 group-hover:opacity-0">
            <ArrowUpRight size={20} />
          </div>
          {/* White Overlay (Appears when card is hovered) */}

          <div className="absolute py-3 pr-4 flex flex-col justify-between top-0 left-0 w-full h-[350px] bg-gray-200 opacity-100 transition-transform duration-1600 ease-in-out -translate-y-full group-hover:translate-y-0 is-active:translate-y-0 ">
            <div className="flex flex-row mx-6 gap-4 py-3 items-center border-b-2 border-gray-300">
              <div className="texl-xl sm:text-3xl font-semibold">
                {property.id}
              </div>
              <button className="bg-transparent text-sm sm:text-lg ml-5 text-gray-600 border flex items-center border-gray-400 rounded-xl px-2 sm:px-2">
                <MapPin size={15} className="mr-1" /> {property.location}
              </button>

              

              <div className="ml-auto text-xl font-bold sm:text-3xl text-gray-700">
                {property.price}
              </div>
            </div>

            <div className="flex p-4">
              {/* Left Column: Two divs stacked vertically */}
              <div className="flex flex-col">
                <div className="flex flex-row px-4 py-2">
                  <div className="text-gray-400 mr-2   text-xl">Guests:</div>
                  <div className="text-xl font-bold">{property.guests}</div>
                </div>
                <div className="px-4 text-4xl">{property.title}</div>
              </div>

              {/* Right Column: Third div horizontally aligned */}
              <div className="bg-gray-300 flex flex-col justify-between py-3 px-3 ml-auto rounded-2xl w-34">
                <ArrowUpRight size={20} className="ml-auto" />
                <div className="mr-auto">
                  View <br /> Details
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bg-gray-200 transition-transform top-0 left-0 w-1/40 h-full duration-1200 ease-in-out -translate-x-full group-hover:translate-x-0 is-active:translate-x-0"></div>
          <div className="absolute bg-gray-200 transition-transform top-0 right-0 w-1/40 h-full duration-1200 ease-in-out translate-x-full group-hover:translate-x-0 is-active:translate-x-0"></div>
          <div className="absolute bg-gray-200 transition-transform bottom-0 left-0 w-full h-1/40 duration-1200 ease-in-out translate-y-full group-hover:translate-y-0 is-active:translate-y-0"></div>
        </div>
      ))}
    </div>
  );
}




function Dropdown({ label, setLabel }) {
  return (
    <button className="flex items-center gap-2 px-6 py-3  rounded-3xl bg-gray-50 text-gray-700">
      {label} <ChevronDown size={16} />
    </button>
  );
}
