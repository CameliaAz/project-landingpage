import { motion } from "framer-motion";
import FlowerAnimation from "../components/FlowerAnimation";

export default function Theme() {
  return (
    <div
      id="theme"
      className="relative text-white py-20 md:py-40 overflow-visible"
    >
      <div
        className="absolute -top-[250px] left-1/2 -translate-x-1/2 w-[130%] h-[500px] 
        bg-[radial-gradient(ellipse_at_center,_#5a0000_0%,_#3b0000_30%,_transparent_70%)] 
        opacity-60 blur-[120px] z-0 pointer-events-none"
      />

      {/* IMAGE BACKGROUND */}
      <img
        src="/assets/eclipse.png"
        alt="Eclipse"
        className="absolute inset-0 w-full h-full object-contain opacity-40 z-0 pointer-events-none"
      />

      <img
        src="/assets/watercolor.png"
        className="absolute bottom-0 right-0 w-40 sm:w-60 md:w-80 z-10 pointer-events-none"
      />

      <img
        src="/assets/hati.png"
        alt="hati"
        className="absolute bottom-0 right-0 w-40 sm:w-60 md:w-80 z-10 pointer-events-none"
      />

      <img
        src="/assets/bunga1.png"
        alt="bunga1"
        className="absolute bottom-0 left-0 w-14 sm:w-16 md:w-20 z-10 pointer-events-none"
      />

      <img
        src="/assets/bunga1.png"
        alt="bunga1"
        className="absolute top-6 right-4 sm:bottom-20 sm:right-10 w-14 sm:w-16 md:w-20 z-10 pointer-events-none"
      />

      {/* CONTENT */}
      <div className="relative z-10 container-custom text-center px-4 sm:px-8">
        <h1 className="text-base sm:text-lg font-bold text-white">
          This Year's Theme
        </h1>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 py-4 sm:py-5 
                     bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent"
          style={{ fontFamily: "CalifornianSignature" }}
        >
          Subtle Bloom
        </h2>

        <p className="text-gray-300 mt-4 text-sm leading-relaxed max-w-2xl mx-auto">
          The Subtle Bloom honors the unseen transformations that shape our
          reality. lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec vel sapien eget nunc efficitur efficitur. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec vel sapien eget nunc
          efficitur efficitur. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec vel sapien eget nunc efficitur efficitur.
        </p>

        <button
          className="mt-6 px-6 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition text-sm sm:text-base"
          style={{ fontFamily: "Poppins" }}
        >
          Find Out More!
        </button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[75px]
        bg-gradient-to-b from-transparent via-[#3b0000]/40 to-[#2a0000]/80
        z-0 pointer-events-none"
      />
    </div>
  );
}
