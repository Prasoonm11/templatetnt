"use client";

import { useState, useEffect, useRef } from "react";
import AboutSection from "./AboutSection";
import AboutMUJSection from "./AboutMUJSection";
import TracksSection from "./TracksSection";
import SpeakersSection from "./SpeakersSection";
import PublicationsSection from "./PublicationsSection";
import PartnersSection from "./PartnersSection";
import JaipurSection from "./JaipurSection";
import VenueSection from "./VenueSection";

const sections = [
  { id: "about-conference", label: "About the Conference" },
  { id: "about-muj", label: "About Manipal University Jaipur" },
  { id: "tracks", label: "Conference Tracks" },
  { id: "speakers", label: "Speakers" },
  { id: "publications", label: "Publications" },
  { id: "partners", label: "Partners" },
  { id: "jaipur", label: "About Jaipur" },
  { id: "venue", label: "Venue"},
];

export default function ConferenceDetails() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const container = document.getElementById("scroll-deck-container");
    if (!container) return;

    let lastScrollTime = 0;
    const scrollCooldown = 700;
    const EDGE_EPSILON = 2;

    const isActuallyScrollable = (element: HTMLElement) => {
      const styles = window.getComputedStyle(element);
      const hasScrollableOverflow =
        styles.overflowY === "auto" ||
        styles.overflowY === "scroll" ||
        styles.overflowY === "overlay";

      return (
        hasScrollableOverflow &&
        element.scrollHeight > element.clientHeight + EDGE_EPSILON
      );
    };

    const canScrollInDirection = (
      element: HTMLElement,
      scrollingDown: boolean
    ) => {
      const maxScrollTop = element.scrollHeight - element.clientHeight;

      if (scrollingDown) {
        return element.scrollTop < maxScrollTop - EDGE_EPSILON;
      }

      return element.scrollTop > EDGE_EPSILON;
    };

    const findScrollableParent = (
      startElement: HTMLElement | null,
      scrollingDown: boolean
    ) => {
      let current = startElement;

      while (current && current !== container) {
        if (
          isActuallyScrollable(current) &&
          canScrollInDirection(current, scrollingDown)
        ) {
          return current;
        }

        current = current.parentElement;
      }

      return null;
    };

    const onWheelNative = (e: WheelEvent) => {
      if (e.deltaY === 0) return;

      const now = Date.now();
      const isScrollingDown = e.deltaY > 0;
      const target = e.target instanceof HTMLElement ? e.target : null;

      /*
       * First give the deepest scrollable component the wheel event.
       *
       * If it still has room to scroll, we do NOTHING here and the browser
       * handles the inner scroll normally.
       *
       * If it is already at the top/bottom, we continue to the slide logic
       * below. This is what allows one continuous wheel gesture to move from
       * the current component to the next component.
       */
      const scrollableParent = findScrollableParent(
        target,
        isScrollingDown
      );

      if (scrollableParent) {
        return;
      }

      const currentIndex = activeIndexRef.current;
      const hasMoreNext = currentIndex < sections.length - 1;
      const hasMorePrev = currentIndex > 0;

      if (isScrollingDown && hasMoreNext) {
        e.preventDefault();

        if (now - lastScrollTime >= scrollCooldown) {
          lastScrollTime = now;
          setActiveIndex((prev) =>
            Math.min(prev + 1, sections.length - 1)
          );
        }
      } else if (!isScrollingDown && hasMorePrev) {
        e.preventDefault();

        if (now - lastScrollTime >= scrollCooldown) {
          lastScrollTime = now;
          setActiveIndex((prev) => Math.max(prev - 1, 0));
        }
      }
    };

    /*
     * Capture phase is intentional. It makes the deck navigation reliable
     * even when a nested component has its own wheel/scroll handlers.
     */
    container.addEventListener("wheel", onWheelNative, {
      passive: false,
      capture: true,
    });

    return () => {
      container.removeEventListener("wheel", onWheelNative, {
        capture: true,
      });
    };
  }, [sections.length]);

  useEffect(() => {
    requestAnimationFrame(() => {
      const activeSlide = document.querySelector<HTMLElement>(
        `[data-slide-index="${activeIndex}"]`
      );

      if (activeSlide) {
        activeSlide.scrollTop = 0;
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const foundIndex = sections.findIndex((sec) => sec.id === hash);
      if (foundIndex !== -1) {
        setActiveIndex(foundIndex);

        setTimeout(() => {
          const container = document.getElementById("scroll-deck-container");
          if (container) {
            container.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 150);
      } else if (hash === "contact") {
        setTimeout(() => {
          const contactEl = document.getElementById("contact");
          if (contactEl) {
            contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const getSlideStyle = (index: number) => {
    const isActive = index === activeIndex;
    const isAbove = index < activeIndex;

    return {
      transform: isActive
        ? "translateY(0) scale(1) rotateX(0deg)"
        : isAbove
        ? "translateY(-100px) scale(0.92) rotateX(15deg)"
        : "translateY(100px) scale(0.92) rotateX(-15deg)",
      opacity: isActive ? 1 : 0,
      pointerEvents: isActive ? ("auto" as const) : ("none" as const),
      transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-in-out",
      zIndex: isActive ? 10 : 0,
    };
  };

  return (
    <section className="bg-white mt-4 pt-2 pb-4 md:pt-4 md:pb-6 border-b border-white relative">
      <div className="mx-auto max-w-7xl px-3 md:px-6">
        
        {/* Desktop View: Interactive 3D Arc Carousel Layout */}
        <div 
          id="scroll-deck-container"
          className="hidden lg:grid grid-cols-12 gap-8 xl:gap-12 items-start"
          style={{ perspective: "1200px" }}
        >
          {/* Left Fixed Sidebar */}
          <aside className="col-span-3 sticky top-36 self-start flex flex-col gap-1 border-l border-zinc-200 pl-4 py-2 select-none z-20">
            <span className="text-[10px] font-black tracking-[0.2em] text-zinc-400 uppercase mb-4 pl-3">
              Quick Navigation
            </span>
            {sections.map((sec, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left py-2.5 text-xs font-black tracking-wider uppercase transition-all duration-200 border-l-2 pl-3 -ml-[17px] ${
                    isActive
                      ? "text-[#c1121f] border-[#c1121f] font-black"
                      : "text-zinc-500 border-transparent hover:text-black font-semibold"
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </aside>

          {/* Right Carousel Slide Deck Container */}
          <div className="col-span-9 relative w-full h-[500px] overflow-hidden overscroll-contain" style={{ perspective: "1200px" }}>
            
            {/* Slide 1: About the Conference */}
            <div data-slide-index="0" style={getSlideStyle(0)} className="absolute inset-0 bg-white">
              <AboutSection />
            </div>

            {/* Slide 2: About Manipal University Jaipur */}
            <div data-slide-index="1" style={getSlideStyle(1)} className="absolute inset-0 bg-white">
              <AboutMUJSection />
            </div>

            {/* Slide 3: Conference Tracks */}
            <div data-slide-index="2" style={getSlideStyle(2)} className="absolute inset-0 bg-white">
              <TracksSection />
            </div>

            <div data-slide-index="3" style={getSlideStyle(3)} className="absolute inset-0 bg-white overflow-y-auto overscroll-contain pr-2 pb-6 scrollbar-thin scrollbar-thumb-zinc-200">
              <SpeakersSection />
            </div>

            {/* Slide 5: Publications */}
            <div data-slide-index="4" style={getSlideStyle(4)} className="absolute inset-0 bg-white text-zinc-700">
              <PublicationsSection />
            </div>

            {/* Slide 6: Partners */}
            <div data-slide-index="5" style={getSlideStyle(5)} className="absolute inset-0 bg-white">
              <PartnersSection />
            </div>

            {/* Slide 7: About Jaipur */}
            <div data-slide-index="6" style={getSlideStyle(6)} className="absolute inset-0 bg-white">
              <JaipurSection />
            </div>

            {/* Slide 8: Venue */}
            <div data-slide-index="7" style={getSlideStyle(7)} className="absolute inset-0 bg-white">
              <VenueSection />
            </div>

          </div>
        </div>

        {/* Mobile & Tablet View: Stacks sections vertically for readability */}
        <div className="lg:hidden flex flex-col gap-16">
          <AboutSection isMobile />
          <div className="border-t border-zinc-200/80 w-[90%] mx-auto my-2" />
          <AboutMUJSection isMobile />
          <div className="border-t border-zinc-200/80 w-[90%] mx-auto my-2" />
          <TracksSection isMobile />
          <div className="border-t border-zinc-200/80 w-[90%] mx-auto my-2" />
          <SpeakersSection isMobile />
          <div className="border-t border-zinc-200/80 w-[90%] mx-auto my-2" />
          <PublicationsSection isMobile />
          <div className="border-t border-zinc-200/80 w-[90%] mx-auto my-2" />
          <PartnersSection isMobile />
          <div className="border-t border-zinc-200/80 w-[90%] mx-auto my-2" />
          <JaipurSection isMobile />
          <div className="border-t border-zinc-200/80 w-[90%] mx-auto my-2" />
          <VenueSection isMobile />
        </div>

      </div>
    </section>
  );
}
