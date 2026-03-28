export default function FlowerCenter() {
  return (
    <div className="absolute top-10 md:top-20 left-0 w-full flex justify-center z-10 pointer-events-none">
      <div className="relative w-full max-w-7xl h-0">

        {/* Rambat kiri */}
        <img
          src="/assets/bungarambat.png"
          alt="bungarambat kiri"
          className="absolute -top-10 xs:-top-20 sm:-top-40 md:-top-80 right-1/2 
                     w-[160px] xs:w-[220px] sm:w-[380px] md:w-[670px] object-contain"
        />

        {/* Rambat kanan (mirror) */}
        <img
          src="/assets/bungarambat.png"
          alt="bungarambat kanan"
          className="absolute -top-10 xs:-top-20 sm:-top-40 md:-top-80 left-1/2 
                     w-[160px] xs:w-[220px] sm:w-[380px] md:w-[670px] object-contain scale-x-[-1]"
        />

        {/* Bunga tengah */}
        <img
          src="/assets/bunga1.png"
          alt="center flower"
          className="absolute top-2 xs:top-4 md:top-10 left-1/2 -translate-x-1/2 
                     w-14 xs:w-16 md:w-28 lg:w-34 z-20"
        />
      </div>
    </div>
  );
}