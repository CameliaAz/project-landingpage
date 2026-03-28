
export default function Navbar() {
  return (
        <div className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img 
          src="/public/assets/logo-white.png" 
          alt="TEDx UNS"
          className="h-6 md:h-7 object-contain" 
          />
        </div>

        {/* Center Menu */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 text-sm text-gray-200" style={{ fontFamily: "Poppins, sans-serif" }}>
          <a href="#hero" className="hover:text-white transition">Home</a>
          <a href="#theme" className="hover:text-white transition">Event</a>
          <a href="#card" className="hover:text-white transition">Merchandise</a>
          <a href="#card" className="hover:text-white transition">Partnership</a>
        </div>

        {/* Login Button */}
        <button className="bg-[#d6b1a3] text-black px-5 py-2 rounded-full text-sm hover:opacity-90 transition" style={{ fontFamily: "Poppins, sans-serif" }}>
          Login
        </button>
      </div>
    </div>
    
  );
}  