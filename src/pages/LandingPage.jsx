import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";

export default function LandingPage() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}