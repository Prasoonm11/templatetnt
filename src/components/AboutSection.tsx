"use client";

import Link from "next/link";
import Image from "next/image";

interface AboutSectionProps {
  isMobile?: boolean;
}

export default function AboutSection({ isMobile = false }: AboutSectionProps) {
  if (isMobile) {
    return (
      <article id="mobile-about-conference">
        <h2 className="font-serif text-2xl font-extrabold text-black uppercase leading-tight">
          About The <span className="text-[#c1121f]">Conference</span>
        </h2>
        <div className="w-12 h-[3px] bg-[#c1121f] mt-3 mb-6" />
        
        <div className="flex flex-col gap-4 text-sm text-zinc-700 leading-relaxed">
          <p>
            The <strong>Department of Computer Science and Engineering, Manipal University Jaipur</strong>, is pleased to announce that it will host the <strong className="text-[#c1121f]">International Conference on Trusted Networks and Intelligent Systems (TrustNet 2026)</strong> on <strong>February 16–17, 2026</strong>.
          </p>
          <p>
            Discussions and research will focus on <strong>Cybersecurity</strong> and <strong>Artificial Intelligence (AI)</strong>, contributing to both the <strong>United Nations Sustainable Development Goals (SDGs)</strong> and <strong>Digital India</strong> vision.
          </p>
          <div className="relative w-full h-36 mt-2 rounded-lg overflow-hidden">
            <Image
              src="/images/graphics/about-banner-2.png"
              alt="About Conference Banner"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              className="object-cover"
            />
          </div>
        </div>
      </article>
    );
  }

  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex flex-col">
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-black tracking-tight leading-tight uppercase">
          About The <span className="text-[#c1121f]">Conference</span>
        </h2>
        <div className="w-16 h-[3px] bg-[#c1121f] mt-4 mb-2" />
      </div>

      <div className="flex flex-col gap-4 font-sans text-sm md:text-base text-zinc-700 leading-relaxed font-normal pr-2">
        <p>
          The <strong className="text-black font-extrabold">Department of Computer Science and Engineering, Manipal University Jaipur</strong>, is pleased to announce that it will host the <strong className="text-[#c1121f] font-extrabold">International Conference on Trusted Networks and Intelligent Systems (TrustNet 2026)</strong> on <strong className="text-black font-extrabold">February 16–17, 2026</strong>. This conference is centered around a shared global goal: creating a safe, smart, and sustainable digital future.
        </p>
        <p>
          Discussions and research will focus on <strong className="text-black font-extrabold">Cybersecurity</strong> and <strong className="text-black font-extrabold">Artificial Intelligence (AI)</strong>, contributing to both the <strong className="text-black font-extrabold">United Nations Sustainable Development Goals (SDGs)</strong> and <strong className="text-black font-extrabold">Digital India</strong> vision.
        </p>
        <p>
          By promoting Digital Trust, Innovation, and Security, the event will support progress toward goals related to <strong className="text-black font-extrabold">Innovation, Sustainable Cities, Strong Institutions, and Quality Education</strong>.
        </p>
        
        {/* Banner Graphic Image */}
        <div className="relative w-full h-40 md:h-44 mt-2 rounded-lg overflow-hidden shrink-0">
          <Image
            src="/images/graphics/about-banner-2.png"
            alt="About Conference Banner"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
