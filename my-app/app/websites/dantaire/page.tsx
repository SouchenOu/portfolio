"use client"
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const images = [
  "/dant2.png",
  "/dant3.png",
  "/dant4.png",
  "/dant5.png",
  "/dant6.png",
  "/dant7.png"
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
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-800 via-blue-900 to-gray-800 min-h-screen">
      <h1 className="text-5xl text-purple font-semibold mb-8 p-6 text-center shadow-lg">
        Welcome to the Dantaire Website
      </h1>
      
      <div className="relative w-full max-w-7xl h-[900px] overflow-hidden rounded-xl shadow-lg">
        {/* Image with smooth transition */}
        <img
          src={images[currentIndex]}
          alt={`Dantaire Image ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-in-out transform"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-purple-600 transition duration-300"
        >
          &#8592;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-purple-600 transition duration-300"
        >
          &#8594;
        </button>
      </div>

      <div className="mt-6 text-white text-lg font-medium">
        <span>{currentIndex + 1}</span> / <span>{images.length}</span>
      </div>

      <div className="mt-8 p-4 text-center">
        <a
          href="https://dantaire.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl flex text-purple-500 hover:text-purple-700 font-semibold items-center justify-center space-x-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 rounded-lg p-3 transition-all duration-300"
        >
          {/* Globe Icon */}
          <i className="fas fa-globe text-3xl text-white"></i>
          
          {/* Link Text */}
          <span className="flex gap-2 text-3xl font-medium">
            <span>Visit the live site:</span>
            <span className="underline text-violet-900">{'https://dantaire.com'}</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Page;