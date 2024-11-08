"use client";
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const images = [
  "/mark1.png",
  "/mark2.png",
  "/mark3.png",
  "/mark4.png",
  "/mark5.png",
  "/mark6.png",
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
    <div className="flex flex-col items-center justify-center bg-gray-900 min-h-screen px-4 py-6">
      {/* Heading */}
      <h1 className="text-4xl text-purple font-semibold mb-6 text-center">
        Welcome to the Marketing Website
      </h1>

      {/* Image Carousel */}
      <div className="relative w-full max-w-[2000px] h-[1200px] overflow-hidden rounded-xl shadow-xl">
        <img
          src={images[currentIndex]}
          alt={`Marketing Image ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-xl transition-transform transform hover:scale-105 duration-300"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75 transition-all"
        >
          &#8592;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75 transition-all"
        >
          &#8594;
        </button>
      </div>

      {/* Image Index */}
      <div className="mt-6 text-white text-lg">
        <span>{currentIndex + 1}</span> / <span>{images.length}</span>
      </div>

      <div className="mt-8 p-4 text-center">
        <a
          href="https://digital-marketing-agency-rho.vercel.app/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl flex  font-semibold items-center justify-center space-x-4 bg-gradient-to-r   rounded-lg p-4 transition-all duration-300"
        >
          <i className="fas fa-globe text-3xl text-white"></i>
          <span className="flex gap-2 text-2xl font-medium">
            <span>Visit the Marketing Website:</span>
            <span className="underline text-violet-900">https://digital-marketing-agency-rho.vercel.app/</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Page;