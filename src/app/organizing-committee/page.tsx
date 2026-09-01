"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface CommitteeMember {
  name: string;
  role: string;
  designation: string;
  initials: string;
  image: string;
}

function CommitteeCard({
  member,
  index,
}: {
  member: CommitteeMember;
  index: number;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <article className="group relative flex flex-col items-center bg-white border border-zinc-200/90 rounded-[22px] p-3.5 sm:p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.09)] hover:border-[#c1121f]/35 hover:-translate-y-1 transition-all duration-300 select-none overflow-hidden">
      
      {/* Top Role Header */}
      <div className="w-full flex items-center justify-between mb-3 border-b border-zinc-100 pb-2">
        <span className="font-mono text-[9px] font-black text-[#c1121f] tracking-wider uppercase truncate max-w-[130px]">
          {member.role}
        </span>
        <span className="font-mono text-[9px] font-bold text-zinc-400">
          {index + 1 < 10 ? `0${index + 1}` : index + 1}
        </span>
      </div>

      {/* Portrait Stage Canvas (matching Speaker frame style) */}
      <div className="relative w-full flex items-end justify-center py-2.5 bg-[#f1f1ef] rounded-2xl overflow-hidden mb-3">
        {/* Background decorative circular halo */}
        <div className="absolute -left-6 top-2 h-16 w-16 rounded-full border border-[#c1121f]/10 pointer-events-none" />
        <div className="absolute bottom-1 right-1 h-12 w-12 rounded-full bg-[#c1121f]/5 pointer-events-none" />

        {/* Arch-shaped Portrait Frame */}
        <div className="relative z-10 h-[175px] w-[130px] sm:h-[195px] sm:w-[145px] overflow-hidden rounded-t-[70px] rounded-b-[14px] border-[3.5px] border-white shadow-[0_6px_18px_rgba(0,0,0,0.12)] bg-zinc-200">
          {hasError || !member.image ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-200 text-zinc-600 select-none">
              <span className="font-serif text-2xl sm:text-3xl font-black tracking-wider text-[#c1121f]">
                {member.initials}
              </span>
              <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest mt-1">
                Photo Pending
              </span>
            </div>
          ) : (
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="200px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setHasError(true)}
            />
          )}
        </div>
      </div>

      {/* Name and Designation */}
      <div className="w-full text-center mt-0.5 flex flex-col">
        <h3 className="font-sans text-xs sm:text-[13px] font-black text-black uppercase tracking-tight leading-snug">
          {member.name}
        </h3>
        <p className="font-sans text-[9.5px] sm:text-[11px] text-zinc-500 font-semibold leading-tight mt-1">
          {member.designation}
        </p>
      </div>

    </article>
  );
}

const primaryCommittee = [
  {
    name: "Mr. S. Vaitheeswaran",
    role: "Chief Patron",
    designation: "Chairperson",
    initials: "SV",
    image: "/images/committee/S-Vaitheeswaran.jpg"
  },
  {
    name: "Prof. Dr. N. N. Sharma",
    role: "Patron",
    designation: "President",
    initials: "NS",
    image: "/images/committee/dr-nnsharma.jpg"
  },
  {
    name: "Dr. Karunakar A Kotegar",
    role: "Co-Patron",
    designation: "Pro-President",
    initials: "KK",
    image: "/images/committee/karunakar-1.jpg"
  },
  {
    name: "Dr. Amit Soni",
    role: "Co-Patron",
    designation: "Registrar",
    initials: "AS",
    image: "/images/committee/amit-soni.jpg"
  },
  {
    name: "Prof. Nitu Bhatnagar",
    role: "Co-Patron",
    designation: "Provost",
    initials: "NB",
    image: "/images/committee/Nitu-Bhatnagar.jpg"
  },
  {
    name: "Prof. Dr. Kuldip Singh Sangwan",
    role: "General Chair",
    designation: "Dean – Faculty of Engineering",
    initials: "KS",
    image: "/images/committee/Dr-Kuldip-Singh.jpg"
  },
  {
    name: "Dr. Chhatar Singh Lamba",
    role: "General Chair",
    designation: "Professor & Associate Dean",
    initials: "CL",
    image: "/images/committee/cslamba.jpg"
  },
  {
    name: "Prof. Dr. Neha Chaudhary",
    role: "Program Chair",
    designation: "Professor & HoD, CSE",
    initials: "NC",
    image: "/images/committee/Neha-Chaudhary.jpeg"
  },
  {
    name: "Dr. Umashankar Rawat",
    role: "Program Co-Chair",
    designation: "Professor",
    initials: "UR",
    image: "/images/committee/us-rawat.jpg"
  },
  {
    name: "Dr. Satyabrata Roy",
    role: "Program Co-Chair",
    designation: "Associate Professor, CSE",
    initials: "SR",
    image: "/images/committee/Dr-Satyabrata-Roy.jpg"
  },
  {
    name: "Dr. Mahesh Jangid",
    role: "Program Co-Chair",
    designation: "Associate Professor, CSE",
    initials: "MJ",
    image: "/images/committee/Mahesh-Jangid.jpg"
  },
  {
    name: "Dr. Amit Garg",
    role: "Organizing Chair",
    designation: "Associate Professor, CSE",
    initials: "AG",
    image: "/images/committee/amit-garg.jpeg"
  },
  {
    name: "Dr. Ankur Pandey",
    role: "Organizing Chair",
    designation: "Assistant Professor, CSE",
    initials: "AP",
    image: "/images/committee/ankur-pandey.jpg"
  },
  {
    name: "Dr. Neetu Gupta",
    role: "Organizing Co-Chair",
    designation: "Assistant Professor, CSE",
    initials: "NG",
    image: "/images/committee/neetu-gupta.jpg"
  }
];

const updatedOrganizingCommitteeGroups = [
  {
    role: "Liaisoning Officers ",
    members: ["Dr Manish Gupta", "Dr. Madhu Sharma", "Dr Dibakar Sinha", "Dr Rishi Shrivastava"],
  },
  {
    role: "Finance Committee",
    members: [
      "Dr. Rishi Gupta (Coordinator)",
      "Dr. Amit Kumar Gupta",
      "Dr. Ashok Kumar Saini",
    ],
  },
  {
    role: "Registration Committee",
    members: [
      "Dr. Bali Devi (Coordinator)",
      "Ms. Babita Tiwari (Coordinator)",
      "Ms. Tripti Kulshrestha",
      "Dr. Kuntal Gaur",
      "Dr. Prashant Vats",
      "Dr. Sushama",
    ],
  },
  {
    role: "Stage Management",
    members: [
      "Dr. Anita Shrotriya (Coordinator)",
      "Dr Nandini Babbar",
      "Ms. Shweta Sharma",
      "Dr. Susheela Vishnoi",
      "Dr. Rishi Kumar Srivastva",
    ],
  },
  {
    role: "Food Committee",
    members: [
      "Mr. Lav Upadhyay (Coordinator)",
      "Ms. Surbhi Syal",
      "Ms. Neha Singh",
      "Dr. Pradeep Kumar",
      "Dr. Venkatesh Gauri Shankar (Coordinator)",
      "Mr. Anil Kumar",
    ],
  },
  {
    role: "Keynote Session Moderator & Panel Discussion",
    members: [
      "Dr. Riddhi Arora (Coordinator)",
      "Dr. Amandeep Cheema",
      "Ms. Gunjan Pathak",
    ],
  },
  {
    role: "Networking Dinner Management",
    members: [
      "Dr. Shishir Singh Chauhan (Coordinator)",
      "Mr. Bhawani Singh Rathore",
    ],
  },
  {
    role: "Print Media",
    members: ["Dr. Sayar Singh Shekhawat (Coordinator)", "Dr. Vaishali Chauhan"],
  },
  {
    role: "Publication committee",
    members: ["Dr. Akshay Jadhav (Coordinator)", "Dr. Mayank Namdev (Coordinator)"],
  },
  {
    role: "Technical Session Management (Online/Offline) Session Moderator",
    members: [
      "Dr. Satpal Singh Kushwaha (Coordinator)",
      "Dr. Tarun Jain (Coordinator)",
      "Dr. Aditya Sinha (Coordinator)",
      "Dr. Ajay Kumar",
      "Dr. Arpita Baronia",
      "Dr. Pallavi",
      "Ms. Vaishali Chauhan",
      "Dr Manish Gupta",
      "Dr. Abhishek Dwivedi",
      "Dr. Divya Thakur",
      "Dr. Onkar Singh",
      "Dr. Girish Sharma",
      "Dr. Tapan Kumar Dey",
      "Dr. Aditya Narayan Hati",
      "Mr. Ravinder Kumar",
      "Dr. Madhu Sharma",
    ],
  },
  {
    role: "Souvenir",
    members: [
      "Dr. Sakshi Shringi (Coordinator)",
      "Dr. Usha Jain",
      "Dr. Surbhi Sharma",
      "Ms. Soni Gupta",
    ],
  },
  {
    role: "Transportation and Accommodation",
    members: [
      "Mr. Harish Sharma (Coordinator)",
      "Mr. Abhay Singh Bisht (Coordinator)",
      "Dr. Shivendra Dubey",
    ],
  },
  {
    role: "Web & IT Support Committee",
    members: ["Dr. Ajit Noonia (Coordinator)", "Dr. Dibakar Sinha"],
  },
  {
    role: 'Student Volunteer',
    members: [
    'Samaksh Gupta (Coordinator)',
    'Aryan Verma (Coordinator)',
    'Tiya Chhabra (Coordinator)',
    'Satya Agrawal (Coordinator)',
    'Parv Rangbulla',
    'Harshit Attri',
    'Kshitij Verma',
    'Tamanna Yadav',
    'Mehul Bhardwaj',
    'Krishna Goel',
    'Gayathri Ravindran',
    'Yashi Gupta',
    ],
  },
];

export default function OrganizingCommittee() {
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
              TrustNet 2026
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight max-w-2xl">
              Organizing Committee
            </h1>
            <div className="w-16 h-[4px] bg-[#c1121f] md:bg-white mt-4" />
          </div>
        </div>

        {/* Content Container */}
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 flex flex-col gap-16">
          
          {/* Primary Committee Frames */}
          <section className="flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {primaryCommittee.map((member, index) => (
                <CommitteeCard key={index} member={member} index={index} />
              ))}
            </div>
          </section>

          {/* More Committee Members Section */}
          <section className="flex flex-col">
            <div className="mb-6">
              <h2 className="font-serif text-2xl font-black uppercase text-black tracking-tight">
                Committee Board
              </h2>
              <div className="w-12 h-[3px] bg-[#c1121f] mt-2" />
            </div>

            {/* Committee Table */}
            <div className="overflow-x-auto border border-zinc-200 rounded-xl shadow-sm select-none">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-200 text-[10px] md:text-xs font-black uppercase text-zinc-600 tracking-wider">
                    <th className="px-6 py-4 w-1/3">Committee / Role</th>
                    <th className="px-6 py-4">Members</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 text-xs font-semibold text-zinc-800">
                  {updatedOrganizingCommitteeGroups.map((group, index) => (
                    <tr key={index} className="hover:bg-zinc-50 transition duration-150">
                      <td className="px-6 py-4 text-[#c1121f] font-extrabold uppercase tracking-wider align-top">
                        {group.role}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          {group.members.map((member, i) => {
                            const isCoordinator = member.includes("(Coordinator)");
                            return (
                              <span
                                key={i}
                                className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold transition duration-150 ${
                                  isCoordinator
                                    ? "bg-red-50 text-[#c1121f] border border-red-200 font-extrabold shadow-sm"
                                    : "bg-zinc-100 text-zinc-800 border border-zinc-200/60 shadow-sm"
                                }`}
                              >
                                {member}
                              </span>
                            );
                          })}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
