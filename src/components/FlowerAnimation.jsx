import { motion } from "framer-motion";

export default function FlowerAnimation() {
  return (
    <>
      {/* Flower 1 - kanan atas */}
      <motion.img
        src="/assets/bunga1.png"
        alt="flower"
        className="absolute 
        top-10 sm:top-14 md:top-20 
        right-2 sm:right-6 md:right-10 
        w-24 sm:w-40 md:w-56 lg:w-64 
        pointer-events-none z-10"
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Flower 2 - kiri bawah */}
      <motion.img
        src="/assets/bunga1.png"
        alt="flower"
        className="absolute 
        bottom-10 sm:bottom-16 md:bottom-20 
        left-2 sm:left-6 md:left-10 
        w-24 sm:w-40 md:w-56 lg:w-64 
        pointer-events-none z-10"
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}