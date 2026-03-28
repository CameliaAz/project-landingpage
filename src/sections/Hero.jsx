import { motion } from "framer-motion";
import FlowerCenter from "../components/FlowerCenter";
import Theme from "./Theme";
import Card from "./Card";

export default function Hero() {
  return (
    <div
  id="hero"
  className="relative text-white overflow-visible"
>

      {/* HERO */}
      <div className="relative z-0 min-h-screen flex items-center justify-center text-left px-4 sm:px-6 pt-24">
        <FlowerCenter />

        {/* Konten teks */}
        <div className="relative z-10 container-custom section-padding flex flex-col gap-2 sm:gap-6 md:gap-10">

          {/* ROW 1 */}
          <div className="w-full flex justify-start mt-16">
            <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
              <motion.h1
                className="relative z-10 text-4xl xs:text-5xl sm:text-6xl md:text-8xl 
                           leading-relaxed py-6 sm:py-10 md:py-16 
                           bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent"
                style={{ fontFamily: "CalifornianSignature" }}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-red-500">Walk</span> Lightly
              </motion.h1>

              <motion.img
                src="/assets/bunga1.png"
                className="w-14 xs:w-20 sm:w-28 md:w-36 lg:w-44 h-auto object-contain 
                           pointer-events-none z-0 opacity-80 flex-shrink-0"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="w-full flex justify-start">
            <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
              <motion.img
                src="/assets/bunga1.png"
                className="w-14 xs:w-20 sm:w-28 md:w-36 lg:w-44 h-auto object-contain 
                           pointer-events-none z-0 opacity-80 flex-shrink-0"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.h1
                className="relative z-10 text-3xl xs:text-4xl sm:text-6xl md:text-8xl 
                           leading-none py-6 sm:py-8 md:py-12 
                           bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent"
                style={{ fontFamily: "CalifornianSignature" }}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-red-500">Bloom</span> Brightly
              </motion.h1>
            </div>
          </div>
        </div>
      </div>

      <Theme />

      {/* Spiderlily - responsive */}
      <img
        src="/assets/spiderlily.png"
        className="hidden md:block absolute bottom-[17%] left-4 sm:left-10 md:left-20 
                   w-48 sm:w-72 md:w-[420px] lg:w-[500px] z-50 pointer-events-none"
      />

      <Card />
    </div>
  );
}