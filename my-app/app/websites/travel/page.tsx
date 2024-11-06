"use client"
import React, { useState } from 'react';

const images = [
  "/travel2.png",
  "/travel4.png",
  "/travel5.png",
  "/travel6.png",
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
    <div className="flex flex-col items-center justify-center  bg-gray-900 min-h-screen">
      <h1 className="text-3xl text-white mb-2 p-6">Welcome to the Elearning Website</h1>
      
      <div className="relative w-full max-w-[1600px] h-[1200px] overflow-hidden rounded-xl">
        {/* Image */}
        <img
          src={images[currentIndex]}
          alt={`Dantaire Image ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-xl"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white  p-2 rounded-full"
        >
          &#8592;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &#8594;
        </button>
      </div>

      {/* Image Index */}
      <div className="mt-4 text-white text-lg">
        <span>{currentIndex + 1}</span> / <span>{images.length}</span>
      </div>
    </div>
  );
};

export default Page;