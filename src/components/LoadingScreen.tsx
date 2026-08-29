"use client";

import Image from "next/image";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isLoading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {/* TrustNet Logo */}
        <div className="relative h-20 w-20 animate-pulse select-none">
          <Image
            src="/images/logos/trustnet.png"
            alt="TrustNet Logo"
            fill
            priority
            sizes="80px"
            className="object-contain"
          />
        </div>

        {/* TrustNet Text */}
        <div className="font-sans font-black text-[2.2rem] tracking-tighter leading-none select-none">
          <span className="text-[#c1121f]">TRUST</span>
          <span className="text-black">NET</span>
          <span className="text-[#c1121f]">   202</span>
          <span className="text-black">6</span>
        </div>

        {/* Loading Progress Bar */}
        <div className="relative w-36 h-1 bg-zinc-100 rounded-full overflow-hidden mt-2">
          <div className="absolute top-0 bottom-0 bg-[#c1121f] rounded-full animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}
