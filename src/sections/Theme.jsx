import { motion } from "framer-motion";
import FlowerAnimation from "../components/FlowerAnimation";

export default function Theme() {
  return (
    <div className="relative bg-black bg-gradient-to-br from via-[#3b0000] to-black text-white py-40 overflow-visible" id="theme">
      <div className="absolute -top-[250px] left-1/2 -translate-x-1/2 w-[130%] h-[500px] 
        bg-[radial-gradient(ellipse_at_center,_#5a0000_0%,_#3b0000_30%,_transparent_70%)] 
        opacity-60 blur-[120px] z-0 pointer-events-none" 
      />

      
      {/* IMAGE BACKGROUND */}
      <img
        src="/assets/eclipse.png"
        alt="Eclipse"
        className="absolute inset-0 w-full h-full object-contain opacity-40 z-0"
      />

      <img src="/assets/watercolor.png" 
          className="absolute bottom-0 right-0 w-80 z-10" 
          />

      <img src="/assets/hati.png" 
      alt="hati"
      className="absolute bottom-0 right-0 w-80 z-10" 
      />

       <img src="/assets/bunga1.png" 
      alt="bunga1"
      className="absolute bottom-0 left-0 w-20 z-10" 
      />

      <img src="/assets/bunga1.png" 
      alt="bunga1"
      className="absolute bottom-90 right-10 w-20 z-10" 
      />

      {/* CONTENT */}
      <div className="relative z-10 mt-20 text-center max-w-xl mx-auto px-4">
        <h1 className="text-1xl font-bold text-white">
          This Year’s Theme
        </h1>

        <h2
          className="text-5xl mt-2 py-5 bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent"
          style={{ fontFamily: "CalifornianSignature" }}
        >
          Subtle Bloom
        </h2>

        <p className="text-gray-300 mt-4 text-sm leading-relaxed">
          The Subtle Bloom honors the unseen transformations that shape our reality.
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur efficitur.
        </p>

        <button className="mt-6 px-6 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition" style={{ fontFamily: "Poppins" }}>
          Find Out More!
        </button>

       
      </div>
    </div>
  );
}