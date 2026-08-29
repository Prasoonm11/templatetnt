"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Place {
  name: string;
  location: string;
  description: string;
  image: string;
}

const places: Place[] = [
  {
    name: "Amer Fort",
    location: "Jaipur, Rajasthan",
    description: "A majestic hilltop fortress built in 1592 by Raja Man Singh I. Renowned for its artistic Hindu-style elements, grand courtyards, and the stunning Sheesh Mahal (Mirror Palace).",
    image: "/images/jaipur/Amer-Fort.webp",
  },
  {
    name: "Hawa Mahal",
    location: "Jaipur, Rajasthan",
    description: "Built in 1799 by Maharaja Sawai Pratap Singh, this five-story palace features 953 small windows (jharokhas) decorated with intricate latticework, allowing cool air to circulate.",
    image: "/images/jaipur/Hawamahal.jpg",
  },
  {
    name: "Bapu Bazar",
    location: "Jaipur, Rajasthan",
    description: "A vibrant, bustling market in the heart of the Pink City. It is world-famous for its traditional Rajasthani textiles, Mojari leather shoes, camel-skin products, and local handicrafts.",
    image: "/images/jaipur/bapu-bazar.jpg",
  },
  {
    name: "Jantar Mantar",
    location: "Jaipur, Rajasthan",
    description: "A UNESCO World Heritage site built in 1734 by Maharaja Sawai Jai Singh II. It features 19 astronomical instruments, including the world's largest stone sundial.",
    image: "/images/jaipur/jantar-mantar.jpg",
  },
  {
    name: "Nahargarh Fort",
    location: "Jaipur, Rajasthan",
    description: "Perched on the edge of the Aravalli Hills, this historic fort was built in 1734. It offers breathtaking panoramic views of the entire Jaipur city, especially during sunset.",
    image: "/images/jaipur/nahargarh-fort.jpg",
  },
];

interface JaipurSectionProps {
  isMobile?: boolean;
}

export default function JaipurSection({ isMobile = false }: JaipurSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Auto scroll every 5 seconds, paused if a card is flipped
  useEffect(() => {
    if (isFlipped) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % places.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isFlipped]);

  const handleCardClick = (idx: number) => {
    if (idx === activeIdx) {
      setIsFlipped((prev) => !prev);
    } else {
      setActiveIdx(idx);
      setIsFlipped(false);
    }
  };

  const getCardStyle = (index: number) => {
    let offset = index - activeIdx;

    // Circular wrap-around for 5 items
    if (offset < -2) {
      offset += places.length;
    } else if (offset > 2) {
      offset -= places.length;
    }

    let transform = "";
    let opacity = 0;
    let zIndex = 10;
    let pointerEvents: "auto" | "none" = "none";

    if (offset === 0) {
      transform = "translateX(0) scale(1) rotateY(0deg)";
      opacity = 1;
      zIndex = 30;
      pointerEvents = "auto";
    } else if (offset === -1) {
      transform = "translateX(-200px) scale(0.8) rotateY(12deg)";
      opacity = 0.4;
      zIndex = 20;
      pointerEvents = "auto";
    } else if (offset === 1) {
      transform = "translateX(200px) scale(0.8) rotateY(-12deg)";
      opacity = 0.4;
      zIndex = 20;
      pointerEvents = "auto";
    } else if (offset === -2) {
      transform = "translateX(-360px) scale(0.6) rotateY(20deg)";
      opacity = 0;
      zIndex = 10;
      pointerEvents = "none";
    } else if (offset === 2) {
      transform = "translateX(360px) scale(0.6) rotateY(-20deg)";
      opacity = 0;
      zIndex = 10;
      pointerEvents = "none";
    }

    return {
      transform,
      opacity,
      zIndex,
      pointerEvents,
    };
  };

  if (isMobile) {
    return (
      <article id="mobile-jaipur" className="w-full">
        <h2 className="font-serif text-2xl font-extrabold text-black uppercase leading-tight">
          About <span className="text-[#c1121f]">Jaipur</span>
        </h2>
        <div className="w-12 h-[3px] bg-[#c1121f] mt-3 mb-6" />

        <div className="flex flex-col gap-4 text-sm text-zinc-700 leading-relaxed">
          <p>
            <strong>Jaipur</strong>, famously known as the <strong className="text-[#c1121f]">Pink City</strong>, is the vibrant capital of Rajasthan and a remarkable testament to Indian architecture and culture. Founded in 1727 by Maharaja Jai Singh II, the city enchants visitors with its majestic forts, opulent palaces, and bustling colorful markets.
          </p>
          <p>
            Seamlessly blending its rich historical heritage with modern amenities, Jaipur offers a captivating setting for both tourism and professional events. Its warm hospitality, stunning architecture, and lively atmosphere make it an ideal destination, providing an unforgettable backdrop for our conference.
          </p>

          {/* Mobile slider in 16:9 ratio */}
          <div className="flex flex-col items-center mt-6">
            <div className="relative w-full max-w-[290px] aspect-[16/9]" style={{ perspective: "1000px" }}>
              <div
                onClick={() => setIsFlipped((prev) => !prev)}
                className="relative w-full h-full duration-700 cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-zinc-200 shadow-md bg-white"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={places[activeIdx].image}
                      alt={places[activeIdx].name}
                      fill
                      sizes="290px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3.5 text-white">
                      <h3 className="font-sans text-xs font-black uppercase tracking-wide truncate">{places[activeIdx].name}</h3>
                      <p className="text-[9px] text-zinc-300 font-bold leading-none mt-1">{places[activeIdx].location}</p>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-[#c1121f]/30 shadow-lg bg-[#c1121f] text-white p-4 flex flex-col justify-between"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div>
                    <h3 className="font-sans text-xs font-black uppercase tracking-widest border-b border-white/20 pb-1.5">{places[activeIdx].name}</h3>
                    <p className="text-[10px] leading-relaxed font-semibold mt-2 line-clamp-4">{places[activeIdx].description}</p>
                  </div>
                  <span className="text-[8px] font-black uppercase tracking-wider text-red-200 mt-auto text-right">Click to flip back</span>
                </div>
              </div>
            </div>

            {/* Click caption */}
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#c1121f] mt-3 animate-pulse">
              Click on image to view more info
            </span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex flex-col">
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-black tracking-tight leading-tight uppercase">
          About <span className="text-[#c1121f]">Jaipur</span>
        </h2>
        <div className="w-16 h-[3px] bg-[#c1121f] mt-3 mb-1" />
      </div>

      <div className="flex flex-col gap-3 font-sans text-sm md:text-[14px] text-zinc-700 leading-relaxed font-normal pr-2">
        <p>
          <strong className="text-black font-extrabold">Jaipur</strong>, famously known as the <strong className="text-[#c1121f] font-extrabold">Pink City</strong>, is the vibrant capital of Rajasthan and a remarkable testament to Indian architecture and culture. Founded in 1727 by Maharaja Jai Singh II, the city enchants visitors with its majestic forts, opulent palaces, and bustling colorful markets.
        </p>
        <p>
          Seamlessly blending its rich historical heritage with modern amenities, Jaipur offers a captivating setting for both tourism and professional events. Its warm hospitality, stunning architecture, and lively atmosphere make it an ideal destination, providing an unforgettable backdrop for our conference.
        </p>

        {/* 3D 16:9 Image Carousel Section */}
        <div className="relative h-[200px] w-full flex items-center justify-center overflow-visible mt-3 select-none">
          {places.map((place, index) => {
            const cardStyle = getCardStyle(index);
            const isActive = index === activeIdx;

            return (
              <div
                key={place.name}
                onClick={() => handleCardClick(index)}
                className="absolute w-[320px] h-[180px] rounded-2xl transition-all duration-700 ease-in-out"
                style={{
                  transform: cardStyle.transform,
                  opacity: cardStyle.opacity,
                  zIndex: cardStyle.zIndex,
                  pointerEvents: cardStyle.pointerEvents,
                  perspective: "1000px",
                }}
              >
                <div
                  className="relative w-full h-full transition-transform duration-700 cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped && isActive ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front Face */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-zinc-200 shadow-lg bg-white"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={place.image}
                        alt={place.name}
                        fill
                        sizes="320px"
                        className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                      
                      {/* Left/Right peeking titles (hide if active) */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-black/45 flex items-end p-4 transition-opacity duration-300">
                          <h4 className="font-sans text-xs font-black uppercase tracking-wide truncate text-white">{place.name}</h4>
                        </div>
                      )}

                      {/* Active Center title info */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-sans text-[14px] font-black uppercase tracking-wide truncate">{place.name}</h3>
                          <p className="text-[10px] text-zinc-300 font-bold leading-none mt-1">{place.location}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Back Face (Active Card only detail display) */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-[#c1121f]/30 shadow-2xl bg-[#c1121f] text-white p-4.5 flex flex-col justify-between"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div>
                      <h3 className="font-sans text-xs font-black uppercase tracking-widest border-b border-white/20 pb-1.5">{place.name}</h3>
                      <p className="text-[10px] leading-relaxed font-semibold mt-2 line-clamp-4">{place.description}</p>
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-wider text-red-200 mt-auto text-right">Click to flip back</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Click Caption */}
        <div className="flex flex-col items-center mt-1.5 select-none">
          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#c1121f] animate-pulse">
            Click on image to view more info
          </span>
        </div>

      </div>
    </div>
  );
}
