import React from "react";
import model3 from '../../assets/model3.png'
export default function HeroSection() {
  return (
    <section className="bg-[#f5faec] px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden h-[500px]">
          {/* Background Image */}
          <img
            src={model3}
            alt="Beautiful skincare model"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end items-center text-center p-6">
            <h2 className="text-white text-2xl md:text-3xl font-medium mb-4">
              Feel Beautiful Inside and Out <br className="hidden md:block" /> with Every Product.
            </h2>
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
