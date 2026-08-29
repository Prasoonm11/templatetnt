"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState<number>(99);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storageKey = "trustnet_visitor_count";
    const sessionKey = "trustnet_session_counted";

    const currentCountStr = localStorage.getItem(storageKey);
    let currentCount = currentCountStr ? parseInt(currentCountStr, 10) : 99;

    const hasCountedSession = sessionStorage.getItem(sessionKey);

    if (!hasCountedSession) {
      currentCount += 1;
      localStorage.setItem(storageKey, currentCount.toString());
      sessionStorage.setItem(sessionKey, "true");
    }

    setVisitorCount(currentCount);
  }, []);

  return (
    <footer id="contact" className="bg-[#18181b] text-zinc-400 font-sans border-t border-zinc-800">
      {/* First/Upper Footer */}
      <div className="mx-auto max-w-7xl px-3 md:px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Left Column: Contact Information */}
        <div className="flex flex-col gap-3">
          <span className="text-white text-xs font-black tracking-[0.2em] uppercase mb-1">
            Contact
          </span>
          <div className="w-10 h-[2px] bg-[#c1121f] mb-2" />
          <p className="text-xs text-zinc-300 font-bold leading-relaxed">
            Email: <a href="mailto:trustnet2026@gmail.com" className="hover:text-[#c1121f] transition font-medium">trustnet2026@gmail.com</a>
          </p>
          <div className="flex flex-col gap-1.5 mt-1 text-xs text-zinc-400 font-semibold leading-snug">
            <p>Dr. Satyabrata Roy (Program Co-Chair)</p>
            <p>Dr. Amit Garg (Convener)</p>
            <p>Dr. Ankur Pandey (Convener)</p>
          </div>
        </div>

        {/* Middle Column: Manipal University Jaipur Logo & Address */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3.5 select-none">
            <img
              src="/images/logos/muj-white-logo.png"
              alt="Manipal University Jaipur"
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed font-medium mt-1">
            Dehmi Kalan, Off Jaipur-Ajmer Expressway, <br />
            Jaipur, Rajasthan, India-303007
          </p>
        </div>

        {/* Right Column: Find It Fast Links Grid */}
        <div className="flex flex-col gap-3">
          <span className="text-white text-xs font-black tracking-[0.2em] uppercase mb-1">
            Find it Fast
          </span>
          <div className="w-10 h-[2px] bg-[#c1121f] mb-2" />
          <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-xs text-zinc-400 font-semibold">
            <a href="https://jaipur.manipal.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">All Schools</a>
            <a href="https://jaipur.manipal.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Departments</a>
            
            <a href="https://jaipur.manipal.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Placement Records</a>
            <a href="https://jaipur.manipal.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Newsletter</a>
            
            <a href="https://jaipur.manipal.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Campus Life</a>
            <a href="https://jaipur.manipal.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Events</a>
            
            <a href="https://jaipur.manipal.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Media Releases</a>
            <a href="https://jaipur.manipal.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Contact Us</a>
            
            <a href="https://jaipur.manipal.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Gallery</a>
            <a href="https://jaipur.manipal.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Academic Calendar</a>
          </div>
        </div>
      </div>

      {/* Second/Lower Footer */}
      <div className="bg-black border-t border-zinc-900 py-2.5 text-zinc-400 text-[10px] md:text-[11px]">
        <div className="mx-auto max-w-7xl px-3 md:px-6 flex flex-col md:flex-row items-center justify-between gap-3 font-sans">
          {/* Left Side: Copyright */}
          <div className="select-none text-zinc-400">
            &copy; 2026 All rights reserved.
          </div>

          {/* Center: Total Visitors */}
          <div className="select-none font-bold text-zinc-300">
            Total Visitors: <span className="font-sans font-extrabold text-white">{visitorCount}</span>
          </div>

          {/* Right Side: Developed by SDC WebDev Team */}
          <div className="flex items-center gap-1.5 text-zinc-400 select-none">
            <span>Developed by -</span>
            <div className="flex items-center gap-1.5">
              <img
                src="/images/logos/sdc-logo-white.png"
                alt="SDC Logo"
                className="h-4 w-auto object-contain"
              />
              <span className="text-zinc-400 font-semibold">Prasoon Mathur</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
