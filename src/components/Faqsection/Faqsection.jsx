import React, { useState } from "react";
import { Plus, Minus, Headphones } from "lucide-react";
import product3 from '../../assets/product3.png'
import headphone from '../../assets/headphone.png'
const faqs = [
  {
    question: "Are your products safe for sensitive skin?",
    answer: "Yes! All our products are dermatologist-tested and designed for sensitive skin types.",
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
  },
  {
    question: "What’s your return policy?",
    answer: "You can return products within 30 days of purchase if you're not satisfied.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 50 countries worldwide. Shipping charges may apply.",
  },
  {
    question: "How do I choose the right product?",
    answer: "Use our product quiz or reach out to our support team for personalized recommendations.",
  },
];

export default function Faqsection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-[#f5faec] px-4 py-16 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left Image Section */}
        <div className="relative">
          <img
            src={product3} 
            alt="FAQ Support"
            className="w-full h-auto rounded-2xl object-cover max-h-150"
          />
          {/* Badge */}
          <div className="absolute bottom-4 left-4 bg-[#e6f0dc] px-4 py-2 rounded-full flex items-center text-sm text-gray-700 space-x-2 shadow">
            <img src={headphone} className="w-5 h-5" />
            <span>24/7 We're Here to Help You</span>
          </div>
          
        </div>

        {/* Right FAQ Section */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <span className="text-sm border border-gray-400 px-4 py-1 rounded-full text-gray-800">
              Frequently Asked Question
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Answers to Your <br /> Skincare Questions, All <br /> in One Place.
          </h2>

          <div className="space-y-3">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className={`border rounded-lg p-4 ${
                  activeIndex === idx ? "border-yellow-400 bg-yellow-50" : "bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="font-medium text-gray-800">{item.question}</span>
                  {activeIndex === idx ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </button>
                {activeIndex === idx && (
                  <p className="text-sm text-gray-700 mt-3">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
