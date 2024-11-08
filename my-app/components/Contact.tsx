"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  phone: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    phone: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Your message was sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
          phone: '',
        });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending your message.');
    }
  };

  return (
    <div id="contact" className="flex justify-between items-center min-h-screen 0 p-4">
    <img 
      alt="Image Description" 
      src="/conta.jpg" 
      className="w-full max-w-[800px] h-auto rounded-lg shadow-lg border-2 border-gray-300 transform transition-transform duration-300 ease-in-out hover:scale-105"
    />      
    <div className="w-full flex flex-col gap-[40px] max-w-2xl p-8 rounded-lg shadow-md">
        <h2 className="text-5xl font-semibold text-center text-purple mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className='flex items-center gap-[10px]'>
            <div className="form-group">
              <label htmlFor="firstName" className="block text-2xl font-medium text-gray-400">First Name</label>
              <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="
                    mt-1
                    block
                    w-full
                    px-6
                    py-4
                    border
                    border-transparent
                    rounded-xl
                    bg-gradient-to-r from-blue-100 to-blue-200
                    text-gray-700
                    text-xl
                    font-medium
                    placeholder-blue-200
                    shadow-md
                    focus:outline-none
                    focus:ring-4
                    focus:ring-blue-400
                    focus:ring-opacity-50
                    hover:bg-blue-900
                    transition
                    duration-300
                    ease-in-out
                    transform
                    hover:-translate-y-1
                  "
                />
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="block text-2xl font-medium text-gray-400">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1
                    block
                    w-full
                    px-6
                    py-4
                    border
                    border-transparent
                    rounded-xl
                    bg-gradient-to-r from-blue-100 to-blue-200
                    text-gray-700
                    text-xl
                    font-medium
                    placeholder-blue-200
                    shadow-md
                    focus:outline-none
                    focus:ring-4
                    focus:ring-blue-400
                    focus:ring-opacity-50
                    hover:bg-blue-900
                    transition
                    duration-300
                    ease-in-out
                    transform
                    hover:-translate-y-1"
              />
            </div>

          </div>
          <div className='flex items-center gap-[10px] '>
            <div className="form-group">
              <label htmlFor="email" className="block text-2xl  font-medium text-gray-400">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1
                    block
                    w-full
                    px-6
                    py-4
                    border
                    border-transparent
                    rounded-xl
                    bg-gradient-to-r from-blue-100 to-blue-200
                    text-gray-700
                    text-xl
                    font-medium
                    placeholder-blue-200
                    shadow-md
                    focus:outline-none
                    focus:ring-4
                    focus:ring-blue-400
                    focus:ring-opacity-50
                    hover:bg-blue-900
                    transition
                    duration-300
                    ease-in-out
                    transform
                    hover:-translate-y-1"
                  />
                </div>
                <div className="form-group">
              <label htmlFor="email" className="block text-2xl font-medium text-gray-400">Phone number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1
                    block
                    w-full
                    px-6
                    py-4
                    border
                    border-transparent
                    rounded-xl
                    bg-gradient-to-r from-blue-100 to-blue-200
                    text-gray-700
                    text-xl
                    font-medium
                    placeholder-blue-200
                    shadow-md
                    focus:outline-none
                    focus:ring-4
                    focus:ring-blue-400
                    focus:ring-opacity-50
                    hover:bg-blue-900
                    transition
                    duration-300
                    ease-in-out
                    transform
                    hover:-translate-y-1"
                  />
                </div>

          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="block text-2xl font-medium text-gray-400">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1
                    block
                    w-full
                    px-6
                    py-4
                    border
                    border-transparent
                    rounded-2xl
                    bg-gradient-to-r from-blue-100 to-blue-200
                    text-gray-700
                    text-xl
                    font-medium
                    placeholder-blue-200
                    shadow-md
                    focus:outline-none
                    focus:ring-4
                    focus:ring-blue-700
                    focus:ring-opacity-50
                    hover:bg-blue-900
                    transition
                    duration-300
                    ease-in-out
                    transform
                    hover:-translate-y-1"
                  rows={4}
                ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-4 bg-blue-900 text-xl text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};