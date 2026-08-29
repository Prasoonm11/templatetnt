"use client";

interface VenueSectionProps {
  isMobile?: boolean;
}

export default function VenueSection({ isMobile = false }: VenueSectionProps) {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8970747441223!2d75.5626593761763!3d26.843140563065038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4722e1b17d05%3A0x673994ab698b671c!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  if (isMobile) {
    return (
      <article id="mobile-venue" className="w-full">
        <h2 className="font-serif text-2xl font-extrabold text-black uppercase leading-tight">
          Conference <span className="text-[#c1121f]">Venue</span>
        </h2>
        <div className="w-12 h-[3px] bg-[#c1121f] mt-3 mb-6" />

        <div className="flex flex-col gap-4 text-sm text-zinc-700 leading-relaxed">
          <p>
            The conference will be held at <strong>Manipal University Jaipur</strong>, a premier institution known for its state-of-the-art facilities and beautiful campus.
          </p>

          {/* Video Player */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-zinc-200 shadow-sm mt-1">
            <video
              src="/images/Videos/MUJ_Venue.webm"
              controls
              muted
              loop
              className="w-full h-full object-cover"
            />
          </div>

          {/* Map Embed */}
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-zinc-200 shadow-sm mt-1">
            <iframe
              src={mapEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address Box */}
          <div className="flex items-start gap-3 bg-zinc-50 border border-zinc-150 p-4 rounded-xl mt-2">
            <span className="text-[#c1121f] shrink-0 mt-0.5 select-none">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-[#c1121f] tracking-widest uppercase mb-0.5">VENUE ADDRESS</span>
              <span className="text-xs font-semibold text-zinc-700 leading-relaxed">
                Manipal University Jaipur, Dehmi-Kalan, Near GVK Toll Plaza, Jaipur-Ajmer Express Highway, Jaipur, Rajasthan 303007, India
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Header */}
      <div className="flex flex-col">
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-black tracking-tight leading-tight uppercase">
          Conference <span className="text-[#c1121f]">Venue</span>
        </h2>
        <div className="w-16 h-[3px] bg-[#c1121f] mt-3 mb-1" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 font-sans text-sm md:text-[14px] text-zinc-700 leading-relaxed font-normal pr-2">
        <p className="text-zinc-700 text-left">
          The conference will be held at <strong className="text-black font-extrabold">Manipal University Jaipur</strong>, a premier institution known for its state-of-the-art facilities and beautiful campus.
        </p>

        {/* Video & Map side-by-side */}
        <div className="grid grid-cols-2 gap-5 mt-2 h-[220px] select-none">
          {/* Video Container */}
          <div className="relative w-full h-full rounded-xl overflow-hidden border border-zinc-200 shadow-sm bg-black">
            <video
              src="/images/Videos/MUJ_Venue.webm"
              controls
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </div>

          {/* Map Container */}
          <div className="relative w-full h-full rounded-xl overflow-hidden border border-zinc-200 shadow-sm">
            <iframe
              src={mapEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Address Card */}
        <div className="flex items-start gap-3 bg-zinc-50 border border-zinc-150 p-4 rounded-xl mt-3 shadow-sm select-text">
          <span className="text-[#c1121f] shrink-0 mt-0.5 select-none">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-[#c1121f] tracking-widest uppercase mb-0.5">VENUE ADDRESS</span>
            <span className="text-xs font-semibold text-zinc-700 leading-relaxed">
              Manipal University Jaipur, Dehmi-Kalan, Near GVK Toll Plaza, Jaipur-Ajmer Express Highway, Jaipur, Rajasthan 303007, India
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
