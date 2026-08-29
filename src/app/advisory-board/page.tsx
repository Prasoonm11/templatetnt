"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const internationalMembers = [
  [
    "Vidyacharan Bhaskar",
    "San Francisco State University, San Francisco, CA, USA",
  ],
  ["Rajkumar Buyya", "University of Melbourne, Australia"],
  ["Irfa Javed", "Manager-Partnership (South Asia), Deakin University, Australia"],
  [
    "Robin T. Bye",
    "Norwegian University of Science and Technology, Alesund, Norway",
  ],
  ["Max Henrique Machado Costa", "University of Campinas, Brazil"],
  ["Aleksander Karadimche", "UIST, Northern Rep. of Macedonia"],
  ["Dijana Capeska Bogatinoska", "UIST, Northern Rep. of Macedonia"],
  ["Dmytro Zubov", "Technical University of Ostrava, Czech Republic"],
  ["Danish Ather", "Amity University, Tashkent"],
  ["Biju Issac", "Northumbria University, Newcastle, UK"],
  ["Pinnamaneni Bhanu Prasad", "Kelenn Technology, France"],
  [
    "Vijander Singh",
    "Norwegian University of Science and Technology (NTNU), Alesund, Norway",
  ],
  ["Kristina", "Technical University of Varna, Bulgaria"],
  ["Tomas Sochor", "Technical University of Ostrava, Czech Republic"],
  ["Eustrat Zhupa", "University of Rochester, Rochester, NY"],
  ["Monika Polak", "Rochester Institute of Technology, Rochester, NY"],
  [
    "Florin POPENTIU VLÃDICESCU",
    "University “Politehnica” of Bucharest and Co-Chairholder to UNESCO Chair, University of Oradea, Romania",
  ],
  ["Álvaro Rocha", "University of Coimbra, Portugal"],
  ["Weiler Finnamore", "Universidade Federal de Juiz de Fora, Brazil"],
  [
    "Hamurabi Gamboa-Rosales",
    "Autonomous University of Zacatecas, Mexico",
  ],
  [
    "Pushpendu Kar",
    "University of Nottingham UK (China campus)",
  ],
  ["Mohammad Nasar", "Mazoon College Muscat, Sultanate of Oman"],
  ["Mohammad Abu Kausar", "University of Nizwa, Sultanate of Oman"],
  ["Anand Nayyar", "Duy Tan University, Da Nang, Vietnam"],
  [
    "Aruna Kumar S V",
    "University of Beira Interior Covilha Portugal",
  ],
];

const nationalMembers = [
  ["Virendra Singh", "Indian Institute of Technology Bombay, India"],
  [
    "Amitava Das",
    "Director, CSIR-CSMCRI, Distinguished Professor AcSIR, Bhavnagar, Gujrat, India",
  ],
  ["Manu Pratap Singh", "Dr. Bhimrao Ambedkar University, Agra, India"],
  ["Amit Chaturvedi", "Govt Engineering College Ajmer, Ajmer, India"],
  ["Sunil Kumar Muttoo", "University of Delhi, India"],
  ["Vipin Tyagi", "Jaypee University of Engineering and Technology Guna, India"],
  ["K. Lobiyal", "Jawaharlal Nehru University, Delhi, India"],
  ["K. Mishra", "Chairman, ACM Udaipur Chapter, India"],
  ["V. Desai", "Vice chancellor, MVN University. Haryana, India"],
  ["Sudeep Tanwar", "Nirma University, Ahmedabad"],
  ["C. Bishnoi", "ACM Udaipur Chapter, India"],
  ["Amit Joshi", "Secretary, ACM Udaipur Chapter, India"],
  ["Durgesh Mishra", "Shri Aurobindo Institute of Technology, Indore, MP, India"],
  ["Vijay Singh Rathore", "IP Chairman (CSI- Jaipur Chapter), India"],
  ["Saroj", "Guru Jambheshwar University of Science and Technology, Hisar, India"],
  ["Yudhvir Singh", "Maharshi Dayanand University Rohtak, India"],
  ["Santosh Vishwakarma", "Gyan Ganga Institute of Technology and Sciences Jabalpur"],
  ["Rishi Pal Singh", "Guru Jambheshwar University of Science and Technology, Hisar, India"],
  ["Rahul Rishi", "Maharshi Dayanand University, Rohtak, India"],
  ["Neeta Nain", "Malaviya National Institute of Technology, Jaipur, India"],
  ["Om Parkash Sangwan", "Guru Jambheshwar Univ. of Science and Technology, Hisar, India"],
  ["Sumeet Gill", "Maharshi Dayanand University, Rohtak, India"],
  ["Pankaj Lathar", "Ch. Brahm Prakash Government Engineering College, Jaffarpur, Delhi, India"],
  ["Girish Sharma", "Bhai Parmanand Institute of Business Studies, Delhi, India"],
  ["Naveen Kumar", "Indira Gandhi National Open University, New Delhi, India"],
  ["Amit Choudhary", "Maharaja Surajmal Institute, New Delhi, India"],
  ["Srinivasa K G", "Ch. Brahm Prakash Government Engineering College, Jaffarpur, Delhi, India"],
  ["Anoop Singh Poonia", "Vivekananda Global University, Jaipur, India"],
  ["Pradeep Tomar", "Gautam Buddha University, Greater Noida, India"],
  ["Mukesh Kumar Sharma", "The Technological Institute of Textile & Sciences, Bhiwani, India"],
  ["Sanjay Kumar Sharma", "Banasthali Vidyapith, Rajasthan, India"],
];

export default function AdvisoryBoard() {
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
              Advisory Committee
            </h1>
            <div className="w-16 h-[4px] bg-[#c1121f] md:bg-white mt-4" />
          </div>
        </div>

        {/* Content Container */}
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 flex flex-col gap-16">
          
          {/* Section 1: International Members */}
          <section className="flex flex-col">
            <div className="mb-6">
              <h2 className="font-serif text-2xl font-black uppercase text-black tracking-tight">
                International Advisory Committee
              </h2>
              <div className="w-12 h-[3px] bg-[#c1121f] mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {internationalMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-zinc-50 border border-zinc-150 p-4 rounded-xl relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition duration-200"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#c1121f]" />
                  <div>
                    <h3 className="font-serif text-[15px] font-bold text-black leading-snug">
                      {member[0]}
                    </h3>
                    <p className="text-[11px] text-zinc-500 font-semibold leading-relaxed mt-1.5">
                      {member[1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: National Members */}
          <section className="flex flex-col">
            <div className="mb-6">
              <h2 className="font-serif text-2xl font-black uppercase text-black tracking-tight">
                National Advisory Committee
              </h2>
              <div className="w-12 h-[3px] bg-[#c1121f] mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {nationalMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-zinc-50 border border-zinc-150 p-4 rounded-xl relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition duration-200"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#c1121f]" />
                  <div>
                    <h3 className="font-serif text-[15px] font-bold text-black leading-snug">
                      {member[0]}
                    </h3>
                    <p className="text-[11px] text-zinc-500 font-semibold leading-relaxed mt-1.5">
                      {member[1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
