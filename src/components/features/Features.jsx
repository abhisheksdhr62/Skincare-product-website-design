import model2 from "../../assets/model2.png"
import  Badge  from "../../assets/badge.png";

export default function Features() {
  return (
    <section className="bg-[#f5faec] px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <button className="px-5 py-2 border border-gray-800 rounded-full text-sm text-gray-800 hover:bg-gray-200 transition">
            ● Why Our Products
          </button>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            YOUR SKIN DESERVES <br /> THE BEST CARE.
          </h2>

          <p className="text-gray-700 text-sm md:text-base max-w-lg">
            Discover a curated collection of skincare products designed to rejuvenate, protect, and pamper your skin. Explore our rage crafted with love backed by science, and inspired by nature.
          </p>

          <div className="space-y-6 pt-4">
            {/* Feature Item */}
            {[
              {
                number: "01",
                title: "Bio Ingredients",
                desc: "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.",
              },
              {
                number: "02",
                title: "Everything Natural",
                desc: "Pure ingredients for pure skin. The perfect solution for your skin care needs.",
              },
              {
                number: "03",
                title: "All Handmade",
                desc: "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
              },
            ].map((item) => (
              <div key={item.number}>
                <h3 className="text-xl font-medium text-gray-800">
                  <span className="font-bold text-gray-500 mr-2">{item.number}</span>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full">
          <img
            src={model2} 
            alt="Skin care model"
            className="rounded-2xl w-full object-cover"
          />

          {/* Award Badge */}
          <div className="absolute bottom-4 left-4 bg-[#e6f0dc] text-gray-800 px-4 py-2 rounded-full flex items-center space-x-2 shadow-md text-sm">
            <img src={Badge} className="w-5 h-5" />
            <span>Best Skin Care Product Award Winning</span>
          </div>
        </div>
      </div>

      {/* Footer Row */}
      <div className="mt-8 px-2 flex justify-between text-sm text-gray-700">
        <span>SINCE 2001</span>
        <span className="underline cursor-pointer hover:text-black">LEARN MORE</span>
      </div>
    </section>
  );
}
