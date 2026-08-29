import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ConferenceDetails from "@/components/ConferenceDetails";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white relative">
      <Navbar firstOnly />
      <Navbar secondOnly />
      <main className="flex-grow">
        <Hero />
        <ConferenceDetails />
      </main>
      
      {/* Double Footer Component */}
      <Footer />
    </div>
  );
}
