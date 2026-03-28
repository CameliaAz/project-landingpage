export default function Card() {
  return (
    <div
      className="min-h-screen relative text-white overflow-hidden pb-10 md:pb-20"
      id="card"
    >

      {/* Gradient transisi dari atas - menyambung dari Theme */}
      <div className="absolute top-0 left-0 w-full h-[75px]
        bg-gradient-to-b from-[#2a0000]/80 via-[#3b0000]/40 to-transparent
        z-0 pointer-events-none"
      />

      {/* Glow merah radial di tengah */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 
        w-[130%] h-[400px] md:h-[500px]
        bg-[radial-gradient(ellipse_at_center,_#5a0000_0%,_#3b0000_30%,_transparent_70%)] 
        opacity-50 blur-[120px] z-0 pointer-events-none"
      />

      {/* Glow putih lembut tengah */}
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 
        w-[90%] md:w-[60%] h-[200px] md:h-[250px]
        bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_rgba(255,255,255,0.03)_40%,_transparent_70%)] 
        opacity-100 blur-[60px] z-0 pointer-events-none"
      />

      {/* Decorative images - responsive & tidak overflow */}
      <img
        src="/assets/watercolor.png"
        className="absolute top-0 left-0 w-24 sm:w-40 md:w-80 z-10 opacity-60 pointer-events-none"
      />

      <img
        src="/assets/bunga1.png"
        className="absolute bottom-0 left-0 w-20 sm:w-32 md:w-64 z-10 pointer-events-none"
      />

      <img
        src="/assets/bunga1.png"
        className="absolute bottom-0 right-0 w-20 sm:w-32 md:w-64 z-10 pointer-events-none"
      />

      <img
        src="/assets/eclipse.png"
        className="absolute top-10 right-4 sm:right-10 w-32 sm:w-48 md:w-72 z-0 opacity-40 pointer-events-none"
      />

      {/* Eclipse kiri bawah - batasi hanya 2 agar tidak terlalu ramai di mobile */}
      <img
        src="/assets/eclipse.png"
        className="absolute bottom-10 left-4 sm:left-20 w-40 sm:w-60 md:w-80 z-0 opacity-30 pointer-events-none"
      />

      {/* CARD CONTENT */}
      <div className="relative z-30 container-custom section-padding flex justify-center">
        <div className="card-container p-6 md:p-10 w-full max-w-5xl
          flex flex-col justify-center 
          text-center shadow-2xl">

          <h3
            className="mb-6 md:mb-8 text-2xl md:text-3xl p-2 md:p-5 tracking-wide 
                       bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent 
                       flex flex-wrap items-center justify-center gap-2"
            style={{ fontFamily: "CalifornianSignature" }}
          >
            Exclusively
            <img
              src="/assets/logo-white.png"
              alt="TEDx Logo"
              className="h-4 md:h-7 w-auto inline-block"
            />
            5. O
          </h3>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">

            {/* Card 1 */}
            <div className="bg-white/10 hover:bg-white/20 transition rounded-2xl 
              p-6 md:p-8 
              flex flex-col items-center justify-center 
              group cursor-pointer border border-white/10 
              w-full min-h-[180px] sm:min-h-[220px]">

              <img
                src="/assets/tiket.png"
                className="w-24 md:w-32 mb-4 group-hover:scale-110 transition"
              />

              <p className="text-sm md:text-base uppercase tracking-widest text-center">
                Main Event
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 hover:bg-white/20 transition rounded-2xl 
              p-6 md:p-8 
              flex flex-col items-center justify-center 
              group cursor-pointer border border-white/10 
              w-full min-h-[180px] sm:min-h-[220px]">

              <img
                src="/assets/merch.png"
                className="w-24 md:w-32 mb-4 group-hover:scale-110 transition"
              />

              <p className="text-sm md:text-base uppercase tracking-widest text-center">
                Merchandise
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}