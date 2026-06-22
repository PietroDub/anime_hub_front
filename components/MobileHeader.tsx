"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="flex md:hidden px-4 py-3 ">
      <div
        className="
          gap-10
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-gray-200
          bg-white/90
          backdrop-blur-xl
          px-4
          py-3
          shadow-lg
        "
      >
        <Image src="/Images/logo_v360.png" alt="Logo" width={40} height={40} />

        <div className="flex items-center gap-4">
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

        <button
        onClick={() => {
    setIsMenuOpen(!isMenuOpen);
  }}
        
          className="w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 flex items-center justify-center
    hover:bg-gray-900
    hover:text-white
    hover:border-gray-900

    dark:hover:bg-white
    dark:hover:text-black
    dark:hover:border-white

    transition-all duration-300 " >
          <Menu size={20} />
        </button>
      </div>
      <div className={isMenuOpen ? "block" : "hidden"}>
        <div
  className={`
    absolute
    top-20
    left-4
    right-4
    z-50

    rounded-2xl
    border
    border-gray-200

    bg-white/95
    backdrop-blur-xl

    shadow-xl
    shadow-gray-200/50

    dark:bg-gray-900/95
    dark:border-gray-700
    dark:shadow-black/20

    transition-all
    duration-300

    ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
  `}
>
  <nav className="flex flex-col p-3">
    <Link
      href="/"
      className="
        px-4
        py-3
        rounded-xl

        text-gray-700
        dark:text-gray-200

        hover:bg-blue-50
        hover:text-blue-600

        dark:hover:bg-gray-800
        dark:hover:text-blue-400

        transition-all
      "
    >
      Home
    </Link>

    <Link
      href="/search"
      className="
        px-4
        py-3
        rounded-xl

        text-gray-700
        dark:text-gray-200

        hover:bg-blue-50
        hover:text-blue-600

        dark:hover:bg-gray-800
        dark:hover:text-blue-400

        transition-all
      "
    >
      Search
    </Link>

    <Link
      href="/about"
      className="
        px-4
        py-3
        rounded-xl

        text-gray-700
        dark:text-gray-200

        hover:bg-blue-50
        hover:text-blue-600

        dark:hover:bg-gray-800
        dark:hover:text-blue-400

        transition-all
      "
    >
      About
    </Link>

    <div className="my-2 h-px bg-gray-200 dark:bg-gray-700" />

    <Link
      href="/login"
      className="
        px-4
        py-3
        rounded-xl

        text-gray-700
        dark:text-gray-200

        hover:bg-blue-50
        hover:text-blue-600

        dark:hover:bg-gray-800
        dark:hover:text-blue-400

        transition-all
      "
    >
      Login
    </Link>

    <Link
      href="/register"
      className="
        mt-2
        px-4
        py-3
        rounded-xl

        bg-blue-600
        text-white
        text-center

        hover:bg-blue-700

        transition-all
      "
    >
      Register
    </Link>
  </nav>
</div>
      </div>
    </header>
  );
}
