"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SpecialSessions() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar firstOnly />
      <Navbar secondOnly />
      
      <main className="flex-grow">
        {/* Banner Hero */}
        <div className="relative bg-zinc-950 text-white py-20 overflow-hidden select-none">
          <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-[#c1121f] -skew-x-[20deg] translate-x-20 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent md:hidden" />
          <div className="relative max-w-7xl mx-auto px-4 md:px-6 z-10">
            <span className="text-[10px] font-black tracking-[0.25em] text-[#c1121f] md:text-red-200 uppercase mb-2 block">
              Program Details
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight max-w-2xl">
              Special Sessions
            </h1>
            <div className="w-16 h-[4px] bg-[#c1121f] md:bg-white mt-4" />
          </div>
        </div>

        {/* Content Container */}
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 font-sans flex flex-col items-center gap-8 text-center select-none">
          
          {/* Special Session Title Header */}
          <div className="max-w-3xl">
            <span className="text-xs font-black text-[#c1121f] tracking-widest uppercase mb-1.5 block">
              SPECIAL SESSION 01
            </span>
            <h2 className="font-serif text-xl md:text-3xl font-black text-black leading-tight uppercase tracking-tight">
              Advancements in Computational Intelligence for Real-World Problem Solving
            </h2>
            <div className="w-16 h-[3px] bg-[#c1121f] mx-auto mt-4" />
          </div>

          {/* Premium Flyer Image Container */}
          <div className="w-full max-w-3xl border border-zinc-200 rounded-2xl overflow-hidden shadow-2xl mt-4 bg-zinc-50">
            <img
              src="/special-session/special-session-1.png"
              alt="Special Session 1 Flyer"
              className="w-full h-auto object-contain block mx-auto"
            />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
