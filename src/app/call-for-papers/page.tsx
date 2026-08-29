"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const timeline = [
  { step: "1", event: "Call for Papers", date: "September 9, 2025" },
  { step: "2", event: "Submission", date: "December 30, 2025" },
  { step: "3", event: "Acceptance", date: "January 10, 2026" },
  { step: "4", event: "Registration End", date: "January 14, 2026" },
];

const submissionRequirements = [
  "Original, unpublished research",
  "High-quality academic content",
  "Follow conference format guidelines",
  "Peer-review process",
];

const presentationFormats = [
  "Oral presentations",
  "Poster presentations",
  "Panel discussions",
  "Interactive sessions",
];

const tracks = [
  {
    id: 1,
    title: "APPLIED CRYPTOGRAPHY AND NETWORK SECURITY",
    topics: [
      "Information Hiding",
      "Intrusion Detection & Prevention",
      "Network Security",
      "Privacy Enhancing Cryptography",
      "Security Protocols",
      "Sensor and Mobile Ad Hoc Network Security",
      "Wireless Network Security",
      "Cryptography and Cryptanalysis",
      "Quantum-Safe and Post-Quantum Cryptography",
      "Computer Networks and Protocols",
    ],
  },
  {
    id: 2,
    title: "DISTRIBUTED SYSTEMS AND ARCHITECTURES",
    topics: [
      "Blockchain security",
      "Critical Infrastructure Protection",
      "Peer-to-Peer Security",
      "Security in Distributed Systems",
      "Security Information Systems Architecture",
      "Blockchain and Distributed Ledger for Security",
      "Next-Generation Networks (5G/6G, Vehicular, IoT, and Edge Networks)",
      "Network Architectures: SDN, NFV, and Cloud-Based Networking",
    ],
  },
  {
    id: 3,
    title: "DATA SECURITY AND PRIVACY",
    topics: [
      "Access Control",
      "Anonymity",
      "Biometrics Security and Privacy",
      "Database Security and Privacy",
      "Data Integrity",
      "Ethical and Legal Implications of Security and Privacy",
      "Identity Management",
      "Personal Data Protection for Information Systems",
      "Privacy Enhancing Technologies",
      "Security and Privacy Policies",
      "Privacy-Preserving Technologies",
      "Digital Forensics and Incident Response",
    ],
  },
  {
    id: 4,
    title: "SECURITY AND AI/MACHINE LEARNING",
    topics: [
      "Adversarial Machine Learning",
      "AI-based Solutions for Security",
      "Attacks on Machine Learning",
      "Secure Federated Learning",
      "Security Vulnerabilities of Large Language Models",
      "Artificial Intelligence for Security and Trust Management",
      "Anomaly Detection and Threat Intelligence",
      "Emerging Trends in Cybersecurity and Network Intelligence",
    ],
  },
  {
    id: 5,
    title: "SECURITY AND PRIVACY IN EMERGING SCENARIOS",
    topics: [
      "Security and Privacy for Big Data",
      "Security and Privacy in Crowdsourcing",
      "Security and Privacy in IT Outsourcing",
      "Security and Privacy in Location-Based Services",
      "Security and Privacy in Mobile Systems",
      "Security and Privacy in Pervasive/Ubiquitous Computing",
      "Security and Privacy in Smart Grids",
      "Security and Privacy in Social Networks",
      "Security and Privacy in the Cloud",
      "Cyber-Physical Systems and IoT Security",
      "Security in Smart Cities, Healthcare, and Critical Infrastructures",
      "Secure Cloud and Edge Computing",
    ],
  },
  {
    id: 6,
    title: "RISKS, POLICIES AND SOFTWARE SECURITY",
    topics: [
      "Formal Methods and Security",
      "Information Systems Auditing",
      "Intellectual Property Protection",
      "Insider Threats and Countermeasures",
      "Organizational Security Policies",
      "Risk Assessment",
      "Secure Software Development Methodologies",
      "Security Verification and Validation",
      "Software Metrics",
      "Trust Modeling and Risk Management in Networks",
      "Lightweight Security for Resource-Constrained Devices",
    ],
  },
  {
    id: 7,
    title: "TRUST MANAGEMENT AND USABILITY",
    topics: [
      "Human factors",
      "Reliability and Dependability",
      "Security Requirements",
      "Security Metrics and Measurement",
      "Security usability",
      "Trust Management and Reputation Systems",
      "Intrusion Detection and Prevention Systems",
    ],
  },
  {
    id: 8,
    title: "COMPUTATIONAL COMPLEXITY THEORY AND ITS APPLICATIONS",
    topics: [
      "Computational Complexity theory and its Application in Computer Networks",
      "Quantum Query Complexity",
    ],
  },
];

export default function CallForPapers() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar firstOnly />
      <Navbar secondOnly />
      
      <main className="flex-grow">
        {/* Banner Hero */}
        <div className="relative bg-zinc-950 text-white py-20 overflow-hidden select-none">
          <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-[#c1121f] -skew-x-[20deg] translate-x-20 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent md:hidden" />
          <div className="relative max-w-7xl mx-auto px-4 md:px-6 z-10">
            <span className="text-[10px] font-black tracking-[0.25em] text-[#c1121f] md:text-red-200 uppercase mb-2 block">
              Call For Papers
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight max-w-2xl">
              Call For Papers
            </h1>
            <div className="w-16 h-[4px] bg-[#c1121f] md:bg-white mt-4" />
          </div>
        </div>

        {/* Content Container */}
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 font-sans text-sm md:text-base text-zinc-700 leading-relaxed font-normal flex flex-col gap-12">
          
          {/* Introduction block */}
          <section className="flex flex-col gap-4">
            <h2 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight">
              Call for Papers
            </h2>
            <div className="w-10 h-[2px] bg-[#c1121f] mb-2" />
            <p className="font-serif text-base md:text-lg font-black text-zinc-800 leading-snug">
              Call for Papers - Submit your original research and be part of the global dialogue on Trusted Networks, Intelligent Systems, and Secure Innovation.
            </p>
            <p>
              Researchers, academicians, and professionals are invited to submit their research abstracts and full papers for oral and poster presentations. Selected presentations will be appreciated with **Cash Awards** under <strong className="text-black">“Best Paper Category”</strong> and <strong className="text-black">“Outstanding Research Category”</strong>.
            </p>
          </section>

          {/* Requirements & Formats Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 select-none">
            {/* Requirements Card */}
            <div className="bg-zinc-50 border border-zinc-150 p-6 rounded-2xl relative overflow-hidden flex flex-col shadow-sm">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#c1121f]" />
              <h3 className="font-serif text-base font-bold text-black uppercase mb-4">
                Submission Requirements
              </h3>
              <ul className="flex flex-col gap-3 font-semibold text-xs md:text-sm text-zinc-600">
                {submissionRequirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c1121f]" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Formats Card */}
            <div className="bg-zinc-50 border border-zinc-150 p-6 rounded-2xl relative overflow-hidden flex flex-col shadow-sm">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#c1121f]" />
              <h3 className="font-serif text-base font-bold text-black uppercase mb-4">
                Presentation Formats
              </h3>
              <ul className="flex flex-col gap-3 font-semibold text-xs md:text-sm text-zinc-600">
                {presentationFormats.map((format, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c1121f]" />
                    <span>{format}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Submission Timeline */}
          <section className="flex flex-col gap-4">
            <h2 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight">
              Submission Timeline
            </h2>
            <div className="w-10 h-[2px] bg-[#c1121f] mb-2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 select-none mt-2">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className="bg-zinc-50 border border-zinc-150 p-5 rounded-2xl relative overflow-hidden flex flex-col justify-between shadow-sm"
                >
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-[#c1121f]" />
                  <div>
                    <span className="font-mono text-[10px] font-black text-[#c1121f]">MILESTONE 0{item.step}</span>
                    <h4 className="font-serif text-sm font-bold text-black leading-snug mt-1 uppercase">
                      {item.event}
                    </h4>
                    <p className="text-xs text-zinc-500 font-extrabold leading-relaxed mt-2.5">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Brochure Link Card */}
          <section className="flex flex-col items-center bg-zinc-50 border border-zinc-150 p-6 rounded-2xl text-center shadow-sm max-w-xl mx-auto w-full select-none">
            <span className="text-[10px] font-black text-[#c1121f] tracking-widest uppercase mb-1">CONFERENCE SYLLABUS</span>
            <h4 className="text-sm font-black text-black mb-1 uppercase tracking-wider">Conference Brochure</h4>
            <p className="text-xs text-zinc-500 leading-relaxed font-semibold mb-4 max-w-sm">
              Download the official conference brochure detailing guidelines, tracks, and deadlines.
            </p>
            <a
              href="/brochure/trustnet-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c1121f] text-white font-black px-6 py-2.5 rounded-lg hover:bg-red-800 transition duration-150 shadow-md hover:shadow-lg uppercase tracking-wider text-xs active:scale-95"
            >
              Download Brochure
            </a>
          </section>

          {/* Conference Tracks */}
          <section className="flex flex-col gap-4">
            <h2 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight">
              Conference Tracks
            </h2>
            <div className="w-10 h-[2px] bg-[#c1121f] mb-4" />

            <div className="flex flex-col gap-6">
              {tracks.map((track) => (
                <div 
                  key={track.id}
                  className="bg-zinc-50 border border-zinc-150 p-6 rounded-2xl relative overflow-hidden flex flex-col shadow-sm"
                >
                  <div className="absolute left-0 top-0 h-full w-2 bg-[#c1121f]" />
                  <div>
                    <span className="text-[9px] font-black tracking-widest text-[#c1121f] uppercase mb-1 block">
                      TRACK 0{track.id}
                    </span>
                    <h3 className="font-serif text-base md:text-lg font-bold text-black leading-snug mt-1 uppercase">
                      {track.title}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4 pt-4 border-t border-zinc-200/60 font-semibold text-xs text-zinc-600">
                      {track.topics.map((topic, i) => (
                        <div key={i} className="flex items-center gap-2 py-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#c1121f] shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Publication and Indexing */}
          <section className="flex flex-col gap-4 border-t border-zinc-200/60 pt-10">
            <h2 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight">
              Publication and Indexing
            </h2>
            <div className="w-10 h-[2px] bg-[#c1121f] mb-2" />
            <p>
              The proceedings of TrustNet’26 will be published in <strong className="text-black">Lecture Notes in Networks and Systems (LNNS)</strong>. LNNS is abstracted and indexed in **SCOPUS**, **INSPEC**, **WTI Frankfurt eG**, **zbMATH**, and **SCImago**.
            </p>

            {/* Premium Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 select-none mt-2 max-w-2xl mx-auto w-full">
              {/* Scopus Badge */}
              <div className="bg-zinc-50 border border-zinc-150 p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm h-40">
                <img
                  src="/images/logos/scopus-logo.png"
                  alt="Scopus Logo"
                  className="h-12 w-auto object-contain mb-3"
                />
                <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
                  Abstracted and Indexed in Scopus Database (Elsevier).
                </p>
              </div>

              {/* Springer LNNS Badge */}
              <div className="bg-zinc-50 border border-zinc-150 p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm h-40">
                <img
                  src="/images/logos/springer.png"
                  alt="Springer LNNS Logo"
                  className="h-12 w-auto object-contain mb-3"
                />
                <p className="text-xs text-zinc-500 font-semibold leading-relaxed">
                  Published in Lecture Notes in Networks and Systems (LNNS) series.
                </p>
              </div>
            </div>

            {/* Microsoft CMT Service Note */}
            <div className="bg-zinc-50 border border-zinc-150 p-5 rounded-2xl mt-4 select-none flex flex-col items-center text-center max-w-xl mx-auto">
              <span className="text-[9px] font-black text-[#c1121f] tracking-widest uppercase mb-1">REVIEW INFRASTRUCTURE</span>
              <h3 className="text-xs font-black text-black uppercase tracking-wider mb-2">Microsoft CMT Service</h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-semibold">
                The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
