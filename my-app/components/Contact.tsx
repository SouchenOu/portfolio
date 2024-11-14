"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  phone: string;
}

export const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Your message was sent successfully!');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        toast.error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while sending your message.');
    } finally {
      setLoading(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        phone: '',
      });
    }
  };

  return (
    <div id="contact" className="flex flex-col p-[30px]">
        <ToastContainer />

      <h1 className="lg:text-[40px] text-[20px] flex items-center justify-center gap-[10px] font-bold p-4 lg:p-9">
        Contact <span className="text-purple">Me</span>
      </h1>

      <div className='flex flex-col items-center justify-center lg:flex-row   p-[30px] '>
          
          <div className="w-full lg:w-1/3 xl:w-1/3 flex flex-col gap-8 max-w-2xl p-4 sm:p-8 rounded-lg shadow-md">
            {/* <h2 className="text-2xl sm:text-2xl lg:text-[30px] font-semibold text-center text-purple text-purple-600 mb-6">Get in Touch</h2> */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className='flex flex-col sm:flex-row items-center gap-4'>
                <div className="form-group w-full">
                  <label htmlFor="firstName" className="block text-lg sm:text-xl font-medium text-gray-600">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-transparent rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 text-gray-700 text-lg sm:text-xl font-medium placeholder-blue-200 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 hover:bg-blue-900 transition duration-300 ease-in-out transform hover:-translate-y-1"
                  />
                </div>
                <div className="form-group w-full">
                  <label htmlFor="lastName" className="block text-lg sm:text-xl font-medium text-gray-600">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-transparent rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 text-gray-700 text-lg sm:text-xl font-medium placeholder-blue-200 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 hover:bg-blue-900 transition duration-300 ease-in-out transform hover:-translate-y-1"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="form-group w-full">
                  <label htmlFor="email" className="block text-lg sm:text-xl font-medium text-gray-600">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-transparent rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 text-gray-700 text-lg sm:text-xl font-medium placeholder-blue-200 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 hover:bg-blue-900 transition duration-300 ease-in-out transform hover:-translate-y-1"
                  />
                </div>
                <div className="form-group w-full">
                  <label htmlFor="phone" className="block text-lg sm:text-xl font-medium text-gray-600">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-transparent rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 text-gray-700 text-lg sm:text-xl font-medium placeholder-blue-200 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 hover:bg-blue-900 transition duration-300 ease-in-out transform hover:-translate-y-1"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message" className="block text-lg sm:text-xl font-medium text-gray-600">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-transparent rounded-2xl bg-gradient-to-r from-blue-100 to-blue-200 text-gray-700 text-lg sm:text-xl font-medium placeholder-blue-200 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-700 focus:ring-opacity-50 hover:bg-blue-900 transition duration-300 ease-in-out transform hover:-translate-y-1"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-purple-600 text-lg sm:text-xl text-white bg-purple hover:bg-violet-900 font-semibold rounded-2xl shadow-lg hover:bg-purple-700 transition duration-300"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
        </div>

      </div>
      
    </div>
  );
};