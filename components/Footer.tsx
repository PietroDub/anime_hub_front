import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center py-8 mt-20">
      <div
        className="
          w-full
          max-w-7xl
          mx-6
          px-8
          py-6
          rounded-2xl
          border
          border-gray-200
          bg-white/90
          backdrop-blur-xl
          shadow-lg
          shadow-gray-200/50
        "
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Esquerda */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg text-gray-800">
              AnimeHub
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Organize, avalie e descubra novos animes.
            </p>
          </div>

          {/* Centro */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              href="/search"
              className="hover:text-blue-600 transition"
            >
              Search
            </Link>

            <Link
              href="/about"
              className="hover:text-blue-600 transition"
            >
              About
            </Link>
          </div>

          {/* Direita */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/seu-repositorio"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10
                h-10
                rounded-full
                border
                border-gray-200
                flex
                items-center
                justify-center
                text-gray-700
                hover:bg-gray-900
                hover:text-white
                transition-all
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-10
                h-10
                rounded-full
                border
                border-gray-200
                flex
                items-center
                justify-center
                text-gray-700
                hover:bg-blue-600
                hover:text-white
                transition-all
              "
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="h-px bg-gray-200 my-5" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} AnimeHub. Todos os direitos reservados.
          </p>

          <p>
            Dados fornecidos pela Jikan API.
          </p>
        </div>
      </div>
    </footer>
)
}