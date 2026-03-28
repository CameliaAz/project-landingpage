import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";

export default function LandingPage() {
  return (
    <div
      className="text-white overflow-x-hidden"
      style={{
        background: "linear-gradient(to bottom, #6b0000 0%, #3b0000 8%, #1a0000 15%, #000000 25%, #000000 75%, #2a0000 83%, #3b0000 88%, #1a0000 93%, #000000 100%)"
      }}
    >
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}