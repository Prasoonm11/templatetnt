"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const proposalItems = [
  "Aim & Scope/ Objectives",
  "Sub-topics of interest",
  "Contact information of the Organizer",
  "Organizers' short biography",
  "List of potential reviewers/ TPC capable of reviewing papers submitted to the special session",
  "Tentative number of paper submissions",
];

export default function SpecialSessionProposal() {
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
              Proposers
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight max-w-2xl">
              Special Session Proposal
            </h1>
            <div className="w-16 h-[4px] bg-[#c1121f] md:bg-white mt-4" />
          </div>
        </div>

        {/* Content Container */}
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 font-sans text-sm md:text-base text-zinc-700 leading-relaxed font-normal flex flex-col gap-10">
          
          {/* Intro Section */}
          <section className="flex flex-col gap-3">
            <p>
              All Special Sessions will be held at the conference venue or online. To conduct a special session, the organizer of the session needs to send a proposal containing the following items to <a href="mailto:trustnet2026@gmail.com" className="text-[#c1121f] font-bold hover:underline">trustnet2026@gmail.com</a>:
            </p>
          </section>

          {/* Proposal Requirements Card */}
          <section className="flex flex-col gap-3">
            <div className="bg-zinc-50 border border-zinc-150 p-6 rounded-2xl relative overflow-hidden shadow-sm select-none">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#c1121f]" />
              <h3 className="font-serif text-base md:text-lg font-bold text-black uppercase tracking-wider mb-4">
                Proposal Content Requirements
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm font-semibold text-zinc-600">
                {proposalItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-red-50 text-[#c1121f] border border-red-200 flex items-center justify-center shrink-0 font-mono text-[10px] font-black">
                      0{index + 1}
                    </span>
                    <span className="mt-0.5 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Evaluation and Publicity */}
          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight">
              Evaluation & Announcement
            </h2>
            <div className="w-10 h-[2px] bg-[#c1121f]" />
            <p className="mt-1">
              Proposals will be duly evaluated by the **TrustNet'26 Technical Committee** based on the novelty and associated impact of the topic, and the same will be intimated via email to the session organizer with further guidelines.
            </p>
            <p>
              Organizers of Special Sessions are required to announce/ publicize the Call for Papers for Special Sessions on their own. However, details of all accepted Sessions will be made available on the Conference website (<a href="https://trustnetcon.in/" target="_blank" rel="noopener noreferrer" className="text-[#c1121f] font-bold hover:underline">https://trustnetcon.in/</a>).
            </p>
          </section>

          {/* Review Process Phases */}
          <section className="flex flex-col gap-4">
            <h2 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight">
              Review Process Guidelines
            </h2>
            <div className="w-10 h-[2px] bg-[#c1121f] mb-2" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-none">
              {/* Phase 1 */}
              <div className="bg-zinc-50 border border-zinc-150 p-5 rounded-2xl relative overflow-hidden flex flex-col shadow-sm">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-zinc-400" />
                <span className="font-mono text-xs font-black text-zinc-500 uppercase tracking-widest">FIRST PHASE</span>
                <h3 className="font-serif text-base font-bold text-black leading-snug mt-1">Respective Organizers Review</h3>
                <p className="text-xs text-zinc-500 font-semibold leading-relaxed mt-2.5">
                  The initial peer-review of papers submitted to the Special Sessions is managed directly by the session organizers. Each manuscript must receive at least two reviews from qualified experts holding field-specific expertise.
                </p>
              </div>

              {/* Phase 2 */}
              <div className="bg-zinc-50 border border-zinc-150 p-5 rounded-2xl relative overflow-hidden flex flex-col shadow-sm">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#c1121f]" />
                <span className="font-mono text-xs font-black text-[#c1121f] uppercase tracking-widest">SECOND PHASE</span>
                <h3 className="font-serif text-base font-bold text-black leading-snug mt-1">Technical Committee Final Decision</h3>
                <p className="text-xs text-zinc-500 font-semibold leading-relaxed mt-2.5">
                  A third qualified review will be conducted by the TrustNet'26 Technical Committee/Reviewer Pool to make the final decision on paper acceptance or rejection. Decisions will be immediately communicated to the respective session organizers.
                </p>
              </div>
            </div>
          </section>

          {/* Similarity & Execution Requirements Alert */}
          <section className="flex flex-col gap-3">
            <div className="border-l-4 border-[#c1121f] bg-red-50 p-5 rounded-r-2xl text-left select-none shadow-sm">
              <span className="text-[10px] font-black text-[#c1121f] tracking-widest uppercase mb-1.5 block">LIMITS & CRITERIA</span>
              <p className="text-xs font-semibold text-zinc-700 leading-relaxed">
                The acceptance rate of papers submitted for the special session must be restricted to <strong className="text-black">30%</strong>, and the similarity index percentage must be restricted to <strong className="text-black">≤15%</strong> (via Turnitin).
              </p>
              <p className="text-xs font-semibold text-zinc-700 leading-relaxed mt-2.5">
                For successful execution of the special session, a <strong className="text-black">minimum of 5 accepted papers</strong> is required, and the Organizer will be invited to chair the session. The organizing committee reserves the right to combine papers from different sessions if the count is less than 5 in a single session.
              </p>
            </div>
          </section>

          {/* Dates & Mode Info */}
          <section className="flex flex-col gap-4">
            <h2 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight">
              Important Milestones
            </h2>
            <div className="w-10 h-[2px] bg-[#c1121f] mb-2" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 select-none font-semibold text-xs text-zinc-600 bg-zinc-50 border border-zinc-150 p-5 rounded-xl">
              <div>
                📅 <strong>Notification of Acceptance:</strong> At the earliest
              </div>
              <div>
                📝 <strong>Paper Submission & Registration:</strong> As per Conference Timeline
              </div>
              <div className="text-[#c1121f] font-bold">
                🌐 <strong>Mode:</strong> Online mode only
              </div>
            </div>
          </section>

          {/* Warm Regards Footer Block */}
          <div className="flex flex-col items-center bg-zinc-50 border border-zinc-150 p-8 rounded-2xl text-center shadow-sm max-w-xl mx-auto w-full mt-4 select-none">
            <span className="text-[10px] font-black text-[#c1121f] tracking-widest uppercase mb-1">CONFERENCE SECRETARIAT</span>
            <h4 className="text-sm font-black text-black mb-1 uppercase tracking-wider">Ready to submit a Proposal?</h4>
            <p className="text-xs text-zinc-500 leading-relaxed font-semibold mb-5 max-w-sm">
              Email your proposal details directly to the organizing committee:
            </p>
            
            <a
              href="mailto:trustnet2026@gmail.com"
              className="bg-[#c1121f] text-white font-black px-6 py-3 rounded-lg hover:bg-red-800 transition duration-150 shadow-md hover:shadow-lg uppercase tracking-wider text-xs active:scale-95"
            >
              Email Proposal (trustnet2026@gmail.com)
            </a>

            <div className="text-[10px] font-bold text-zinc-400 mt-6 leading-relaxed">
              Warm regards,<br />
              <strong className="text-zinc-600 font-extrabold">Team TrustNet'26</strong><br />
              Manipal University Jaipur
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
