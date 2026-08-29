"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface TracksSectionProps {
  isMobile?: boolean;
}

interface TrackItem {
  id: number;
  title: string;
  subtopics: string[];
  icon: string;
}

export default function TracksSection({ isMobile = false }: TracksSectionProps) {
  const [activeModalIdx, setActiveModalIdx] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const tracks: TrackItem[] = [
    {
      id: 1,
      title: "APPLIED CRYPTOGRAPHY AND NETWORK SECURITY",
      icon: "shield",
      subtopics: [
        "Information Hiding",
        "Intrusion Detection & Prevention",
        "Network Security",
        "Privacy Enhancing Cryptography",
        "Security Protocols",
        "Sensor and Mobile Ad Hoc Network Security",
        "Wireless Network Security",
        "Cryptography and Cryptanalysis",
        "Quantum-Safe and Post-Quantum Cryptography",
        "Computer Networks and Protocols"
      ]
    },
    {
      id: 2,
      title: "DISTRIBUTED SYSTEMS AND ARCHITECTURES",
      icon: "database",
      subtopics: [
        "Blockchain Technology",
        "Consensus Algorithms",
        "Cloud & Edge Security",
        "Decentralized Networks",
        "Distributed Ledger Systems",
        "P2P Network Architectures",
        "Smart Contract Verification",
        "Fault-Tolerant Computations"
      ]
    },
    {
      id: 3,
      title: "DATA SECURITY AND PRIVACY",
      icon: "user-shield",
      subtopics: [
        "Data Encryption Standards",
        "Privacy-Preserving Computations",
        "Data Loss Prevention (DLP)",
        "Anonymization Techniques",
        "Database Auditing",
        "Access Control Systems",
        "Differential Privacy",
        "Secure Multi-Party Computation"
      ]
    },
    {
      id: 4,
      title: "SECURITY AND AI/MACHINE LEARNING",
      icon: "brain",
      subtopics: [
        "Adversarial Machine Learning",
        "AI Threat Intelligence",
        "Anomaly Detection Models",
        "Federated Learning Security",
        "Explainable AI in Security",
        "Secure Deep Learning",
        "Model Stealing Defenses",
        "AI-Driven Malware Analysis"
      ]
    },
    {
      id: 5,
      title: "SECURITY AND PRIVACY IN EMERGING SCENARIOS",
      icon: "phone",
      subtopics: [
        "Internet of Things (IoT) Security",
        "Smart Grid Infrastructures",
        "Cyber-Physical Systems (CPS)",
        "Autonomous Vehicle Security",
        "Wearable Device Security",
        "Industrial IoT Security",
        "Smart Home Privacy",
        "V2X Communication Security"
      ]
    },
    {
      id: 6,
      title: "RISKS, POLICIES AND SOFTWARE SECURITY",
      icon: "clipboard-check",
      subtopics: [
        "Software Vulnerability Analysis",
        "Risk Management Models",
        "Compliance Frameworks",
        "Secure Coding Practices",
        "Penetration Testing Tools",
        "Security Audit Automation",
        "Privacy Policy Engineering",
        "Threat Modeling Practices"
      ]
    },
    {
      id: 7,
      title: "TRUST MANAGEMENT AND USABILITY",
      icon: "user-lock",
      subtopics: [
        "Usable Security Design",
        "Human Factors in Security",
        "Identity & Access Management (IAM)",
        "Trust Metrics & Assessment",
        "Usable Privacy Policies",
        "Social Engineering Defenses",
        "Multi-Factor Authentication (MFA)",
        "Behavioral Biometrics"
      ]
    },
    {
      id: 8,
      title: "COMPUTATIONAL COMPLEXITY THEORY AND ITS APPLICATIONS",
      icon: "box",
      subtopics: [
        "Hardness Assumptions",
        "Post-Quantum Cryptography",
        "Zero-Knowledge Proofs",
        "Complexity of Verification",
        "Provable Security Models",
        "Lattice-Based Cryptography",
        "Algebraic Complexity",
        "Homomorphic Encryption Foundations"
      ]
    }
  ];

  const renderIcon = (iconName: string, customClass?: string) => {
    const classStr = customClass || "h-5 w-5 text-[#c1121f] shrink-0";
    switch (iconName) {
      case "shield":
        return (
          <svg className={classStr} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case "database":
        return (
          <svg className={classStr} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        );
      case "user-shield":
        return (
          <svg className={classStr} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2c0 5.591-3.824 10.29-9 11.622-5.176-1.332-9-6.03-9-11.622 0-1.042.133-2.052.382-3.016L12 2.944l8.618 3.04A12.02 12.02 0 0121 12z" />
          </svg>
        );
      case "brain":
        return (
          <svg className={classStr} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case "phone":
        return (
          <svg className={classStr} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case "clipboard-check":
        return (
          <svg className={classStr} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 00-2 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        );
      case "user-lock":
        return (
          <svg className={classStr} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        );
      case "box":
        return (
          <svg className={classStr} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      default:
        return null;
    }
  };

  const selectedTrack = activeModalIdx !== null ? tracks[activeModalIdx] : null;

  return (
    <div className="flex flex-col h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-200">
      
      {/* Title */}
      <div className="flex flex-col mb-5">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-extrabold text-black tracking-tight leading-tight uppercase">
          Conference <span className="text-[#c1121f]">Tracks</span>
        </h2>
        <div className="w-16 h-[3px] bg-[#c1121f] mt-3" />
      </div>

      {/* Grid List */}
      <div className={`grid ${isMobile ? "grid-cols-1 gap-3.5" : "grid-cols-2 gap-4 pb-4"}`}>
        {tracks.map((track, idx) => (
          <div
            key={track.id}
            onClick={() => setActiveModalIdx(idx)}
            className="bg-white border border-zinc-150 hover:border-[#c1121f] hover:shadow-md rounded-xl overflow-hidden transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 px-5 py-4.5 select-none active:scale-[0.99]"
          >
            <div className="flex items-center gap-3.5">
              {renderIcon(track.icon)}
              <span className="text-[11px] font-black tracking-wider text-zinc-800 uppercase font-sans leading-snug">
                {track.title}
              </span>
            </div>
            <svg
              className="h-4.5 w-4.5 text-[#c1121f] shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        ))}
      </div>

      {/* Interactive Modal Pop-Up (Red, White & Black Theme via React Portal) */}
      {selectedTrack && mounted && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/15 backdrop-blur-[3px] animate-in fade-in duration-200"
          onClick={() => setActiveModalIdx(null)}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-t-4 border-[#c1121f] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between px-6 py-5 border-b border-zinc-100">
              <div className="flex items-center gap-3.5 pr-8">
                {renderIcon(selectedTrack.icon, "h-7 w-7 text-[#c1121f] shrink-0")}
                <h3 className="font-serif text-lg md:text-xl font-extrabold text-black uppercase tracking-tight leading-snug">
                  {selectedTrack.title}
                </h3>
              </div>
              <button 
                onClick={() => setActiveModalIdx(null)}
                className="text-zinc-400 hover:text-black transition p-1.5 rounded-full hover:bg-zinc-100 shrink-0"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-grow bg-zinc-50/50">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {selectedTrack.subtopics.map((sub, i) => (
                  <div 
                    key={i} 
                    className="bg-white border border-zinc-150 rounded-xl p-4.5 text-center text-xs font-black text-zinc-800 uppercase tracking-wider shadow-sm hover:border-[#c1121f] hover:text-[#c1121f] transition duration-200 cursor-default select-none flex items-center justify-center min-h-[64px]"
                  >
                    {sub}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  );
}
