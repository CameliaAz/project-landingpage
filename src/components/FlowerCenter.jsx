export default function FlowerCenter() {
  return (
    <div className="absolute top-10 md:top-20 left-0 w-full flex justify-center z-10 pointer-events-none">
      
      <div className="relative w-full max-w-7xl h-0">

        {/* Rambat kiri */}
        <img
          src="/assets/bungarambat.png"
          alt="bungarambat kiri"
          className="absolute -top-80 right-1/2 w-[300px] md:w-[670px] object-contain"
        />

        {/* Rambat kanan (mirror) */}
        <img
          src="/assets/bungarambat.png"
          alt="bungarambat kanan"
          className="absolute -top-80 left-1/2 w-[300px] md:w-[670px] object-contain scale-x-[-1]"
        />

        {/* Bunga tengah */}
        <img
          src="/assets/bunga1.png"
          alt="center flower"
          className="absolute top-10 left-1/2 -translate-x-1/2 w-28 md:w-34 z-20"
        />

      </div>
    </div>
  );
}