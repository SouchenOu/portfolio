"use client";
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const images = [
  "/Book1.png",
  "/book2.png",
  "/book3.png",
  "/book4.png",
  "/book5.png",
  "/book6.png",
  "/book7.png",
  "/book8.png",
  "/book9.png",
  "/book10.png",
  "/book11.png",
  "/book12.png",
  "/book13.png",
  "/book14.png",
  "/book15.png",
  "/book16.png",
  "/book17.png",
  "/book18.png",
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
      <h1 className="text-4xl text-purple font-semibold mb-8 text-center animate__animated animate__fadeIn">
        Welcome to the Booking Website
      </h1>

      {/* Image Carousel */}
      <div className="relative w-full max-w-[2000px] h-[1100px] overflow-hidden rounded-xl shadow-2xl">
        <img
          src={images[currentIndex]}
          alt={`Chat Image ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-xl transition-all duration-500 transform hover:scale-105"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-4 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300"
        >
          &#8592;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-4 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300"
        >
          &#8594;
        </button>
      </div>

      <div className="mt-6 text-white text-lg">
        <span>{currentIndex + 1}</span> / <span>{images.length}</span>
      </div>

      <div className="mt-8 p-4 text-center">
        <a
          href="https://booking-hotelss.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl flex text-purple-500 hover:text-purple-700 font-semibold items-center justify-center space-x-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 rounded-lg p-3 transition-all duration-300"
        >
          {/* Globe Icon */}
          <i className="fas fa-globe text-3xl text-white"></i>
          
          {/* Link Text */}
          <span className="flex gap-2 text-3xl font-medium">
            <span>Visit the live site:</span>
            <span className="underline text-violet-900">{'https://booking-hotelss.netlify.app/'}</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Page;