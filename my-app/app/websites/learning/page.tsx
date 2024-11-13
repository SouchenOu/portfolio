"use client";
import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


const images = [
  "/learn0.png",
  "/learn1.png",
  "/learn4.png",
  "/learn5.png",
  "/learn6.png",
  "/learn7.png",
];

export const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen px-4 py-6">
      {/* Heading */}
      <h1 className="text-4xl text-purple-500 font-bold mb-8 text-center animate__animated animate__fadeIn">
        Elearning application
      </h1>

      {/* Image Carousel */}
      <div className="relative w-full max-w-[1400px] h-[900px] overflow-hidden rounded-lg shadow-2xl">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-lg transition-transform duration-500 transform hover:scale-105"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-80 bg-black text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300"
        >
          &#8592;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-80 bg-black text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300"
        >
          &#8594;
        </button>
      </div>

      {/* Image Counter */}
      <div className="mt-6 text-gray-200 text-lg font-medium">
        <span>{currentIndex + 1}</span> / <span>{images.length}</span>
      </div>

      {/* Visit Link */}
      <div className="mt-10">
        <a
          href="https://learning.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-purple-500 hover:text-purple-700 font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-6 py-3 rounded-lg transition duration-300 flex items-center gap-3"
        >
          <i className="fas fa-globe text-xl"></i>
          Visit the live site
        </a>
      </div>
    </div>
  );
};

export default Page;