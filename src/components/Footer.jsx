import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className="mt-20 border-t border-white/10 py-6 text-center text-sm text-gray-400"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Sosial Media */}
      <div className="flex justify-center gap-6 mb-4 text-xl">
        <a
          href="https://www.instagram.com/tedxunes"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.youtube.com/@TEDx"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaYoutube />
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Copyright */}
      <p>© 2026 Landing Page. All rights reserved.</p>
    </div>
  );
}
