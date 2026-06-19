import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    // deslogado
    <header className="w-full flex justify-center pt-4">
      <div
        className="
      w-full
      max-w-7xl
      mx-6
      px-8
      py-4
      flex
      items-center
      justify-between
      rounded-2xl
      border
      border-gray-200
      bg-white/90
      backdrop-blur-xl
      shadow-lg
      shadow-gray-200/50
    "
      >
        {/* Esquerda */}
        <div className="flex items-center gap-4">
          <Image
            src="/Images/logo_v360.png"
            alt="Anime Hub Logo"
            width={50}
            height={50}
            className="
          rounded-xl
          hover:scale-105
          transition-all
          duration-300
        "
          />

          <a
            href="https://jikan.moe/#features"
            target="_blank"
            rel="noopener noreferrer"
            className="
          px-4
          py-2
          rounded-xl
          border
          border-gray-200
          bg-white
          hover:bg-blue-50
          hover:border-blue-400
          transition-all
          duration-300
          flex
          items-center
          gap-2
        "
          >
            <span className="text-sm font-medium text-gray-700">Jikan API</span>
          </a>
        </div>

        {/* Centro */}
        <nav className="flex items-center gap-10">
          <Link
            href="/"
            className="
          font-medium
          text-gray-600
          hover:text-blue-600
          transition-all
        "
          >
            Home
          </Link>

          <Link
            href="/search"
            className="
          font-medium
          text-gray-600
          hover:text-blue-600
          transition-all
        "
          >
            Search
          </Link>

          <Link
            href="/about"
            className="
          font-medium
          text-gray-600
          hover:text-blue-600
          transition-all
        "
          >
            About
          </Link>
        </nav>

        {/* Direita */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="
          px-5
          py-2
          rounded-full
          border
          border-gray-200
          bg-white
          text-gray-700
          hover:bg-blue-50
          hover:text-blue-600
          hover:border-blue-300
          transition-all
          duration-300
        "
          >
            Login
          </Link>

          <Link
            href="/register"
            className="
          px-5
          py-2
          rounded-full
          bg-blue-600
          text-white
          shadow-md
          hover:bg-blue-700
          hover:shadow-lg
          transition-all
          duration-300
        "
          >
            Register
          </Link>

          <a
            href="https://github.com/seu-repositorio"
            target="_blank"
            rel="noopener noreferrer"
            className="
          w-11
          h-11
          rounded-full
          border
          border-gray-200
          bg-white
          text-gray-700
          flex
          items-center
          justify-center
          hover:bg-gray-900
          hover:text-white
          hover:border-gray-900
          transition-all
          duration-300
        "
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
