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
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section ref={ref} className="relative min-h-[150vh] overflow-hidden pt-20">

      {/* Premium Natural Background with Leaves */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#d8e8c8] via-[#c5ddb0] to-[#b8d4a0]">
        {/* Subtle leaf decorations */}
        <div className="absolute top-10 right-10 opacity-20">
          <div className="w-32 h-32 bg-green-800/10 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-20 left-10 opacity-20">
          <div className="w-40 h-40 bg-green-700/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative flex min-h-screen">

        {/* LEFT PARALLAX - VEG BOWL */}
        <motion.div
          style={{ y: sideY }}
          className="hidden lg:flex w-1/3 items-center justify-center p-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-full blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80" 
              alt="Veg Salad"
              className="relative rounded-full w-80 h-80 object-cover shadow-2xl border-8 border-white"
            />
          </div>
        </motion.div>

        {/* CENTER VIDEO */}
        <div className="flex-1 flex items-center justify-center relative px-4">
          <motion.div
            style={{ y: videoY, opacity }}
            className="relative w-[340px] md:w-[420px] h-[680px] rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white/90 backdrop-blur-sm"
          >
            <video
              src="/Salad_Dressing_Pouring_and_Tossing.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent pointer-events-none"></div>
          </motion.div>
        </div>

        {/* RIGHT PARALLAX - NON-VEG BOWL */}
        <motion.div
          style={{ y: sideY }}
          className="hidden lg:flex w-1/3 items-center justify-center p-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-full blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80" 
              alt="Non-Veg Salad"
              className="relative rounded-full w-80 h-80 object-cover shadow-2xl border-8 border-white"
            />
          </div>
        </motion.div>
      </div>

      {/* Hero Text - Premium Typography */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 text-center max-w-3xl px-4"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-[#2d5016] tracking-tight leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
          Fresh<br />Mediterranean Bowls
        </h2>
        <p className="mt-6 text-xl text-[#3d6b1f] font-light tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
          Nourish your body. Thrive daily.
        </p>
        <button className="mt-8 px-10 py-4 bg-[#4a7c2c] text-white text-lg font-medium rounded-full shadow-xl hover:bg-[#3d6b1f] hover:shadow-2xl transition-all duration-300 hover:scale-105">
          Build Your Bowl
        </button>
      </motion.div>
    </section>
  );
}
