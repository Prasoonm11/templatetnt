"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

type DiamondProps = {
  src: string;
  alt: string;
  className: string;
  imageClassName?: string;
  priority?: boolean;
};

function Diamond({
  src,
  alt,
  className,
  imageClassName = "",
  priority = false,
}: DiamondProps) {
  return (
    <div
      className={`absolute rotate-45 overflow-hidden border-[5px] border-white bg-zinc-100 shadow-[4px_2px_4px_rgba(0,0,0,0.38)] transition-all duration-300 group ${className}`}
      style={{ borderRadius: "15%" }}
    >
      <div className="relative h-full w-full -rotate-45 scale-[1.42] transition-transform duration-300 group-hover:scale-[1.5]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="300px"
          className={`object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ${imageClassName}`}
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [heroScale, setHeroScale] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    const updateHeroScale = () => {
      const viewportWidth = window.innerWidth;

      // Original design width = 1440px.
      // Never enlarge the design beyond its original size.
      const scale = Math.min(viewportWidth / 1440, 1);

      setHeroScale(scale);
    };

    updateHeroScale();

    window.addEventListener("resize", updateHeroScale);

    return () => {
      window.removeEventListener("resize", updateHeroScale);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =========================================================
          RESPONSIVE HERO CONTAINER

          The visible container changes size according to the
          viewport, while the actual design remains exactly
          1440 × 560 and is scaled as ONE complete composition.
         ========================================================= */}
      <div
        className="relative w-full overflow-hidden bg-white select-none"
        style={{
          height: `${560 * heroScale}px`,
        }}
      >
        {/* =======================================================
            FIXED DESIGN CANVAS
            Original design dimensions: 1440 × 560
           ======================================================= */}
        <div
          className="absolute left-0 top-0"
          style={{
            width: "1440px",
            height: "560px",
            transform: `scale(${heroScale})`,
            transformOrigin: "top left",
          }}
        >
          {/* =====================================================
              TRUSTNET BRANDING
             ===================================================== */}
          <div className="absolute left-[80px] top-[32px] flex items-center gap-4">
            {/* TrustNet Logo */}
            <div className="relative h-[80px] w-[80px] shrink-0">
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
            <div className="flex flex-col">
              <div className="font-sans text-[40px] font-black tracking-tighter leading-[1]">
                <span className="text-[#c1121f]">TRUST</span>
                <span className="text-black">NET</span>
              </div>

              <div className="mt-1 flex items-center font-sans text-[36px] font-black tracking-tighter leading-[1]">
                <span className="text-[#c1121f]">202</span>
                <span className="text-black">6</span>
              </div>
            </div>
          </div>

          {/* =====================================================
              MAIN HERO BANNER
             ===================================================== */}
          <main className="absolute left-0 top-[130px] flex h-[290px] w-full bg-white">
            {/* =================================================
                RED GRADIENT TEXT SECTION
               ================================================= */}
            <div
              className="
                relative
                z-10
                flex
                flex-[0_0_65%]
                flex-col
                justify-center
                bg-gradient-to-b
                from-[#c1121f]
                to-[#6c0115]
                px-[46px]
                text-white

                before:absolute
                before:right-full
                before:top-0
                before:bottom-0
                before:w-[100vw]
                before:bg-gradient-to-b
                before:from-[#c1121f]
                before:to-[#6c0115]
              "
            >
              {/* Conference Title */}
              <h1 className="font-cursive text-[58px] font-light leading-none tracking-wide text-zinc-100">
                International Conference
              </h1>

              {/* Divider */}
              <div className="relative my-4 flex w-full items-center">
                <span className="-ml-[46px] mr-2 flex-1 border-t-2 border-white/80" />

                <span className="text-[24px] font-light italic text-zinc-200">
                  on
                </span>

                <span className="ml-2 mr-[80px] flex-[4] border-t-2 border-white/80" />
              </div>

              {/* Main Title */}
              <h2 className="font-sans text-[36px] font-bold leading-tight tracking-tight text-white">
                Trusted Networks and Intelligent Systems
              </h2>
            </div>

            {/* =================================================
                IMAGE COLLAGE
               ================================================= */}
            <div className="relative min-w-0 flex-1 overflow-visible">
              {/* Diamond 1 — Central Dome */}
              <Diamond
                src="/images/muj-pic.jpeg"
                alt="MUJ Central Dome"
                priority
                className="
                  left-[-25%]
                  top-[-10%]
                  z-30
                  h-[300px]
                  w-[300px]
                "
              />

              {/* Diamond 2 — Campus Courtyard */}
              <Diamond
                src="/images/muj-pic-6.webp"
                alt="Campus Courtyard"
                className="
                  left-[20%]
                  top-[-85%]
                  z-20
                  h-[300px]
                  w-[300px]
                "
              />

              {/* Diamond 3 — Academic Gate */}
              <Diamond
                src="/images/muj-pic-5.jpg"
                alt="Academic Block Gate"
                className="
                  left-[20%]
                  top-[65%]
                  z-20
                  h-[300px]
                  w-[300px]
                "
              />

              {/* Diamond 4 — Student Residence */}
              <Diamond
                src="/images/muj-pic-2.jpg"
                alt="Student Residence Night View"
                className="
                  left-[65%]
                  top-[-10%]
                  z-10
                  h-[300px]
                  w-[300px]
                "
              />
            </div>
          </main>

          {/* =====================================================
              DATE BANNER
             ===================================================== */}
          <div className="absolute left-[80px] top-[450px] z-40 flex items-center gap-2 select-none">
            {/* Red Calendar Block — shorter */}
            <div className="flex h-[52px] items-center justify-center rounded-md bg-[#d60303] px-5 shadow-md -skew-x-[30deg]">
              <div className="flex items-center justify-center text-white skew-x-[30deg]">
                <svg
                  className="h-8 w-8 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 16H5V9h14v11zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
                </svg>
              </div>
            </div>

            {/* Black Date Block — taller */}
            <div className="flex items-center justify-center rounded-md bg-black px-14 py-3.5 shadow-md -skew-x-[30deg] dark:bg-zinc-900">
              <span className="whitespace-nowrap font-sans text-[36px] font-black italic leading-none tracking-wide text-white uppercase skew-x-[30deg]">
                16-17 FEB, 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          FLOATING RIGHT-SIDE TABS
         ========================================================= */}
      <div className="fixed right-0 top-1/4 z-[100] flex flex-col gap-2 select-none">
        {/* Inquire about MUJ */}
        <a
          href="https://jaipur.manipal.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-48 w-11 flex-col items-center justify-center gap-1.5 rounded-l-xl border-y border-l border-white/20 bg-[#c1121f] text-white shadow-lg transition duration-200 hover:bg-red-800 active:scale-95"
        >
          <span className="rotate-180 font-sans text-[10px] font-black tracking-wider uppercase [writing-mode:vertical-lr]">
            Inquire about MUJ
          </span>

          <svg
            className="mt-1 h-4 w-4 text-white/80 transition group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </a>

        {/* Inquire about Conference */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="group flex h-60 w-11 flex-col items-center justify-center gap-1.5 rounded-l-xl border-y border-l border-white/20 bg-[#c1121f] text-white shadow-lg transition duration-200 hover:bg-red-800 active:scale-95 focus:outline-none"
        >
          <span className="rotate-180 font-sans text-[10px] font-black tracking-wider uppercase [writing-mode:vertical-lr]">
            Inquire about Conference
          </span>

          <svg
            className="mt-1 h-4 w-4 text-white/80 transition group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>

      {/* Inquiry Modal */}
      {mounted && isModalOpen && createPortal(
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/60 backdrop-blur-[3px] p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden relative p-6">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-zinc-400 hover:text-black hover:bg-zinc-100 rounded-full p-1.5 transition duration-150 focus:outline-none"
              aria-label="Close modal"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-5">
              <h3 className="font-serif text-xl font-extrabold uppercase text-black">
                Inquire about <span className="text-[#c1121f]">Conference</span>
              </h3>
              <div className="w-12 h-[3px] bg-[#c1121f] mt-1.5" />
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const mailto = `mailto:trustnet2026@gmail.com?subject=${encodeURIComponent(
                  formData.subject
                )}&body=${encodeURIComponent(
                  `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                )}`;
                window.location.href = mailto;
                setIsModalOpen(false);
                setFormData({ name: "", email: "", subject: "", message: "" });
              }}
              className="flex flex-col gap-4 text-left"
            >
              <div>
                <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-white border border-zinc-300 rounded-lg px-3 py-2 text-sm text-black placeholder-zinc-400 focus:outline-none focus:border-[#c1121f] transition duration-150"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1.5">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="johndoe@example.com"
                  className="w-full bg-white border border-zinc-300 rounded-lg px-3 py-2 text-sm text-black placeholder-zinc-400 focus:outline-none focus:border-[#c1121f] transition duration-150"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1.5">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Question about submissions / registration"
                  className="w-full bg-white border border-zinc-300 rounded-lg px-3 py-2 text-sm text-black placeholder-zinc-400 focus:outline-none focus:border-[#c1121f] transition duration-150"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1.5">Message</label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your inquiry details here..."
                  className="w-full bg-white border border-zinc-300 rounded-lg px-3 py-2 text-sm text-black placeholder-zinc-400 focus:outline-none focus:border-[#c1121f] transition duration-150 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#c1121f] text-white font-black py-2.5 rounded-lg hover:bg-red-800 transition duration-150 shadow-md hover:shadow-lg uppercase tracking-wider text-xs mt-2"
              >
                Send via Email
              </button>
            </form>

          </div>
        </div>,
        document.body
      )}

      {/* =========================================================
          SCROLL TO TOP
         ========================================================= */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-[90] flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900/90 text-white shadow-xl backdrop-blur transition-all duration-300 ${
          showScrollTop
            ? "visible scale-100 opacity-100"
            : "invisible scale-75 opacity-0"
        }`}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </>
  );
}