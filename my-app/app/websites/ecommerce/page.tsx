"use client";
import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from "next/image";


const images = [
  "/eco1.png",
  "/eco2.png",
  "/eco3.png",
  "/eco4.png",
  "/eco5.png",
  "/eco6.png",
];

const Page = () => {
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
        Ecommerce application
      </h1>

      {/* Image Carousel */}
      
      <div className="relative w-full max-w-[1400px] h-full  overflow-hidden rounded-lg shadow-2xl ">
        <div className="relative w-full h-[1000px] lg:block hidden">
          <Image
            src={images[currentIndex]}
            alt={`Blog Image ${currentIndex + 1}`}
            layout="fill"  // Let the image fill the container
            objectFit="cover" // Ensure it covers the area without distortion
            className="w-full h-full rounded-xl transition-all duration-700 transform hover:scale-105"
          />
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
      

        {/* Navigation Arrows */}
        
      </div>

      {/* Image Counter */}
      <div className="mt-6 text-gray-200 text-lg font-medium">
        <span>{currentIndex + 1}</span> / <span>{images.length}</span>
      </div>

      {/* Visit Link */}
      <div className="mt-10">
        <a
          href="https://Ecommerce.app/"
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