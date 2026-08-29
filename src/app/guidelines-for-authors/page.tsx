"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GuidelinesForAuthors() {
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
              For Authors
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight max-w-2xl">
              Author Guidelines
            </h1>
            <div className="w-16 h-[4px] bg-[#c1121f] md:bg-white mt-4" />
          </div>
        </div>

        {/* Content Section */}
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Main Content Area */}
            <div className="flex-grow flex flex-col gap-10 font-sans text-sm md:text-base text-zinc-700 leading-relaxed font-normal">
              
              {/* Introduction & Submission link */}
              <section className="flex flex-col gap-3">
                <p>
                  The International Conference on Trusted Networks and Intelligent Systems (TrustNet 2026) seeks original research contributions across various disciplines, provided the work's context is adequately articulated. Researchers are encouraged to submit their papers by the specified deadline. After this date, no new papers will be accepted for submission, although modifications to existing submissions will still be possible.
                </p>
                <p>
                  This conference brings together researchers, academicians, industry leaders, and practitioners to exchange ideas and explore advancements in AI, Computing, Blockchain, Cybersecurity, Digital and Network Security, fostering collaboration and innovation for a smarter, secure future.
                </p>

                {/* Submissions Note */}
                <div className="bg-zinc-50 border border-zinc-150 p-5 rounded-2xl mt-3 select-none flex flex-col items-center text-center">
                  <span className="text-[9px] font-black text-[#c1121f] tracking-widest uppercase mb-1">ONLINE PORTAL</span>
                  <h3 className="text-sm font-black text-black uppercase tracking-wider mb-2">Paper Submission Portal</h3>
                  <a
                    href="https://cmt3.research.microsoft.com/TrustNet2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#c1121f] text-white font-black px-6 py-3 rounded-lg hover:bg-red-800 transition duration-150 shadow-md hover:shadow-lg uppercase tracking-wider text-xs active:scale-95 mb-4 inline-block max-w-full text-center truncate"
                  >
                    Submit Paper via Microsoft CMT
                  </a>
                  <p className="text-xs text-zinc-500 max-w-xl leading-relaxed">
                    The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                  </p>
                </div>
              </section>

              {/* Manuscript Prep & Submission */}
              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight">
                  Manuscript Preparation & Submission Guidelines
                </h2>
                <div className="w-10 h-[2px] bg-[#c1121f]" />
                <p className="mt-1">
                  All submissions for TrustNet will be managed through emails. By submitting, the authors agree to TrustNet 2026's policies. Each submission will receive a unique paper ID, which should be used in all communications. Kindly remember the paper ID and quote that ID in all further communications in the subject line when you email us your query.
                </p>
              </section>

              {/* Article Types & Language */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-none">
                <div className="bg-zinc-50 border border-zinc-150 p-5 rounded-2xl relative overflow-hidden flex flex-col">
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-[#c1121f]" />
                  <span className="text-[9px] font-black tracking-wider text-zinc-400 uppercase mb-1.5">ARTICLE TYPES</span>
                  <h3 className="text-sm font-black text-black uppercase">Novel Research</h3>
                  <p className="text-xs text-zinc-500 font-semibold leading-relaxed mt-2.5">
                    Articles with novel research contributions on the conference's theme should be submitted to TrustNet 2026.
                  </p>
                </div>

                <div className="bg-zinc-50 border border-zinc-150 p-5 rounded-2xl relative overflow-hidden flex flex-col">
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-[#c1121f]" />
                  <span className="text-[9px] font-black tracking-wider text-zinc-400 uppercase mb-1.5">LANGUAGE STYLE</span>
                  <h3 className="text-sm font-black text-black uppercase">Standard English</h3>
                  <p className="text-xs text-zinc-500 font-semibold leading-relaxed mt-2.5">
                    The default language style at TrustNet 2026 is standard English language only. Authors should submit manuscripts in English only.
                  </p>
                </div>
              </div>

              {/* Detailed Preparation Guidelines */}
              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight">
                  Manuscript Formatting Rules
                </h2>
                <div className="w-10 h-[2px] bg-[#c1121f]" />
                <ul className="list-disc pl-5 flex flex-col gap-3.5 mt-2 font-semibold text-xs md:text-sm text-zinc-600">
                  <li><strong className="text-black">Title:</strong> First letter of each word except helping verbs and connectors should be uppercase letters only.</li>
                  <li><strong className="text-black">Perspective:</strong> Usage of first/second/third person (our, me, us, I, etc.) should be avoided in the manuscript.</li>
                  <li><strong className="text-black">Proofreading:</strong> Authors are required to proofread the paper for English usage (possibly by a native speaker proofreading).</li>
                  <li><strong className="text-black">Abstract:</strong> Abbreviations should be avoided in abstract.</li>
                  <li><strong className="text-black">Figures & Resolution:</strong> Include all figures in high resolution only. Try to keep the DPI of every figure above 500. Do not include blurred images.</li>
                  <li><strong className="text-black">Organization:</strong> Contents need to be well organized. Title, objective, research gap, proposed methodology, and results need to be inline. Authors should include motivation and a paper organization at the end of the introduction section.</li>
                  <li><strong className="text-black">Captions:</strong> All images and tables must be numbered and provided with a suitable caption. Do not paste tables as figures or snapshots.</li>
                  <li><strong className="text-black">Equations:</strong> All equations must be numbered sequentially and discussed in the text.</li>
                  <li><strong className="text-black">Citations:</strong> All images, tables, equations, and references must be cited in the text. Check in-text citations of all these items before final submission.</li>
                  <li><strong className="text-black">Keywords:</strong> Mention at least 5 to 8 keywords in the manuscript.</li>
                  <li><strong className="text-black">Abbreviations:</strong> Abbreviations should be expanded to their first usage only. Non-standard abbreviations should be avoided.</li>
                  <li><strong className="text-black">Headings:</strong> All sections and subsections of the manuscript must be numbered properly. Do not include headings beyond 3 levels.</li>
                  <li><strong className="text-black">Acknowledgements:</strong> Acknowledgements (if any) should be included after the conclusion section.</li>
                  <li><strong className="text-black">Author Details:</strong> Author names and ordering must be kept identical in all places (i.e., Manuscript, Submission portal, and Consent to Publish form). Include the name, affiliation and e-mail of all authors in both the manuscript as well as on the submission portal. In addition, do not forget to mention the details of the corresponding author.</li>
                  <li><strong className="text-black">Conclusion:</strong> The conclusion should be novel and supported by statistical remarks on the results of experimental study.</li>
                  <li><strong className="text-black">References:</strong> Reference items should be complete. Avoid incomplete and not cited references in the list.</li>
                </ul>
              </section>

              {/* Template downloads */}
              <section className="flex flex-col gap-4">
                <h2 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight">
                  Download Templates
                </h2>
                <div className="w-10 h-[2px] bg-[#c1121f]" />
                <p>
                  Download the Word/LaTeX template below and submit your manuscript as per the template. The manuscript should be kept within the page limit of **10-12 pages**.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2 select-none">
                  {/* Word Template */}
                  <div className="border border-zinc-200 rounded-2xl p-5 flex flex-col justify-between hover:border-[#c1121f]/50 transition duration-200 bg-zinc-50 shadow-sm text-center">
                    <div>
                      <span className="text-[9px] font-black tracking-widest text-[#c1121f] uppercase mb-1.5 block">MICROSOFT WORD</span>
                      <h3 className="text-sm font-black text-black uppercase mb-1">Word Template</h3>
                      <p className="text-xs text-zinc-500 font-semibold leading-relaxed mb-4">
                        Download the single-column Word document formatting template (.zip).
                      </p>
                    </div>
                    <a
                      href="/templetes/word.zip"
                      download
                      className="bg-[#c1121f] text-white font-black py-2.5 rounded-lg hover:bg-red-800 transition duration-150 text-xs uppercase tracking-wider"
                    >
                      Download Word Template
                    </a>
                  </div>

                  {/* LaTeX Template */}
                  <div className="border border-zinc-200 rounded-2xl p-5 flex flex-col justify-between hover:border-[#c1121f]/50 transition duration-200 bg-zinc-50 shadow-sm text-center">
                    <div>
                      <span className="text-[9px] font-black tracking-widest text-zinc-700 uppercase mb-1.5 block">LATEX PORTAL</span>
                      <h3 className="text-sm font-black text-black uppercase mb-1">LaTeX Template</h3>
                      <p className="text-xs text-zinc-500 font-semibold leading-relaxed mb-4">
                        Download the official LaTeX source formatting package (.zip).
                      </p>
                    </div>
                    <a
                      href="/templetes/latex.zip"
                      download
                      className="bg-black text-white font-black py-2.5 rounded-lg hover:bg-zinc-800 transition duration-150 text-xs uppercase tracking-wider"
                    >
                      Download LaTeX Template
                    </a>
                  </div>
                </div>
              </section>

              {/* Confidentiality */}
              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight">
                  Confidentiality
                </h2>
                <div className="w-10 h-[2px] bg-[#c1121f]" />
                <p className="mt-1">
                  The conference committee maintains strict confidentiality throughout the process, from submission to decision-making on every article considered for review. Reviewers involved in this whole review process are from reputed universities throughout the globe, and the practice of keeping all information confidential during the review is part of the standard communication with all reviewers.
                </p>
              </section>

              {/* Review Process */}
              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight">
                  Review Process
                </h2>
                <div className="w-10 h-[2px] bg-[#c1121f]" />
                <p className="mt-1">
                  Once an article is submitted to the conference, the authors agree to our review policy, where the article will be peer-reviewed by professional reviewers after being checked for similarity index and plagiarism by plagiarism detection software (Turnitin).
                </p>

                {/* Similarity Alert */}
                <div className="border-l-4 border-[#c1121f] bg-red-50 p-5 rounded-r-2xl my-3 text-left">
                  <span className="text-[10px] font-black text-[#c1121f] tracking-widest uppercase mb-1 block">PLAGIARISM THRESHOLD</span>
                  <p className="text-xs font-semibold text-zinc-700 leading-relaxed">
                    TrustNet 2026 respects Intellectual Property Rights. Plagiarism is defined as the incorrect appropriation of someone else's information, thoughts, or ideas and presenting them as one's own. The conference committee will not tolerate this sort of breach of ethical norms at any cost. 
                  </p>
                  <p className="text-xs font-black text-black leading-relaxed mt-2.5">
                    ⚠️ Any article with more than 18% similarity index will be rejected immediately without further consideration. The similarity should not be greater than 2% from a single source.
                  </p>
                </div>
              </section>

              {/* Dual Submission */}
              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight">
                  Dual/Double Submissions Policy
                </h2>
                <div className="w-10 h-[2px] bg-[#c1121f]" />
                <p className="mt-1">
                  Our conference aims to present novel research and ensure efficient use of reviewers' efforts. Authors submitting manuscripts acknowledge that their work has not been previously published or accepted for publication in a substantially similar form in any peer-reviewed venue. Any breach of these conditions will result in rejection and notification to the other venue where the submission was made. Submissions should be original and not duplicate prior publications or ongoing submissions.
                </p>
                <p>
                  Include citations in your manuscript if you need to reference another paper concurrently submitted to the conference. Clearly articulate in your paper how your submission differs significantly from these concurrent works and provide the additional papers in the supplemental material. Authors are encouraged to contact the Program Chairs for further clarification if needed.
                </p>
              </section>

              {/* Attendance responsibilities */}
              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight">
                  Attendance Responsibilities
                </h2>
                <div className="w-10 h-[2px] bg-[#c1121f]" />
                <p className="mt-1">
                  The authors must agree that if the paper is accepted, at least one of the authors will register for the conference and present the paper there. Acceptance of a paper does not claim for final publication. Only presented papers will be forwarded to the publication partner. Presenters will be provided with a certificate of paper presentation.
                </p>
              </section>

              {/* Publication */}
              <section className="flex flex-col gap-3">
                <h2 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight">
                  Publication
                </h2>
                <div className="w-10 h-[2px] bg-[#c1121f]" />
                <p className="mt-1">
                  Select accepted and presented papers at the conference will be submitted for publication through our publication partners. Before final publication, proofs may be sent to the corresponding author designated in the manuscript. It is crucial to provide the corresponding author's correct email address. Please regularly visit the conference website for updates on publication specifics.
                </p>
                <p className="font-bold text-black border-l-4 border-black pl-4 my-2.5">
                  Papers found to be plagiarised / having ethical concerns during any stage of the publication process (either by the conference committee or by the publication partner) shall be rejected immediately. If found in CRC of manuscript after registration fees deposition, then registration fees will NOT be refunded.
                </p>
              </section>

              {/* Publicity */}
              <section className="flex flex-col gap-3 mb-6">
                <h2 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight">
                  Publicity
                </h2>
                <div className="w-10 h-[2px] bg-[#c1121f]" />
                <p className="mt-1">
                  All articles submitted to the conference cannot be fully or partially publicised on any social media platform until an official acceptance email is received from the publisher. If any author(s) violate this act, their article will be rejected for presentation and removed from the proceeding for publication.
                </p>
              </section>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
