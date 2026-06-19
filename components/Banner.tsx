import Image from "next/image";
import Particles from "./ui/Particles";

const cards = [
  {
    title: "Solo Leveling",
    description:
      "Sung Jin-Woo era o caçador mais fraco de todos. Após um incidente misterioso, ele ganha a habilidade de evoluir infinitamente.",
    image: "/Images/default_card_image.png",
    color: "#6D28D9",
  },
];

export default function Banner() {
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
            particleColors={[cards[0].color]}
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
              {cards[0].title}
            </h1>

            <p
              className="
                text-lg
                text-gray-600
                leading-relaxed
              "
            >
              {cards[0].description}
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
                backgroundColor: cards[0].color,
              }}
            />

            <Image
              src={cards[0].image}
              alt={cards[0].title}
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