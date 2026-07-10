"use client";

import { useState } from "react";
import AddAnimeModal from "./AdicionarAnime";
import Link from "next/dist/client/link";
import { Plus, PlusCircleIcon } from "lucide-react";

type Props = {
  anime: Anime;
  onAdd: (anime: Anime) => void;
};


type Anime = {
  mal_id: number;
  title: string;
  type: string;
  score: number;
  synopsis: string;
  images: Images;
};

type Images = {
  jpg: Jpg;
};

type Jpg = {
  image_url: string;
};

export default function Anime({ anime, onAdd }: Props) {
  return (
    <div
      key={anime.mal_id}
      className="
    relative
    h-[420px]
    rounded-2xl
    overflow-hidden
    bg-cover
    bg-center
    shadow-lg
    flex
    flex-col
    justify-end
    p-5
  "
      style={{
        backgroundImage: `url(${anime.images.jpg.image_url})`,
      }}
    >
      {/* Gradiente para facilitar a leitura */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Conteúdo */}
      <div className="relative z-10">
        <div className="flex justify-left gap-2 items-center mb-3">
          <button
            onClick={() => onAdd(anime)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-3 hover:bg-blue-700 transition"
          >
            <PlusCircleIcon className="inline-block m-1" />
          </button>

          <Link
            href={`/anime/${anime.mal_id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-3 hover:bg-blue-700 transition"
          >
            Ver anime
          </Link>
        </div>

        <div className="flex gap-2 mb-3">
          <span className="bg-white/90 px-3 py-1 rounded-full text-sm text-black font-bold">
            ⭐ {anime.score}
          </span>

          <span className="bg-white/90 px-3 py-1 rounded-full text-sm text-black font-bold">
            {anime.type}
          </span>
        </div>

        <h2 className="text-white text-2xl font-bold line-clamp-2">
          {anime.title}
        </h2>
      </div>
    </div>
  );
}
