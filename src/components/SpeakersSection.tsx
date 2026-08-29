"use client";

interface SpeakersSectionProps {
  isMobile?: boolean;
}

interface Speaker {
  name: string;
  designation: string;
  initials: string;
  image?: string;
  linkedin?: string;
  website?: string;
}

const speakers: Speaker[] = [
  {
    name: "Dr. Anupam Tiwari",
    designation: "Principal Advisor, Ministry of Defence, Government of India",
    initials: "AT",
    image: "/images/Speakers/anupam-tiwari.png",
    linkedin: "https://www.linkedin.com/",
    website: "https://www.dae.gov.in/",
  },
  {
    name: "Prof. Gang Li",
    designation: "School of Information Technology, Deakin University, Australia",
    initials: "GL",
    image: "/images/Speakers/gang-li.png",
    linkedin: "https://www.linkedin.com/in/gang-li-deakin/",
    website: "https://www.deakin.edu.au/about-deakin/people/gang-li",
  },
];

const ArrowUpRight = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    className="h-3.5 w-3.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9 3 9m-9 0a9 9 0 019-9"
    />
  </svg>
);

function SpeakerImage({
  speaker,
  mobile = false,
}: {
  speaker: Speaker;
  mobile?: boolean;
}) {
  return (
    <div
      className={[
        "relative shrink-0 overflow-hidden bg-zinc-200",
        mobile
          ? "h-16 w-16 rounded-2xl"
          : "h-[135px] w-[135px] rounded-[20px]",
      ].join(" ")}
    >
      {speaker.image ? (
        <img
          src={speaker.image}
          alt={speaker.name}
          className="h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : null}

      <div className="absolute inset-0 flex items-center justify-center bg-zinc-200 text-zinc-500">
        <span
          className={
            mobile
              ? "text-sm font-black tracking-widest"
              : "text-3xl font-black tracking-widest"
          }
        >
          {speaker.initials}
        </span>
      </div>

      {speaker.image && (
        <img
          src={speaker.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      )}

      <div className="absolute left-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-[#c1121f] shadow-sm backdrop-blur-sm">
        <ArrowUpRight />
      </div>
    </div>
  );
}

function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
  return (
    <article
      className={[
        "group relative min-h-[175px] overflow-hidden rounded-[22px] border border-zinc-200 bg-white",
        "shadow-[0_6px_24px_rgba(0,0,0,0.05)] transition-all duration-300",
        "hover:-translate-y-1 hover:border-[#c1121f]/30 hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)]",
        "flex items-stretch",
      ].join(" ")}
    >
      {/* Number / decorative rail */}
      <div className="absolute left-0 top-0 z-20 flex h-full w-8 flex-col items-center justify-between border-r border-zinc-200 bg-zinc-50 py-3.5">
        <span className="font-mono text-[9px] font-black text-[#c1121f]">
          0{index + 1}
        </span>
        <span className="h-10 w-px bg-zinc-300" />
        <span className="[writing-mode:vertical-rl] text-[7px] font-black tracking-[0.25em] text-zinc-400">
          SPEAKER
        </span>
      </div>

      {/* Portrait */}
      <div className="relative z-10 flex w-[46%] items-end justify-center bg-[#f1f1ef] pl-8 pt-4">
        <div className="absolute -left-8 top-5 h-20 w-20 rounded-full border border-[#c1121f]/10" />
        <div className="absolute bottom-3 left-2 h-12 w-12 rounded-full bg-[#c1121f]/5" />

        <div className="relative z-10 h-[148px] w-[85%] max-w-[160px] overflow-hidden rounded-t-[75px] rounded-b-[12px] border-[4px] border-white shadow-[0_8px_20px_rgba(0,0,0,0.1)]">
          {speaker.image ? (
            <img
              src={speaker.image}
              alt={speaker.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          ) : null}
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-200 text-zinc-500">
            <span className="text-3xl font-black tracking-widest">
              {speaker.initials}
            </span>
          </div>
          {speaker.image && (
            <img
              src={speaker.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          )}
        </div>
      </div>

      {/* Information panel */}
      <div className="relative z-10 -ml-7 flex flex-1 flex-col justify-between bg-[#c1121f] px-5 py-4.5 pl-9 text-white [clip-path:polygon(20px_0%,100%_0%,100%_100%,0%_100%)]">
        <div>
          <h3 className="max-w-[210px] text-base font-black uppercase leading-tight tracking-tight mt-1.5">
            {speaker.name}
          </h3>

          <p className="mt-1.5 max-w-[210px] text-[10px] font-bold leading-snug text-red-50/90">
            {speaker.designation}
          </p>
        </div>

        <div className="mt-4 flex items-center gap-3 border-t border-white/20 pt-2.5">
          <a
            href={speaker.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-wider text-red-50 transition hover:text-white"
          >
            <LinkedInIcon />
            LinkedIn
          </a>

          <span className="h-3 w-px bg-white/30" />

          <a
            href={speaker.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-wider text-red-50 transition hover:text-white"
          >
            <GlobeIcon />
            Website
          </a>
        </div>

        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0 h-10 w-10 translate-x-4 translate-y-4 rounded-full border border-white/10" />
      </div>
    </article>
  );
}

export default function SpeakersSection({
  isMobile = false,
}: SpeakersSectionProps) {
  if (isMobile) {
    return (
      <article id="mobile-speakers" className="w-full">
        <h2 className="font-serif text-2xl font-extrabold uppercase leading-tight text-black">
          Our Eminent <span className="text-[#c1121f]">Speakers</span>
        </h2>
        <div className="mb-6 mt-3 h-[3px] w-12 bg-[#c1121f]" />

        <div className="grid grid-cols-1 gap-3">
          {speakers.map((speaker, index) => (
            <article
              key={speaker.name}
              className="relative flex items-center gap-3 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-[#c1121f]" />

              <SpeakerImage speaker={speaker} mobile />

              <div className="min-w-0 flex-grow pr-1">
                <h4 className="mt-1 truncate text-xs font-black uppercase text-black">
                  {speaker.name}
                </h4>
                <p className="mt-0.5 text-[9px] font-bold leading-snug text-zinc-500">
                  {speaker.designation}
                </p>
              </div>

              <div className="ml-auto shrink-0 rounded-full bg-zinc-100 p-2 text-[#c1121f]">
                <ArrowUpRight />
              </div>
            </article>
          ))}
        </div>
      </article>
    );
  }

  return (
    <section className="flex flex-col">
      <header className="mb-6 flex flex-col">
        <div className="flex items-end justify-between gap-5">
          <div>
            <h2 className="font-serif text-3xl font-extrabold uppercase leading-tight tracking-tight text-black md:text-4xl">
              Our Eminent <span className="text-[#c1121f]">Speakers</span>
            </h2>
            <div className="mt-3 h-[3px] w-16 bg-[#c1121f]" />
          </div>
        </div>
      </header>

      {/* 2 x 2 speaker layout */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={speaker.name} speaker={speaker} index={index} />
        ))}
      </div>
    </section>
  );
}
