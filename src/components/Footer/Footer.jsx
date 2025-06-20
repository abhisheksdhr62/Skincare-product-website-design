import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1E2D28] text-white px-6 pt-16  relative overflow-hidden">
      {/* Foreground content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {/* Left column */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Join The Skincare</h2>
            <h2 className="text-2xl font-semibold">Community Now.</h2>
          </div>
          <div className="flex space-x-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-between items-start md:items-end space-y-6 md:space-y-0">
          <div className="text-right">
            <p className="text-sm text-gray-300">Get in Touch</p>
            <a href="#" className="text-xl font-medium hover:underline">
              contact.skincare.com
            </a>
          </div>
          <div className="flex space-x-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookies Policy</a>
          </div>
        </div>
      </div>

      {/* Big SKINCARE text below content */}
      <div className=" flex justify-center align-bottom ">
        <h1 className="text-[22vw] font-extrabold text-white/5 leading-none select-none">
          SKINCARE
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
