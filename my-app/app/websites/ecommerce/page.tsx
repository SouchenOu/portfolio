"use client";
import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


const images = [
  "/eco1.png",
  "/eco2.png",
  "/eco3.png",
  "/eco4.png",
  "/eco5.png",
  "/eco6.png",
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
    <div className="flex flex-col items-center justify-center bg-gray-900 min-h-screen p-6">
      <h1 className="text-4xl text-purple font-bold mb-4 text-center">
        Welcome to the Ecommerce Website
      </h1>
      
      <div className="relative w-full max-w-[2000px] h-[1440px] overflow-hidden rounded-xl shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Ecommerce Image ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-xl transition-transform transform hover:scale-105"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
        >
          &#8592;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
        >
          &#8594;
        </button>
      </div>

      {/* Image Index */}
      <div className="mt-4 text-white text-lg">
        <span>{currentIndex + 1}</span> / <span>{images.length}</span>
      </div>

      {/* Visit the live site Link */}
      <div className="mt-8 p-4 text-center">
        <a
          href="https://Ecommerce.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl flex text-purple-500 hover:text-purple-700 font-semibold items-center justify-center space-x-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 rounded-lg p-4 transition-all duration-300"
        >
          <i className="fas fa-globe text-3xl text-white"></i>
          <span className="flex gap-2 text-3xl font-medium">
            <span>Visit the live site:</span>
            <span className="underline text-violet-900">https://Ecommerce.com</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Page;