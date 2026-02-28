"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const sideY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const sideOpacity = useTransform(scrollYProgress, [0, 0.5], [0.7, 0.2]);

  return (
    <section ref={ref} className="relative min-h-[160vh] overflow-hidden pt-0 pb-32">

      {/* Premium Natural Background Image - Zoomed Out with Priority Loading */}
      <div 
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: '110%',
          backgroundPosition: 'center top',
        }}
      >
        {/* Very subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
      </div>

      <div className="relative flex min-h-screen pt-24 sm:pt-28 md:pt-32">

        {/* LEFT PANEL - VEG SALAD - Optimized with Next Image */}
        <motion.div
          style={{ y: sideY, opacity: sideOpacity }}
          className="hidden lg:flex w-1/3 items-center justify-start pl-0"
        >
          <div className="relative w-[60%] xl:w-[65%]">
            <Image 
              src="/veg-salad.png" 
              alt="Veg Salad Bowl"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))',
              }}
              loading="lazy"
              quality={85}
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
        </motion.div>

        {/* CENTER VIDEO - Lazy loaded with poster */}
        <div className="flex-1 flex items-center justify-center relative px-4 sm:px-6">
          <motion.div
            style={{ y: videoY }}
            className="relative w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] h-[560px] sm:h-[640px] md:h-[680px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[8px] md:border-[10px] border-white/90 backdrop-blur-sm"
          >
            {!videoLoaded && (
              <div className="absolute inset-0 bg-gradient-to-b from-green-200 to-green-300 animate-pulse"></div>
            )}
            <video
              src="/Salad_Dressing_Pouring_and_Tossing.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedData={() => setVideoLoaded(true)}
              className="w-full h-full object-cover"
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent pointer-events-none"></div>
          </motion.div>
        </div>

        {/* RIGHT PANEL - NON-VEG SALAD - Optimized with Next Image */}
        <motion.div
          style={{ y: sideY, opacity: sideOpacity }}
          className="hidden lg:flex w-1/3 items-center justify-end pr-0"
        >
          <div className="relative w-[60%] xl:w-[65%]">
            <Image 
              src="/nonveg-salad.png" 
              alt="Non-Veg Salad Bowl"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))',
              }}
              loading="lazy"
              quality={85}
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
        </motion.div>
      </div>

      {/* Hero Text - Even Lower Position, No Overlap */}
      <div 
        className="absolute bottom-20 sm:bottom-16 md:bottom-12 left-1/2 -translate-x-1/2 text-center max-w-3xl px-4 z-20"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2d5016] tracking-tight leading-tight drop-shadow-lg" style={{ fontFamily: 'Georgia, serif' }}>
          Fresh<br />Mediterranean Bowls
        </h2>
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-[#3d6b1f] font-light tracking-wide drop-shadow-md" style={{ fontFamily: 'Georgia, serif' }}>
          Nourish your body. Thrive daily.
        </p>
        <button className="mt-6 sm:mt-8 px-8 sm:px-10 py-3 sm:py-4 bg-[#4a7c2c] text-white text-base sm:text-lg font-medium rounded-full shadow-xl hover:bg-[#3d6b1f] hover:shadow-2xl transition-all duration-300 hover:scale-105">
          Build Your Bowl
        </button>
      </div>
    </section>
  );
}
