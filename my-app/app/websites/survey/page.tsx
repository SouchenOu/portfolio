"use client"
import React, { useState } from 'react';

const images = [
  "/1h.png",
  "/2h.png",
  "/3h.png",
  "/4h.png",
  "/5h.png",
  "/6h.png",
  "/7h.png",
  "/8h.png",
  "/9h.png",
  "/10h.png",
  "/11h.png",
  "/12h.png",
  "/13h.png",
  "/14h.png",
  "/15h.png",
  "/16h.png",
  "/17h.png",
  "/18h.png",

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
      <h1 className="text-3xl text-white mb-2 p-6">Welcome to the survey Website</h1>
      
      <div className="relative w-full max-w-[2300px] h-[1200px] overflow-hidden rounded-xl">
        {/* Image */}
        <img
          src={images[currentIndex]}
          alt={`Survey Image ${currentIndex + 1}`}
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