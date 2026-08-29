"use client";

const dates = [
  { step: "01", label: "Call for Papers", date: "Sep 9, 2025" },
  { step: "02", label: "Paper Submission", date: "Dec 30, 2025" },
  { step: "03", label: "Acceptance", date: "Jan 10, 2026" },
  { step: "04", label: "Registration End", date: "Jan 14, 2026" },
];

export default function ImportantDatesRow() {
  return (
    <section className="bg-white mt-10 pt-16 pb-4 md:mt-16 md:pt-24 md:pb-6 select-none">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-6 text-center">
          <span className="text-[9px] font-black text-[#c1121f] tracking-[0.25em] uppercase mb-1">
            KEY MILESTONES
          </span>
          <h2 className="font-serif text-lg md:text-xl font-black text-black uppercase tracking-tight">
            Important Dates
          </h2>
          <div className="w-8 h-[2px] bg-[#c1121f] mt-2" />
        </div>

        {/* Dates Grid (4 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {dates.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl flex flex-col justify-between shadow-sm relative overflow-hidden group hover:border-[#c1121f]/40 hover:shadow-md transition duration-200"
            >
              {/* Highlight Red Left Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#c1121f]" />
              
              <div className="pl-2">
                <span className="font-mono text-[10px] font-black text-[#c1121f] tracking-widest block">
                  PHASE {item.step}
                </span>
                <h4 className="font-serif text-xs md:text-sm font-bold text-black leading-snug mt-1 uppercase">
                  {item.label}
                </h4>
                <p className="text-xs text-zinc-500 font-extrabold leading-relaxed mt-2 block">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Centered shorter separator line */}
      <div className="mx-auto w-[85%] max-w-7xl h-[1px] bg-zinc-200/80 mt-12 md:mt-16" />
    </section>
  );
}
