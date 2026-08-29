"use client";

interface AboutMUJSectionProps {
  isMobile?: boolean;
}

export default function AboutMUJSection({ isMobile = false }: AboutMUJSectionProps) {
  if (isMobile) {
    return (
      <article id="mobile-about-muj">
        <h2 className="font-serif text-2xl font-extrabold text-black uppercase leading-tight">
          Manipal University <span className="text-[#c1121f]">Jaipur</span>
        </h2>
        <div className="w-12 h-[3px] bg-[#c1121f] mt-3 mb-6" />

        <div className="flex flex-col gap-4 text-sm text-zinc-700 leading-relaxed">
          <p>
            Established in 2011, <strong>Manipal University Jaipur (MUJ)</strong> is a proud member of the globally acclaimed Manipal Group, carrying forward the visionary legacy of Padma Shri Dr. T. M. A. Pai, whose mission was to make world-class education accessible and transformative. With NAAC A+ accreditation, MUJ stands as a multi-disciplinary, future-focused university that blends academic excellence with innovation.
          </p>
          <p>
            Offering a wide spectrum of career-oriented programs across engineering, architecture, design, law, management, humanities, sciences, and more, MUJ is committed to nurturing well-rounded individuals prepared for the demands of a global world. The university’s reputation is reinforced by national and international recognition: ranked 58th in both the University and Engineering categories by NIRF 2025 and featured in prestigious global rankings such as QS Asia (701–750 band) and Times Higher Education (1201–1500 band).
          </p>
          <p>
            Beyond academics, MUJ is known for its state-of-the-art infrastructure, cutting-edge research ecosystem, and a campus designed with sustainability at its core. It is the proud recipient of a 5-star GRIHA rating and the ASSOCHAM Award for Best University Campus, testaments to its commitment to excellence in every dimension.
          </p>
        </div>
      </article>
    );
  }

  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex flex-col">
        <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-black tracking-tight leading-tight uppercase">
          Manipal University <span className="text-[#c1121f]">Jaipur</span>
        </h2>
        <div className="w-16 h-[3px] bg-[#c1121f] mt-4 mb-2" />
      </div>

      <div className="flex flex-col gap-4 font-sans text-sm md:text-base text-zinc-700 leading-relaxed font-normal pr-2">
        <p>
          Established in 2011, <strong className="text-black font-extrabold">Manipal University Jaipur (MUJ)</strong> is a proud member of the globally acclaimed Manipal Group, carrying forward the visionary legacy of Padma Shri Dr. T. M. A. Pai, whose mission was to make world-class education accessible and transformative. With NAAC A+ accreditation, MUJ stands as a multi-disciplinary, future-focused university that blends academic excellence with innovation.
        </p>
        <p>
          Offering a wide spectrum of career-oriented programs across engineering, architecture, design, law, management, humanities, sciences, and more, MUJ is committed to nurturing well-rounded individuals prepared for the demands of a global world. The university’s reputation is reinforced by national and international recognition: ranked 58th in both the University and Engineering categories by NIRF 2025 and featured in prestigious global rankings such as QS Asia (701–750 band) and Times Higher Education (1201–1500 band).
        </p>
        <p>
          Beyond academics, MUJ is known for its state-of-the-art infrastructure, cutting-edge research ecosystem, and a campus designed with sustainability at its core. It is the proud recipient of a 5-star GRIHA rating and the ASSOCHAM Award for Best University Campus, testaments to its commitment to excellence in every dimension.
        </p>
      </div>
    </div>
  );
}
