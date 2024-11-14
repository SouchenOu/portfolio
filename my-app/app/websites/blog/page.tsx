"use client";
import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const images = [
  "/30.png",
  "/31.png",
  "/32.png",
  "/33.png",
  "/34.png",
  "/35.png",
  "/36.png",
  "/37.png",
  "/38.png",
  "/39.png",
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
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen px-4 py-10">
      {/* Heading */}
      <h1 className="text-5xl text-purple-400 font-bold mb-10 text-center animate__animated animate__fadeInDown">
        Blog Website
      </h1>

      {/* Image Carousel */}
      <div className="relative w-full max-w-[1200px] h-[800px] overflow-hidden rounded-xl shadow-2xl transition-all duration-500 transform hover:scale-105 lg:block hidden">
        <img
          src={images[currentIndex]}
          alt={`Blog Image ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-xl transition-all duration-700 transform hover:scale-105"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-5 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300"
        >
          &#8592;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-5 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300"
        >
          &#8594;
        </button>
      </div>

      {/* Image Index */}
      <div className="mt-6 text-gray-200 text-lg">
        <span>{currentIndex + 1}</span> / <span>{images.length}</span>
      </div>

      {/* Visit Blog Link */}
      <div className="mt-10 text-center">
        <a
          href="https://blog-9t9d.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-purple-500 font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 px-8 py-3 rounded-full shadow-xl transition-all duration-500 flex items-center justify-center gap-3"
        >
          <i className="fas fa-globe text-white"></i>
          <span className="text-white">Visit the Blog Website</span>
        </a>
      </div>
    </div>
  );
};

export default Page;