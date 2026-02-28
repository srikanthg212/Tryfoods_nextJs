import dynamic from 'next/dynamic';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load components that are below the fold
const MenuSection = dynamic(() => import("@/components/MenuSection"), {
  loading: () => <div className="min-h-screen bg-gradient-to-b from-[#b8d4a0] to-[#98bc80]" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[400px] bg-[#2d5016]" />,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MenuSection />
      <Footer />
    </>
  );
}
