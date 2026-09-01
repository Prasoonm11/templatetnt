"use client";

const dates = [
  { step: "01", label: "Call for Papers", date: "Sep 9, 2025" },
  { step: "02", label: "Paper Submission", date: "Dec 30, 2025" },
  { step: "03", label: "Acceptance", date: "Jan 10, 2026" },
  { step: "04", label: "Registration End", date: "Jan 14, 2026" },
];

export default function ImportantDatesRow() {
  return (
    <section className="w-full bg-white select-none py-3 md:py-4">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Unified Box Container */}
        <div className="bg-white border border-zinc-200/90 rounded-2xl shadow-sm p-2 sm:p-2.5 md:p-3 flex flex-col md:flex-row items-stretch md:items-center gap-3 lg:gap-4">
          
          {/* Left Red Badge Box */}
          <div className="shrink-0 flex items-center">
            <div className="w-full md:w-auto bg-[#c1121f] text-white px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl font-serif text-sm sm:text-base font-black uppercase tracking-wider shadow-sm flex items-center justify-center text-center whitespace-nowrap">
              Important Dates
            </div>
          </div>

          {/* 4 Boxed Milestone Items with Red Right Bar and No Hover Effect */}
          <div className="flex-grow grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5 md:gap-3 items-center">
            {dates.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-50/80 border border-zinc-200/80 p-2.5 sm:p-3 rounded-xl flex items-center gap-2.5 sm:gap-3 relative overflow-hidden"
              >
                {/* Red Line on Right Side of Box */}
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#c1121f]" />

                {/* Calendar Icon in TrustNet Red */}
                <div className="shrink-0 text-[#c1121f]">
                  <svg
                    className="h-6 w-6 sm:h-7 sm:w-7 stroke-current fill-none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>

                {/* Text Info */}
                <div className="flex flex-col min-w-0 pr-1.5">
                  <h4 className="font-serif text-[11px] sm:text-[12.5px] font-black text-black leading-tight uppercase truncate">
                    {item.label}
                  </h4>
                  <span className="text-[10px] sm:text-[11px] text-zinc-600 font-extrabold mt-0.5 whitespace-nowrap">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
