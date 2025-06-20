
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import model1 from "../../assets/model1.png"
import cream from '../../assets/cream.png'

gsap.registerPlugin(ScrollTrigger);
const GlowHeader = () => {
   const paraRef = useRef(null);

  useEffect(() => {
    const words = gsap.utils.toArray(".fade-word");

    gsap.from(words, {
      opacity: 0.2,
      color: "#2d3b36", 
      stagger: 0.05,
      duration: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: paraRef.current,
        start: "top 80%",
        toggleActions: "restart none none reset",
      },
    });
  }, []);

  const text = `Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients with advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day.`;

  const words = text.split(" ");

  const textRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 0.1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // when the top of element hits 80% of viewport
          toggleActions: "play none none none", // onEnter, onLeave, onEnterBack, onLeaveBack
          toggleActions: "restart none none reset"

        },
      }
    );
  }, []);
  return (
<>
<section className="bg-[#edf9e5] py-10 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        {/* Left Description */}
        <div className="md:w-1/3 text-center md:text-left mb-6 md:mb-0">
          <p className="text-gray-700 text-sm leading-relaxed">
            Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
          </p>
        </div>

        {/* Center Heading */}
        <div className="md:w-1/3 text-center mb-6 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            GLOW<br />NATUR-<br />ALLY
          </h1>
        </div>

        {/* Right Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={cream}
            alt="Product"
            className="w-24 md:w-28 rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
     <section className="relative bg-[#edf9e5] px-6 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left - Button */}
        <div className="mb-6 md:mb-0">
          <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm shadow-md hover:bg-gray-700 transition">
            Shop Now
          </button>
        </div>

        {/* Center - Image */}
        <div className="relative mb-0 md:-mb-7">
          <div className="rounded-xl border-[6px] border-none overflow-hidden w-72 h-96">
            <img
              src={model1}
              alt="Glow Woman"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Chat-style Tag */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white border border-green-500 rounded-full px-4 py-1 shadow-lg flex items-center gap-2 text-xs">
            <div className="flex items-center gap-1">
              <img
                src={cream}
                alt="User"
                className="w-10 h-10  rounded-full border border-white "
                style={{marginLeft:'-10px'}}
              />
              <span className="text-green-700 w-55">
              While giving you an invigorating cleansing experience
            </span>
            </div>
          </div>
        </div>

        {/* Right - Empty for now (you can add later) */}
        <div className="w-24"></div>
      </div>

      {/* Background Text */}
      <h1  ref={textRef} style={{color:"#2d3b36"
      }}
       className="absolute md:bottom-2 bottom-1 left-0 right-0 text-[19vw] md:text-[19vw] font-extrabold text-center pointer-events-none select-none leading-none z-0">
        SKINCARE
      </h1>
    </section>
    <section className="bg-[#f5faec] py-10 px-4 md:px-16">
      <div className="mx-auto text-gray-900 text-base md:text-lg leading-relaxed">
        <p>
                    {words.map((word, idx) => (
            <span key={idx} className="fade-word inline-block">
              {word}
            </span>
          ))}

        </p>
      </div>
    </section>
</>
  );
};

export default GlowHeader;