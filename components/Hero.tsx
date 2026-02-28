"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const sideY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative min-h-[150vh] overflow-hidden pt-24">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e6f2df] via-[#d4e8c7] to-[#c8dfb8]" />

      <div className="relative flex min-h-screen">

        {/* LEFT PARALLAX */}
        <motion.div
          style={{ y: sideY }}
          className="hidden lg:block w-1/3 bg-cover bg-center"
        >
          <img 
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80" 
            alt="Veg Salad"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* CENTER VIDEO */}
        <div className="flex-1 flex items-center justify-center relative">
          <motion.div
            style={{ y: videoY }}
            className="relative w-[340px] md:w-[400px] h-[650px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
          >
            <video
              src="/Salad_Dressing_Pouring_and_Tossing.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* RIGHT PARALLAX (NON VEG) */}
        <motion.div
          style={{ y: sideY }}
          className="hidden lg:block w-1/3 bg-cover bg-center"
        >
          <img 
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80" 
            alt="Non-Veg Salad"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Hero Text */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-900">
          Fresh Mediterranean Bowls
        </h2>
        <p className="mt-4 text-lg text-green-800">
          Nourish your body. Thrive daily.
        </p>
        <button className="mt-6 px-8 py-3 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-800 transition">
          Build Your Bowl
        </button>
      </div>
    </section>
  );
}
