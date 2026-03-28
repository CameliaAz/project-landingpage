import React from "react";

export default function Card() {
  return (
   
    <div className="min-h-screen relative bg-black text-white overflow-visible pb-10 md:pb-20" id="card">
      
    
      <div className="absolute -top-[250px] left-1/2 -translate-x-1/2 w-[130%] h-[500px] 
        bg-[radial-gradient(ellipse_at_center,_#5a0000_0%,_#3b0000_30%,_transparent_70%)] 
        opacity-60 blur-[120px] z-0 pointer-events-none" 
      />

    
      <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[80%] md:w-[60%] h-[250px] 
        bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.2)_0%,_rgba(255,255,255,0.05)_40%,_transparent_70%)] 
        opacity-100 blur-[60px] z-0 pointer-events-none" 
      />

      
      <div className="absolute -top-[50px] left-[85%] -translate-x-1/2 w-[100%] md:w-[80%] h-[100px] 
  bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35)_0%,_transparent_90%)] 
  opacity-100 blur-[40px] z-0 pointer-events-none"
      />
    
      <img src="/assets/watercolor.png" 
        className="absolute top-0 left-0 w-40 md:w-80 z-10 opacity-60" 
      />

      <img src="/assets/bunga1.png" 
        className="absolute bottom-0 left-0 w-32 md:w-64 z-10" 
      />

      <img src="/assets/bunga1.png" 
        className="absolute bottom-0 right-0 w-32 md:w-64 z-10" 
      />

      <img src="/assets/eclipse.png" 
        className="absolute top-20 right-10 w-60 md:w-72 z-0 opacity-40" 
      />

      <img src="/assets/eclipse.png" 
        className="absolute bottom-20 left-20 w-80 md:w-72 z-0 opacity-40" 
      />

      <img src="/assets/eclipse.png" 
        className="absolute bottom-60 left-20 w-80 md:w-72 z-0 opacity-40" 
      />

       <img src="/assets/eclipse.png" 
        className="absolute bottom-40 left-40 w-80 md:w-72 z-0 opacity-40" 
      />

       <img src="/assets/eclipse.png" 
        className="absolute bottom-40 left-60 w-80 md:w-72 z-0 opacity-40" 
      />

     
      <div className="relative z-30 py-20 md:py-40 flex justify-center w-full px-5">
  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl 
  p-8 md:p-12 
  mx-auto w-full max-w-5xl 
  min-h-[80vh] 
  flex flex-col justify-center 
  text-center shadow-2xl">
    
    <h3 className="mb-8 text-3xl md:text-3xl p-2 md:p-5 tracking-wide 
    bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent 
    flex flex-wrap items-center justify-center gap-2" 
    style={{ fontFamily: "CalifornianSignature" }}>
      Exclusively 
      <img src="/assets/logo-white.png"
        alt="TEDx Logo" 
        className="h-5 md:h-7 w-auto inline-block"
      />
      5. O
    </h3>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full h-full">

      {/* Card 1 */}
      <div className="bg-white/10 hover:bg-white/20 transition rounded-2xl 
      p-6 md:p-8 
      flex flex-col items-center justify-center 
      group cursor-pointer border border-white/10 
      w-full h-full min-h-[220px]">

        <img 
          src="/assets/tiket.png" 
          className="w-28 md:w-32 mb-4 group-hover:scale-110 transition" 
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
      w-full h-full min-h-[220px]">

        <img 
          src="/assets/merch.png" 
          className="w-28 md:w-32 mb-4 group-hover:scale-110 transition" 
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