import { motion } from "framer-motion";
import FlowerCenter from "../components/FlowerCenter";
import Theme from "./Theme";
import Card from "./Card";


export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from- via-[#3b0000] to-black text-white overflow-visible" id="hero">
      <div className="absolute top-0 left-0 w-full h-[180px] md:h-[250px] 
  bg-gradient-to-b from-[#6b0000] via-[#3b0000]/60 to-transparent 
  opacity-90 z-0 pointer-events-none" 
      />

      {/* HERO */}
      <div className="relative z-0 min-h-screen flex items-center justify-center text-left px-6 pt-24">
        <FlowerCenter />
        

        {/* Konten teks */}
        <div className="relative z-10 flex flex-col w-full max-w-6xl gap-4 md:gap-0 py-40">

          {/* ROW 1*/}
          <div className="w-full flex justify-start px-8 sm:px-16 md:px-32">
            <div className="flex items-center gap-6 sm:gap-10">

              {/* TEXT ROW 1 */}
              <motion.h1
                className="relative z-10 text-4xl sm:text-6xl md:text-8xl leading-relaxed py-16 bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent"
                style={{ fontFamily: "CalifornianSignature" }}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-red-500">Walk</span> Lightly
              </motion.h1>
              {/* BUNGA ROW 1 */}
              <motion.img
                src="/assets/bunga1.png"
                className="w-20 sm:w-28 md:w-36 lg:w-44 h-auto object-contain pointer-events-none z-0 opacity-80 flex-shrink-0"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              
            </div>
          </div>

          {/* ROW 2 */}
          <div className="w-full flex justify-end pr-8 sm:pr-16 md:pr-24">
            <div className="flex items-center gap-6 sm:gap-10">
              {/* BUNGA ROW 2 */}
              <motion.img
                src="/assets/bunga1.png"
                className="w-20 sm:w-28 md:w-36 lg:w-44 h-auto object-contain pointer-events-none z-0 opacity-80 flex-shrink-0"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* TEXT ROW 2 */}
              <motion.h1
                className="relative z-10 text-3xl sm:text-6xl md:text-8xl leading-none py-12 bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent"
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
      <img src="/assets/spiderlily.png" 
          className="absolute bottom-50 left-20 w-80 z-20"
          />
      <Card />
    </div>
    

  );
}