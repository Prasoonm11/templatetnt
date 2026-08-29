"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type NavLinkItem = {
  name: string;
  hasDropdown: boolean;
  options?: (string | { name: string; href: string })[];
  href?: string;
};

interface NavbarProps {
  firstOnly?: boolean;
  secondOnly?: boolean;
}

export default function Navbar({ firstOnly = false, secondOnly = false }: NavbarProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const [activeConfDropdown, setActiveConfDropdown] = useState<string | null>(null);

  const toggleConfDropdown = (name: string) => {
    setActiveConfDropdown(activeConfDropdown === name ? null : name);
  };

  const navLinks: NavLinkItem[] = [
    {
      name: "EXPLORE",
      hasDropdown: true,
      options: ["Academic Programs", "Campus Life", "Research", "About MUJ"],
    },
    {
      name: "ENROLL",
      hasDropdown: true,
      options: ["Admissions 2026", "Scholarships", "How to Apply", "Fees Structure"],
    },
    {
      name: "INFO FOR",
      hasDropdown: true,
      options: ["Current Students", "Alumni", "Faculty & Staff", "Parents"],
    }
  ];

  const conferenceLinks = [
    { name: "Home", href: "/#", hasDropdown: false },
    { name: "Call for Papers", href: "/call-for-papers", hasDropdown: false },
    { name: "Speakers", href: "/speakers", hasDropdown: false },
    {
      name: "Committee",
      hasDropdown: true,
      options: [
        { name: "Advisory Board", href: "/advisory-board" },
        { name: "Organizing Committee", href: "/organizing-committee" },
      ],
    },
    {
      name: "For Authors",
      hasDropdown: true,
      options: [
        { name: "Guidelines for Authors", href: "/guidelines-for-authors" },
        { name: "Paper Submission", href: "https://cmt3.research.microsoft.com/TrustNet2026" },
        { name: "Registration", href: "/registration" },
        { name: "Conference Brochure", href: "/brochure/trustnet-brochure.pdf" },
      ],
    },
    { name: "Contact", href: "/#contact", hasDropdown: false },
    {
      name: "Special Sessions",
      hasDropdown: true,
      options: [
        { name: "Special Sessions", href: "/special-sessions" },
        { name: "Special Session Proposal", href: "/special-session-proposal" },
      ],
    },
    {
      name: "Schedule",
      hasDropdown: true,
      options: [
        { name: "Inaugural Ceremony", href: "/schedule/schedule-01.pdf" },
        { name: "Program Schedule", href: "/schedule/schedule-02.pdf" },
        { name: "Paper Presentation", href: "/schedule/schedule-03.pdf" },
      ],
    },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/speakers" || href === "/#speakers") {
      if (window.location.pathname === "/") {
        e.preventDefault();
        window.location.hash = "speakers";
      }
    } else if (href === "/#contact") {
        e.preventDefault();
        window.location.hash = "contact";
    }
  };

  return (
    <>
      {/* First Navbar (Sticky on mobile/tablet, scrolls away on desktop) */}
      {!secondOnly && (
        <div className="sticky top-0 lg:relative z-[60] w-full border-b lg:border-b-0 border-zinc-150 bg-white/95 backdrop-blur-md lg:bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-4">
        <Link href="/" className="flex items-center gap-3 group select-none">
          <img
            src="/images/logos/muj-logo.svg"
            alt="Manipal University Jaipur"
            className="h-12 w-auto"
          />
        </Link>
 
        {/* Desktop Nav Items (Aligned to extreme right) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {/* Sponsor/Partner Logos */}
          <div className="flex items-center gap-4 mr-4 select-none">
            <div className="relative h-11 w-[130px] shrink-0">
              <Image
                src="/images/logos/deakin-university.svg"
                alt="Deakin University"
                fill
                priority
                sizes="130px"
                className="object-contain"
              />
            </div>
            <div className="relative h-10 w-[75px] shrink-0">
              <Image
                src="/images/logos/unstop-logo.png"
                alt="Unstop"
                fill
                priority
                sizes="75px"
                className="object-contain"
              />
            </div>
            <div className="relative h-8 w-[95px] shrink-0">
              <Image
                src="/images/logos/scopus-logo.png"
                alt="Scopus"
                fill
                priority
                sizes="95px"
                className="object-contain"
              />
            </div>
            <div className="relative h-8 w-[95px] shrink-0">
              <Image
                src="/images/logos/springer.png"
                alt="Springer"
                fill
                priority
                sizes="95px"
                className="object-contain"
              />
            </div>
          </div>
 
          {navLinks.map((link) => (
            <div key={link.name} className="relative group/item">
              {link.hasDropdown ? (
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className="flex items-center gap-1 text-xs font-bold tracking-widest text-black dark:text-black hover:text-red-800 transition duration-150"
                >
                  {link.name}
                  <svg
                    className={`h-3 w-3 transition-transform duration-200 ${
                      activeDropdown === link.name ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              ) : (
                <Link
                  href={link.href || "#"}
                  className="text-xs font-bold tracking-widest text-black dark:text-black hover:text-red-850 transition duration-150"
                >
                  {link.name}
                </Link>
              )}
 
              {/* Dropdown Menu */}
              {link.hasDropdown && (
                <div
                  className={`absolute left-0 mt-3 w-56 rounded-md bg-white shadow-xl ring-1 ring-black/5 dark:bg-white z-50 transition-all duration-200 origin-top-left ${
                    activeDropdown === link.name
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible group-hover/item:opacity-100 group-hover/item:scale-100 group-hover/item:visible"
                  }`}
                >
                  <div className="py-2">
                    {link.options?.map((option) => {
                      const opt = typeof option === "string" ? { name: option, href: "#" } : option;
                      const isExternalOrPdf = opt.href.startsWith("http") || opt.href.endsWith(".pdf");
                      return (
                        <Link
                          key={opt.name}
                          href={opt.href}
                          target={isExternalOrPdf ? "_blank" : undefined}
                          rel={isExternalOrPdf ? "noopener noreferrer" : undefined}
                          className="block px-4 py-2.5 text-xs font-semibold tracking-wider text-black dark:text-black hover:bg-red-800 hover:text-white transition duration-150"
                        >
                          {opt.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
 
          {/* Action Button */}
          <Link
            href="/apply"
            className="rounded-full bg-[#a80a21] px-6 py-2.5 text-xs font-bold tracking-widest text-white hover:bg-red-800 transition duration-150 shadow-md hover:shadow-lg active:scale-95"
          >
            APPLY NOW
          </Link>
        </nav>
 
        {/* Mobile menu toggle & quick links (Tablet & Mobile only) */}
        <div className="flex items-center gap-4 lg:hidden">
          <Link
            href="/apply"
            className="rounded-full bg-[#a80a21] px-4 py-2 text-xs font-bold tracking-widest text-white hover:bg-red-800 transition duration-150 shadow-sm"
          >
            APPLY
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#a80a21] hover:text-red-800 transition duration-150 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
      )}

      {/* Second Navbar (Conference Specific - Sticky top-0 on desktop) */}
      {!firstOnly && (
        <div className="lg:sticky lg:top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-150 hidden lg:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2.5 border-t border-zinc-200/50">
          {/* Navigation Links (Extreme Left) */}
          <nav className="flex items-center gap-6 xl:gap-8">
            {conferenceLinks.map((link) => (
              <div key={link.name} className="relative group/conf-item">
                {link.hasDropdown ? (
                  <button
                    onClick={() => toggleConfDropdown(link.name)}
                    className="flex items-center gap-1 text-sm font-black text-black hover:text-[#c1121f] transition duration-150"
                  >
                    {link.name}
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeConfDropdown === link.name ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={link.href || "#"}
                    onClick={(e) => handleLinkClick(e, link.href || "")}
                    className="text-sm font-black text-black hover:text-[#c1121f] transition duration-150"
                  >
                    {link.name}
                  </Link>
                )}
 
                {/* Dropdown Menu */}
                {link.hasDropdown && (
                  <div
                    className={`absolute left-0 mt-3 w-56 rounded-md bg-white shadow-xl ring-1 ring-black/5 z-50 transition-all duration-200 origin-top-left ${
                      activeConfDropdown === link.name
                        ? "opacity-100 scale-100 visible"
                        : "opacity-0 scale-95 invisible group-hover/conf-item:opacity-100 group-hover/conf-item:scale-100 group-hover/conf-item:visible"
                    }`}
                  >
                    <div className="py-2">
                      {link.options?.map((option) => {
                        const opt = typeof option === "string" ? { name: option, href: "#" } : option;
                        const isExternalOrPdf = opt.href.startsWith("http") || opt.href.endsWith(".pdf");
                        return (
                          <Link
                            key={opt.name}
                            href={opt.href}
                            target={isExternalOrPdf ? "_blank" : undefined}
                            rel={isExternalOrPdf ? "noopener noreferrer" : undefined}
                            className="block px-4 py-2.5 text-xs font-semibold text-black hover:bg-red-800 hover:text-white transition duration-150"
                          >
                            {opt.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
 
          {/* Right Action buttons: SDG goals and HYBRID Badge (Extreme Right) */}
          <div className="flex items-center gap-4 select-none">
            {/* SDG Goals */}
            <div className="flex items-center gap-2.5">
              <div className="relative h-[38px] w-[38px] shrink-0">
                <Image
                  src="/images/SDG Goals/SDG4.png"
                  alt="SDG Goal 4"
                  fill
                  sizes="38px"
                  className="object-contain"
                />
              </div>
              <div className="relative h-[38px] w-[38px] shrink-0">
                <Image
                  src="/images/SDG Goals/SDG9.png"
                  alt="SDG Goal 9"
                  fill
                  sizes="38px"
                  className="object-contain"
                />
              </div>
              <div className="relative h-[38px] w-[38px] shrink-0">
                <Image
                  src="/images/SDG Goals/SDG11.png"
                  alt="SDG Goal 11"
                  fill
                  sizes="38px"
                  className="object-contain"
                />
              </div>
            </div>
 
            {/* HYBRID Badge */}
            <div className="bg-[#c1121f] text-white font-sans font-black text-xs px-4 py-2 rounded-[3px] tracking-wider uppercase flex items-center gap-1.5 shadow-sm shrink-0">
              <span className="h-2.5 w-2.5 rounded-full bg-white animate-pulse"></span>
              HYBRID
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Mobile Drawer Overlay & Menu */}
      {!secondOnly && (
        <>
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-[190] bg-black/70 backdrop-blur-sm lg:hidden" onClick={() => setMobileMenuOpen(false)} />
          )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 z-[200] h-[100dvh] w-80 bg-black/70 backdrop-blur-xl border-l border-red-300/20 text-white p-6 shadow-[0_0_50px_rgba(0,0,0,0.85)] transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <span className="font-serif text-base font-bold uppercase tracking-wider text-zinc-100">
            Navigation
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-md p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white transition"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-5 overflow-y-auto max-h-[calc(100vh-120px)] pr-1">
          {/* Conference Links */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-1">TrustNet 2026</span>
            {conferenceLinks.map((link) => (
              <div key={link.name} className="flex flex-col gap-2">
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleConfDropdown(link.name)}
                      className="flex items-center justify-between text-sm font-bold tracking-wider text-zinc-200 hover:text-red-450 transition duration-150"
                    >
                      {link.name}
                      <svg
                        className={`h-4 w-4 text-zinc-100 transition-transform duration-200 ${
                          activeConfDropdown === link.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeConfDropdown === link.name && (
                      <div className="ml-4 border-l border-zinc-200 pl-4 flex flex-col gap-3 mt-1 py-1">
                        {link.options?.map((option) => {
                          const opt = typeof option === "string" ? { name: option, href: "#" } : option;
                          const isExternalOrPdf = opt.href.startsWith("http") || opt.href.endsWith(".pdf");
                          return (
                            <Link
                              key={opt.name}
                              href={opt.href}
                              target={isExternalOrPdf ? "_blank" : undefined}
                              rel={isExternalOrPdf ? "noopener noreferrer" : undefined}
                              className="text-xs font-semibold text-zinc-100 hover:text-red-400 transition duration-150"
                            >
                              {opt.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href || "#"}
                    onClick={(e) => handleLinkClick(e, link.href || "")}
                    className="text-sm font-bold tracking-wider text-zinc-200 hover:text-red-450 transition duration-150"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-zinc-800 my-2"></div>

          {/* University Links */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-1">University Portal</span>
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col gap-2">
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="flex items-center justify-between text-sm font-bold tracking-wider text-zinc-200 hover:text-red-450 transition duration-150"
                    >
                      {link.name}
                      <svg
                        className={`h-4 w-4 text-zinc-100 transition-transform duration-200 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeDropdown === link.name && (
                      <div className="ml-4 border-l border-zinc-200 pl-4 flex flex-col gap-3 mt-1 py-1">
                        {link.options?.map((option) => {
                          const opt = typeof option === "string" ? { name: option, href: "#" } : option;
                          const isExternalOrPdf = opt.href.startsWith("http") || opt.href.endsWith(".pdf");
                          return (
                            <Link
                              key={opt.name}
                              href={opt.href}
                              target={isExternalOrPdf ? "_blank" : undefined}
                              rel={isExternalOrPdf ? "noopener noreferrer" : undefined}
                              className="text-xs font-semibold text-zinc-100 hover:text-red-400 transition duration-150"
                            >
                              {opt.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href || "#"}
                    className="text-sm font-bold tracking-wider text-zinc-200 hover:text-red-450 transition duration-150"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-col gap-4">
            <Link
              href="/apply"
              className="flex justify-center rounded-full bg-[#a80a21] py-3 text-sm font-bold tracking-widest text-white hover:bg-red-800 transition shadow-md active:scale-95"
            >
              APPLY NOW
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-full border border-zinc-800 bg-white/80 py-2.5 pl-4 pr-10 text-xs font-medium text-white placeholder-zinc-500 focus:border-red-500 focus:outline-none transition"
              />
              <svg
                className="absolute right-3.5 top-3 h-4 w-4 text-zinc-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )}
</>
);
}
