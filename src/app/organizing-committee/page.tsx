"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Safe Image Fallback Component
interface CommitteeImageProps {
  src: string;
  name: string;
  initials: string;
}

function CommitteeImage({ src, name, initials }: CommitteeImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full aspect-[4/5] bg-zinc-950 overflow-hidden border-[3px] border-[#c1121f] shadow-inner">
      {hasError ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950 text-white select-none">
          <span className="font-serif text-3xl font-black tracking-wider text-red-200">
            {initials}
          </span>
          <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mt-2">
            Photo Pending
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={name}
          fill
          sizes="280px"
          className="object-cover"
          onError={() => setHasError(true)}
        />
      )}
    </div>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {primaryCommittee.map((member, index) => (
                <div key={index} className="flex flex-col items-center select-none">
                  {/* Image container with Red Border */}
                  <div className="w-full relative">
                    <CommitteeImage 
                      src={member.image} 
                      name={member.name} 
                      initials={member.initials} 
                    />
                    {/* Floating Name Banner Overlay at bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#c1121f] text-white py-1.5 px-3 text-center border-t-[3px] border-[#c1121f]">
                      <span className="block font-sans text-[10px] md:text-xs font-black tracking-wide uppercase truncate">
                        {member.name}
                      </span>
                    </div>
                  </div>
                  
                  {/* Role and Designation */}
                  <div className="text-center mt-3">
                    <h3 className="font-sans text-xs md:text-sm font-black text-black uppercase tracking-wider">
                      {member.role}
                    </h3>
                    <p className="font-sans text-[10px] md:text-xs text-zinc-500 font-semibold leading-tight mt-0.5">
                      {member.designation}
                    </p>
                  </div>
                </div>
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
