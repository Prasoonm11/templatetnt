"use client";

import Image from "next/image";

interface PartnersSectionProps {
  isMobile?: boolean;
}

export default function PartnersSection({ isMobile = false }: PartnersSectionProps) {
  if (isMobile) {
    return (
      <article id="mobile-partners">
        <h2 className="font-serif text-2xl font-extrabold text-black uppercase leading-tight">
          Conference <span className="text-[#c1121f]">Partners</span>
        </h2>
        <div className="w-12 h-[3px] bg-[#c1121f] mt-3 mb-6" />

        <div className="grid grid-cols-2 gap-4 select-none">
          <div className="bg-zinc-50 border border-zinc-150 p-4 rounded-lg flex items-center justify-center h-16">
            <div className="relative h-8 w-full">
              <Image src="/images/logos/deakin-university.svg" alt="Deakin" fill sizes="(max-width: 768px) 150px, 250px" className="object-contain" />
            </div>
          </div>
          <div className="bg-zinc-50 border border-zinc-150 p-4 rounded-lg flex items-center justify-center h-16">
            <div className="relative h-6 w-full">
              <Image src="/images/logos/unstop-logo.png" alt="Unstop" fill sizes="(max-width: 768px) 150px, 250px" className="object-contain" />
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col mb-8">
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-black tracking-tight leading-tight uppercase">
          Conference <span className="text-[#c1121f]">Partners</span>
        </h2>
        <div className="w-16 h-[3px] bg-[#c1121f] mt-4" />
      </div>

      <div className="grid grid-cols-2 gap-10 items-center select-none">
        <div className="flex items-center justify-center h-20 hover:border-[#c1121f] transition duration-200">
          <div className="relative h-20 w-full gap-10">
            <Image
              src="/images/logos/deakin-university.svg"
              alt="Deakin University"
              fill
              sizes="(max-width: 768px) 150px, 250px"
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex items-center justify-center h-20 hover:border-[#c1121f] transition duration-200 gap-10">
          <div className="relative h-20 w-full gap 10">
            <Image
              src="/images/logos/unstop-logo.png"
              alt="Unstop"
              fill
              sizes="(max-width: 768px) 150px, 250px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
