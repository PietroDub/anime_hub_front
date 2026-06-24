"use client";

import Image from "next/image";
import Particles from "./ui/Particles";
import { useEffect, useState } from "react";

const cards = [
  {
    title: "Kimetsu no Yaiba",
    description:
      "Após sua família ser massacrada por demônios, Tanjiro Kamado inicia uma jornada para salvar sua irmã Nezuko e se tornar um poderoso caçador de demônios.",
    image: "/Images/Banner/kny.webp",
    color: "#6D28D9",
  },
  {
    title: "Frieren",
    description:
      "Décadas após derrotar o Rei Demônio, a elfa Frieren embarca em uma nova jornada para compreender melhor os humanos e o valor das memórias.",
    image: "/Images/Banner/frieren.png",
    color: "#14B8A6",
  },
  {
    title: "Dandadan",
    description:
      "Entre fantasmas, alienígenas e poderes sobrenaturais, Momo e Okarun vivem aventuras caóticas repletas de ação, humor e mistérios.",
    image: "/Images/Banner/dandadan.png",
    color: "#F97316",
  },
  {
    title: "One Piece",
    description:
      "Monkey D. Luffy parte pelos mares em busca do lendário tesouro One Piece, reunindo aliados e enfrentando inimigos para se tornar o Rei dos Piratas.",
    image: "/Images/Banner/onepiece.png",
    color: "#2563EB",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % cards.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);
  return (
    <section className="w-full flex justify-center px-6 py-8">
      <div
        className="
          relative
          w-full
          max-w-7xl
          h-[600px]
          overflow-hidden
          rounded-3xl
          border
          border-gray-200
          bg-white/70
          backdrop-blur-xl
          shadow-xl
        "
      >
        {/* Fundo */}
        <div className="absolute inset-0">
          <Particles
            particleColors={[cards[current].color]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        {/* Overlay para melhorar leitura */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />

        {/* Conteúdo */}
        <div className="relative z-20 h-full flex items-center justify-between px-16">
          {/* Texto */}
          <div className="max-w-xl flex flex-col gap-6">
            <span
              className="
                w-fit
                px-4
                py-2
                rounded-full
                bg-blue-50
                text-blue-600
                font-medium
                text-sm
              "
            >
              Trending Anime
            </span>

            <h1
              className="
                text-6xl
                font-extrabold
                text-gray-900
                leading-tight
              "
            >
              {cards[current].title}
            </h1>

            <p
              className="
                text-lg
                text-gray-600
                leading-relaxed
              "
            >
              {cards[current].description}
            </p>

            <div className="flex items-center gap-4">
              <button
                className="
                  px-8
                  py-3
                  rounded-full
                  bg-black
                  text-white
                  font-medium
                  hover:scale-105
                  transition
                "
              >
                Ver Anime
              </button>

              <button
                className="
                  px-8
                  py-3
                  rounded-full
                  border
                  border-gray-300
                  text-gray-700
                  hover:bg-gray-100
                  transition
                "
              >
                Saiba Mais
              </button>
            </div>
          </div>

          {/* Imagem */}
          <div
            className="
              relative
              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                absolute
                w-[420px]
                h-[420px]
                rounded-full
                blur-3xl
                opacity-30
              "
              style={{
                backgroundColor: cards[current].color,
              }}
            />

            <Image
              src={cards[current].image}
              alt={cards[current].title}
              width={450}
              height={600}
              className="
                relative
                z-10
                object-contain
                drop-shadow-2xl
                hover:scale-105
                transition
                duration-500
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}