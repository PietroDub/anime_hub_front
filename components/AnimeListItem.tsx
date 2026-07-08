"use client";

import { getAnimeListItem } from "@/Services/userAnimeList";
import Image from "next/image";
import { useEffect, useState } from "react";
import CardInfo from "./CardInfo";
import { Heart, Pencil } from "lucide-react";

function statusName(status: number) {
  switch (status) {
    case 0:
      return "Watching";
    case 1:
      return "Completed";
    case 2:
      return "Plan to Watch";
    case 3:
      return "Paused";
    case 4:
      return "Dropped";
    default:
      return "Unknown";
  }
}

export default function AnimeListItem({ id }: { id: string }) {
  const [anime, setAnime] = useState<AnimeListItemResponse | null>(null);

  useEffect(() => {
    async function fetch() {
      const data = await getAnimeListItem(id);
      setAnime(data);
    }

    fetch();
  }, [id]);

  if (!anime) {
    return <p>Carregando...</p>;
  }

  console.log("Fetched anime data:", anime);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg">
        <div className="grid lg:grid-cols-[260px_1fr] gap-8 p-8">
          {/* Poster */}

          <div>
            <Image
              src={anime.imageUrl}
              alt={anime.title}
              width={260}
              height={380}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Header */}

          <div className="flex flex-col">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold text-zinc-900">
                  {anime.title}
                </h1>

                <p className="mt-2 text-zinc-500">Anime ID #{anime.animeId}</p>
              </div>

              <div className="flex gap-3">
                <button className="w-11 h-11 rounded-xl border hover:bg-zinc-100">
                  <Pencil size={20} />
                </button>

                <button className="w-11 h-11 rounded-xl border hover:bg-zinc-100">
                  <Heart size={20} />
                </button>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <CardInfo title="Status" value={statusName(anime.status)} />

              <CardInfo title="Episodes" value={anime.episodesWatched} />

              <CardInfo title="Score" value={`⭐ ${anime.score}/10`} />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {/* <ButtonEditar />

              <ButtonAtualizar />

              <ButtonRemover /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Sinopse */}

      <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-5">Sinopse</h2>

        <p className="leading-8 text-zinc-600 whitespace-pre-line">
          {anime.synopsis}
        </p>
      </div>
    </main>
  );
}
