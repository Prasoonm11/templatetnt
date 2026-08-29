"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const feeStructure = [
  {
    category: "Students / Researchers",
    inr: "₹9,000",
    usd: "$200",
  },
  {
    category: "Academicians",
    inr: "₹10,000",
    usd: "$250",
  },
  {
    category: "Industry Participants",
    inr: "₹12,500",
    usd: "$300",
  },
  {
    category: "Attendee Only",
    inr: "₹2,500",
    usd: "$100",
  },
];

const instructions = [
  "For successful registration, at least one author should register before the deadline.",
  "The registration fee includes participation at the conference, food, a conference kit and a one-day gala dinner.",
  "Boarding and lodging will be borne by participants only.",
  "After payment, note down the transaction ID and save a snapshot of the payment. Transaction ID and snapshots are required for registration.",
  "A presentation certificate will be issued to the presenter only.",
  "If multiple papers are accepted for publication and presentation by the same author(s), each paper requires a registration fee to be included in the proceedings.",
  "Do not enquire about registration status via email/phone. You will be notified via email once the payment information is updated with us from the finance section.",
];

export default function Registration() {
  const [isQREnlarged, setIsQREnlarged] = useState(false);

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
              Registration
            </h1>
            <div className="w-16 h-[4px] bg-[#c1121f] md:bg-white mt-4" />
          </div>
        </div>

        {/* Content Container */}
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 font-sans text-sm md:text-base text-zinc-700 leading-relaxed font-normal flex flex-col gap-10">
          
          {/* Header Text */}
          <section className="flex flex-col gap-3">
            <p>
              The authors agree that if the paper is accepted for oral presentation, at least one of the authors will register for the conference and present the paper. The registration fee is given below for your reference:
            </p>
          </section>

          {/* Pricing Table Section */}
          <section className="flex flex-col gap-3">
            <div className="overflow-x-auto border border-zinc-200 rounded-xl shadow-sm select-none">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-200 text-xs font-black uppercase text-zinc-600 tracking-wider">
                    <th className="px-6 py-4">Participant Category</th>
                    <th className="px-6 py-4">Indian Attendees (INR)</th>
                    <th className="px-6 py-4">International Attendees (USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 text-xs font-semibold text-zinc-800">
                  {feeStructure.map((row, index) => (
                    <tr key={index} className="hover:bg-zinc-50 transition duration-150">
                      <td className="px-6 py-4 font-bold text-black">{row.category}</td>
                      <td className="px-6 py-4 text-[#c1121f] font-extrabold">{row.inr}</td>
                      <td className="px-6 py-4 text-zinc-600 font-extrabold">{row.usd}</td>
                    </tr>
                  ))}
                </tbody>
                </table>
              </div>
              
              {/* Paper Details Footer */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-zinc-50 border border-zinc-150 p-4 rounded-xl mt-3 font-semibold text-xs text-zinc-600 select-none">
                <div>
                  📖 <strong>Paper Page Limit:</strong> 10-12 pages
                </div>
                <div className="text-[#c1121f] font-bold">
                  ⚠️ Note: Registration fee is NOT refundable.
                </div>
              </div>
          </section>

          {/* Stepper Process Section */}
          <section className="flex flex-col gap-4">
            <h2 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight">
              Registration Process
            </h2>
            <div className="w-10 h-[2px] bg-[#c1121f] mb-2" />
            <p>
              The registration for TrustNet 2026 is a two-step process:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-none mt-2">
              {/* Step 1 Card */}
              <div className="flex flex-col h-full bg-zinc-50 border border-zinc-150 p-6 rounded-2xl relative overflow-hidden shadow-sm">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#c1121f]" />
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="font-mono text-xs font-black text-[#c1121f]">STEP 01</span>
                    <h3 className="font-serif text-lg font-bold text-black leading-snug mt-1">Pay Registration Fee</h3>
                    <p className="text-xs text-zinc-500 font-semibold leading-relaxed mt-2.5">
                      Complete the online payment based on your registration category. Keep a snapshot of the payment receipt and note down the transaction ID.
                    </p>
                  </div>

                  {/* Payment Actions Container */}
                  <div className="mt-6 pt-4 border-t border-zinc-200/60 flex flex-col items-center gap-4 w-full">
                    {/* QR Code Container (Fixed Height) */}
                    <div className="flex items-center justify-center h-32">
                      <button
                        onClick={() => setIsQREnlarged(true)}
                        className="relative w-28 h-28 border border-zinc-200 rounded-lg overflow-hidden bg-white p-1.5 shadow-sm hover:border-[#c1121f]/50 hover:shadow-md cursor-pointer transition duration-150 focus:outline-none"
                        aria-label="Enlarge QR Code"
                      >
                        <img
                          src="/images/payment_qr_code.jpg"
                          alt="Payment QR Code"
                          className="w-full h-full object-contain"
                        />
                      </button>
                    </div>

                    {/* Payment Link (Full Width) */}
                    <a
                      href="https://pages.razorpay.com/trustnet2026-temp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white font-black py-3 rounded-lg hover:bg-zinc-800 transition duration-150 text-[10px] md:text-xs uppercase tracking-wider text-center w-full shadow-sm active:scale-95"
                    >
                      Pay Online (Temporary Link)
                    </a>
                  </div>
                </div>
              </div>

              {/* Step 2 Card */}
              <div className="flex flex-col h-full bg-zinc-50 border border-zinc-150 p-6 rounded-2xl relative overflow-hidden shadow-sm">
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#c1121f]" />
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="font-mono text-xs font-black text-[#c1121f]">STEP 02</span>
                    <h3 className="font-serif text-lg font-bold text-black leading-snug mt-1">Fill the Registration Form</h3>
                    <p className="text-xs text-zinc-500 font-semibold leading-relaxed mt-2.5">
                      Fill out the Google form with your payment receipt snapshots, transaction details, and paper metadata to confirm registration.
                    </p>
                  </div>

                  {/* Google Form Action Container */}
                  <div className="mt-6 pt-4 border-t border-zinc-200/60 flex flex-col items-center gap-4 w-full">
                    {/* Google Form Prompt Details (Fixed Height) */}
                    <div className="flex flex-col items-center justify-center h-32 text-center gap-1.5">
                      <span className="text-[9px] font-black text-[#c1121f] tracking-widest uppercase">REGISTRATION GOOGLE FORM</span>
                      <h4 className="text-xs md:text-sm font-black text-black uppercase tracking-wider">Ready to complete Step 2?</h4>
                      <p className="text-[11px] text-zinc-500 font-semibold leading-relaxed max-w-[240px]">
                        Click the link below to load the official registration confirmation form.
                      </p>
                    </div>

                    {/* Google Form Button (Full Width) */}
                    <a
                      href="https://forms.gle/oTpNb7hsXK49sTC88"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#c1121f] text-white font-black py-3 rounded-lg hover:bg-red-800 transition duration-150 text-[10px] md:text-xs uppercase tracking-wider text-center w-full shadow-sm active:scale-95"
                    >
                      Click here for the registration form
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Important Instructions */}
          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-xl md:text-2xl font-black text-black uppercase tracking-tight">
              Important Instructions
            </h2>
            <div className="w-10 h-[2px] bg-[#c1121f] mb-2" />
            <ul className="list-disc pl-5 flex flex-col gap-3.5 mt-2 font-semibold text-xs md:text-sm text-zinc-600">
              {instructions.map((inst, i) => (
                <li key={i} className="leading-relaxed">
                  {inst}
                </li>
              ))}
            </ul>
          </section>

        </div>
      </main>

      <Footer />

      {/* QR Code Modal Lightbox */}
      {isQREnlarged && (
        <div
          onClick={() => setIsQREnlarged(false)}
          className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center backdrop-blur-sm cursor-pointer select-none"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-2xl relative max-w-[90%] max-h-[80%] aspect-square flex flex-col items-center justify-center animate-in zoom-in-95 duration-200"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsQREnlarged(false)}
              className="absolute -top-3 -right-3 h-8 w-8 bg-[#c1121f] text-white rounded-full flex items-center justify-center font-bold shadow-md hover:bg-red-800 transition duration-150 border-2 border-white focus:outline-none"
            >
              ✕
            </button>
            <img
              src="/images/payment_qr_code.jpg"
              alt="Payment QR Code"
              className="w-80 h-80 sm:w-96 sm:h-96 object-contain"
            />
            <span className="text-[10px] font-black tracking-wider text-zinc-500 uppercase mt-4">
              Scan to Pay / Tap anywhere to close
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
