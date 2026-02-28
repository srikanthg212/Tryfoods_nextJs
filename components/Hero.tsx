"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const sideY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section ref={ref} className="relative min-h-[150vh] overflow-hidden pt-0">

      {/* Premium Natural Background Image - Zoomed Out */}
      <div 
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: '110%',
          backgroundPosition: 'center top',
        }}
      >
        {/* Very subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent"></div>
      </div>

      <div className="relative flex min-h-screen pt-24">

        {/* LEFT PANEL - VEG SALAD - Blended with Fade Effect */}
        <motion.div
          style={{ y: sideY }}
          className="hidden lg:flex w-1/3 items-center justify-center relative"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-[85%]">
              <Image 
                src="/veg-salad.png" 
                alt="Veg Salad Bowl"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))',
                }}
              />
              {/* Radial gradient mask for fading edges */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, transparent 40%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,0.9) 85%)',
                  mixBlendMode: 'multiply',
                }}
              ></div>
            </div>
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

        {/* RIGHT PANEL - NON-VEG SALAD - Blended with Fade Effect */}
        <motion.div
          style={{ y: sideY }}
          className="hidden lg:flex w-1/3 items-center justify-center relative"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-[85%]">
              <Image 
                src="/nonveg-salad.png" 
                alt="Non-Veg Salad Bowl"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))',
                }}
              />
              {/* Radial gradient mask for fading edges */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, transparent 40%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,0.9) 85%)',
                  mixBlendMode: 'multiply',
                }}
              ></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Text - Premium Typography */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 text-center max-w-3xl px-4"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-[#2d5016] tracking-tight leading-tight drop-shadow-lg" style={{ fontFamily: 'Georgia, serif' }}>
          Fresh<br />Mediterranean Bowls
        </h2>
        <p className="mt-6 text-xl text-[#3d6b1f] font-light tracking-wide drop-shadow-md" style={{ fontFamily: 'Georgia, serif' }}>
          Nourish your body. Thrive daily.
        </p>
        <button className="mt-8 px-10 py-4 bg-[#4a7c2c] text-white text-lg font-medium rounded-full shadow-xl hover:bg-[#3d6b1f] hover:shadow-2xl transition-all duration-300 hover:scale-105">
          Build Your Bowl
        </button>
      </motion.div>
    </section>
  );
}
