import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { RiDoubleQuotesR } from "react-icons/ri";
import SlideInText from "../Slidein";
import Fadein from "../Fadein";

const testimonials = [
  {
    text: "Working with this team was an absolute pleasure. They helped me find the perfect property that matched all my needs and preferences. Their expertise and attention to detail made the entire process smooth and stress-free. I couldn’t be happier with my new home!",
    name: "ali",
    location: "Dubai",
    date: "December 2024",
    image: "https://randomuser.me/api/portraits/men/1.jpg ",
  },
  {
    text: "yo with this team was an absolute pleasure. They helped me find the perfect property that matched all my needs and preferences. Their expertise and attention to detail made the entire process smooth and stress-free. I couldn’t be happier with my new home!",
    name: "James",
    location: "Dubai",
    date: "December 2024",
    image: "https://randomuser.me/api/portraits/men/1.jpg ",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-start px-8 mt-24 mb-36 bg-white text-gray-900">
      <h2 className="lg:text-6xl mb-30 text-center sm:text-4xl">
        What Our Clients Say
      </h2>
      <div className="flex flex-col sm:flex-row justify-between lg:items-start sm:items-center w-full space-x-4 sm:space-x-0">
        <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
          <div className="flex -space-x-2 items-center justify-center sm:justify-start">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full shadow-md">
              <ArrowUpRight className="text-black w-8 h-8" />
            </div>
            <img
              className="w-12 h-12 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="user"
            />
            <img
              className="w-12 h-12 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/3.jpg"
              alt="user"
            />
            <img
              className="w-12 h-12 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/4.jpg"
              alt="user"
            />
            <span className="text-4xl tracking-tight ml-8 font-medium flex items-center sm:text-2xl">
              125+{" "}
              <span className="text-gray-400 ml-2 text-2xl sm:text-lg">
                Reviews
              </span>
            </span>
          </div>
        </div>
        <div className="w-full sm:w-2/3 flex flex-col sm:flex-row items-center md:items-start">
          <RiDoubleQuotesR className="p-3 text-white bg-amber-500 w-12 h-12 mb-4 rounded-full" />
          <div className="rounded-lg lg:mt-0 sm:mt-4 sm:ml-8 max-w-5xl text-2xl text-center sm:text-left">
            <div className="lg:max-w-3xl">
              <SlideInText direction="inplace" key={index}>
                <p className="text-gray-900 text-lg sm:text-2xl">
                  {testimonials[index].text}
                </p>
              </SlideInText>
            </div>

            <div className="flex flex-col items-center sm:flex-row sm:justify-between  w-full mt-4">
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                />
                <div className="ml-3 text-left">
                  <p className="text-lg font-semibold">
                    {testimonials[index].name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[index].location}, {testimonials[index].date}
                  </p>
                </div>
              </div>
              <div className="flex justify-center sm:justify-center md:justify-end lg:justify-en w-full space-x-4 mt-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
