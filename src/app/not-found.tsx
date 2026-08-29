"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Headers */}
      <Navbar firstOnly />
      <Navbar secondOnly />

      {/* Main Content (404 Screen) */}
      <main className="flex-grow flex items-center justify-center py-20 px-4 select-none">
        <div className="text-center max-w-lg flex flex-col items-center">
          {/* Theme Styled 404 badge */}
          <div className="relative mb-6">
            <span className="font-serif text-8xl md:text-9xl font-black tracking-tight text-zinc-100 select-none block">
              404
            </span>
            <span className="absolute inset-0 flex items-center justify-center font-serif text-3xl md:text-4xl font-extrabold text-[#c1121f] uppercase tracking-wider">
              Lost Connection
            </span>
          </div>

          <h1 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight mb-3">
            Page Not Found
          </h1>

          <div className="w-12 h-[3px] bg-[#c1121f] mb-5" />

          <p className="text-sm md:text-base text-zinc-500 font-semibold leading-relaxed mb-8 max-w-sm">
            The page you are looking for does not exist, has been relocated, or is temporarily unavailable. Please verify the URL or return home.
          </p>

          {/* Go Home Button */}
          <Link
            href="/"
            className="bg-[#c1121f] text-white font-black px-6 py-3 rounded-lg hover:bg-red-800 transition duration-150 shadow-md hover:shadow-lg uppercase tracking-wider text-xs active:scale-95"
          >
            Go Back Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
