"use client";

import Image from "next/image";

interface PublicationsSectionProps {
  isMobile?: boolean;
}

export default function PublicationsSection({ isMobile = false }: PublicationsSectionProps) {
  if (isMobile) {
    return (
      <article id="mobile-publications" className="w-full">
        <h2 className="font-serif text-2xl font-extrabold text-black uppercase leading-tight">
          Conference <span className="text-[#c1121f]">Publications</span>
        </h2>
        <div className="w-12 h-[3px] bg-[#c1121f] mt-3 mb-6" />

        <div className="flex flex-col gap-6 text-sm text-zinc-700 leading-relaxed">
          <p>
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>

          {/* Centered Logos side-by-side without cards */}
          <div className="flex items-center justify-center gap-10 my-1 select-none">
            <div className="relative h-12 w-28 shrink-0">
              <Image
                src="/images/logos/scopus-logo.png"
                alt="Scopus"
                fill
                sizes="(max-width: 768px) 112px, 160px"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 w-28 shrink-0">
              <Image
                src="/images/logos/springer.png"
                alt="Springer"
                fill
                sizes="(max-width: 768px) 112px, 160px"
                className="object-contain"
              />
            </div>
          </div>

          <p>
            The proceedings of TrustNet’26 will be published in Lecture Notes in Networks and Systems (LNNS). LNNS is abstracted and indexed in SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH, SCImago.
          </p>
        </div>
      </article>
    );
  }

  return (
    <div className="flex flex-col h-full pr-2">
      {/* Slide Header */}
      <div className="flex flex-col mb-6">
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-black tracking-tight leading-tight uppercase">
          Conference <span className="text-[#c1121f]">Publications</span>
        </h2>
        <div className="w-16 h-[3px] bg-[#c1121f] mt-3" />
      </div>

      {/* Main Single Column Layout */}
      <div className="flex flex-col gap-6 pb-6 font-sans text-sm md:text-[15px] text-zinc-700 leading-relaxed font-normal">
        
        {/* Top block */}
        <p className="text-zinc-700 text-left">
          The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
        </p>

        {/* Middle block: Centered Logos floating side-by-side */}
        <div className="flex items-center justify-center gap-16 py-1 select-none">
          <div className="relative h-16 w-40">
            <Image
              src="/images/logos/scopus-logo.png"
              alt="Scopus Logo"
              fill
              sizes="(max-width: 768px) 112px, 160px"
              className="object-contain"
            />
          </div>
          <div className="relative h-16 w-40">
            <Image
              src="/images/logos/springer.png"
              alt="Springer Logo"
              fill
              sizes="(max-width: 768px) 112px, 160px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom block */}
        <p className="text-zinc-700 text-left">
          The proceedings of TrustNet’26 will be published in Lecture Notes in Networks and Systems (LNNS). LNNS is abstracted and indexed in SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH, SCImago.
        </p>

      </div>
    </div>
  );
}
