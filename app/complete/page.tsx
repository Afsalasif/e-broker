import React from 'react';

const Page = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
   <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl mt-10 text-[#12115e] font-[sans-serif]">
      <h1 className="text-5xl uppercase font-extralight mb-6 text-center bg-gradient-to-r from-[#12115e] to-[#302c8e] bg-clip-text text-transparent">
        Thank You
      </h1>
      <h2 className="text-2xl text-center text-[#12115e]/80 mb-8">
        you will get an confirmation mail soon
      </h2>
      
      <div className="flex justify-center mt-12">
        <div className="bg-[#12115e] text-white py-4 px-8 rounded-full shadow-lg transform transition-transform hover:scale-105 duration-300">
          <span className="font-semibold">your registration is under process</span>
        </div>
      </div>

      <div className="mt-8 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-[#12115e] animate-bounce"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 11-8 8 8.01 8.01 0 018-8zm0 14a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M14.707 6.293a1 1 0 00-1.414 0L9 10.586 6.707 8.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l5-5a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
    </div>
  );
};

export default Page;
