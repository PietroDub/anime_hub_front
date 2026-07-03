"use client";

import Anime from "@/components/Anime";
import Title from "@/components/Title";
import UpdateModal from "@/components/UpdateModal";
import { getMyAnimeList } from "@/Services/userAnimeList";
import { UserAnime } from "@/types/UserAnime";
import { useEffect, useState } from "react";


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

export default function MyList() {
  const [animes, setAnimes] = useState<UserAnime[]>([]);
  console.log("Animes:", animes);
  useEffect(() => {
    async function getList() {
      const data = await getMyAnimeList();
      setAnimes(data);
    }

    getList();
  }, []);

  console.log(animes);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-4">
      <Title title="Minha Lista de Animes" />
      {animes.map((anime: UserAnime) => (
        <div
          key={anime.animeId}
          className="group flex gap-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-blue-600/10"
        >
          {/* Poster */}
          <img
            src={anime.imageUrl}
            alt={anime.title}
            className="h-32 w-24 rounded-lg object-cover"
          />

          {/* Conteúdo */}
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <div className="flex items-start justify-between">
                <h2 className="line-clamp-2 text-xl font-bold text-white">
                  {anime.title}
                </h2>

                <span className="rounded-lg bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
                  ★ {anime.score}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
                  {statusName(anime.status)}
                </span>

                <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
                  {anime.episodesWatched} episódios
                </span>
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-3">
              <button 
              onClick={() => setOpenModal(true)}
              className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-blue-600 hover:text-blue-400">
                Editar
              </button>

              <UpdateModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                ID={anime.ItemId}
                animelist={anime}
              />

              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
                Ver Anime
              </button>
            </div>
          </div>
        </div>
      ))}

      {animes.length}
    </div>
  );
}
