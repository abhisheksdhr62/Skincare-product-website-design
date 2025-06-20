import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import cart from "../../assets/cart.png"
import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.png'
const categories = ["New Arrival", "Cleansing", "Acne Fighter", "Anti Aging"];

const products = [
  {
    id: 1,
    name: "ALYA SKIN CLEANSER.",
    price: "FROM $29.99",
    category: "Cleansing",
    image: product1,
  },
  {
    id: 2,
    name: "RITUAL OF SAKURA.",
    price: "FROM $27.99",
    category: "New Arrival",
    image: product2,
  },
  {
    id: 3,
    name: "THE BODY LOTION.",
    price: "FROM $19.99",
    category: "Anti Aging",
    image: product3,
  },
];

export default function FilterProductSection() {
  const [activeCategory, setActiveCategory] = useState("New Arrival");

  return (
    <section className="bg-[#f5faec] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900">
          Feel Beautiful Inside and Out <br /> with Every Product.
        </h2>

        {/* Filter Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1 rounded-full text-sm border transition-all ${
                activeCategory === cat
                  ? "bg-black text-white"
                  : "border-gray-400 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-80"
              />
              <div className="flex justify-between items-center p-4 bg-[#f0f3eb]">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-xs text-gray-500">{product.price}</p>
                </div>
                <button
                  className={`p-2 rounded-full transition ${
                    product.category === activeCategory
                      ? "bg-gray-900 text-white"
                      : "hover:bg-gray-300"
                  }`}
                >
                  <img src={cart} size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
