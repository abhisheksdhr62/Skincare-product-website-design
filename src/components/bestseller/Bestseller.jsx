import arrow1 from "../../assets/arrow1.png"
import arrow2 from "../../assets/arrow2.png"
import cart from "../../assets/cart.png"
import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.png'
export default function BestSeller() {
  const products = [
    {
      id: 1,
      name: "ALYA SKIN CLEANSER.",
      price: "FROM $29.99",
      image: product1, 
    },
    {
      id: 2,
      name: "RITUAL OF SAKURA.",
      price: "FROM $27.99",
      image: product2,
    },
    {
      id: 3,
      name: "THE BODY LOTION.",
      price: "FROM $19.99",
      image: product3,
    },
  ];

  return (
    <>
    <section className="bg-[#f5faec] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-900 rounded-full"></div>
            <span className="text-gray-800 text-sm border px-4 py-1 rounded-full border-gray-400">
              Best Selling Products
            </span>
          </div>

          {/* Carousel Arrows */}
          <div className="flex space-x-3">
            <button className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition">
              <img src={arrow2} size={18} />
            </button>
            <button className="w-10 h-10 rounded-full text-white flex items-center justify-center hover:bg-gray-800 transition">
              <img src={arrow1} size={18} />
            </button>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-medium text-gray-900 mt-8">
          Skincare That Brings Out <br /> Your Natural Radiance
        </h2>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 ">
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
                <button className="p-2 rounded-full hover:bg-gray-300 transition">
                  <img src={cart} size={18}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
                </>
  );
}
