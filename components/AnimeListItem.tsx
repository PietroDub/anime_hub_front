"use client";

import { getAnimeListItem } from "@/Services/userAnimeList";
import Image from "next/image";
import { useEffect, useState } from "react";
import CardInfo from "./CardInfo";
import { Heart, Pencil } from "lucide-react";
import BackButton from "./BackButton";
import UpdateModal from "./UpdateModal";
import { UserAnime } from "@/types/UserAnime";

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
  const [editingAnime, setEditingAnime] =
    useState<AnimeListItemResponse | null>(null);

  async function carregarAnime() {
    const data = await getAnimeListItem(id);
    setAnime(data);
  }

  useEffect(() => {
    carregarAnime();
  }, [id]);
  if (!anime) {
    return <p>Carregando...</p>;
  }

  console.log("Fetched anime data:", anime);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg">
        <div className="grid gap-8 p-8 lg:grid-cols-[260px_1fr]">
          {/* Poster */}

          <div>
            <Image
              src={anime.imageUrl}
              alt={anime.title}
              width={260}
              height={380}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* Conteúdo */}

          <div className="flex flex-col">
            {/* Cabeçalho */}

            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-4xl font-bold text-zinc-900">
                  {anime.title}
                </h1>

                <p className="mt-3 text-sm text-zinc-400">
                  Anime ID #{anime.animeId}
                </p>
              </div>

              <div className="flex gap-3">
                <BackButton />

                <button
                  onClick={() => setEditingAnime(anime)}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white transition hover:bg-zinc-100 hover:text-blue-600"
                >
                  <Pencil size={20} />
                </button>

                <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white transition hover:bg-red-50 hover:text-red-500">
                  <Heart size={20} />
                </button>
              </div>
            </div>

            {/* Dados do usuário */}

            <div className="mt-8">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                Sua Lista
              </h2>

              <div className="grid grid-cols-3 gap-4">
                <CardInfo title="Status" value={statusName(anime.status)} />

                <CardInfo
                  title="Assistidos"
                  value={`${anime.episodesWatched}/${anime.episodes ?? "?"}`}
                />

                <CardInfo title="Sua Nota" value={`⭐ ${anime.score}/10`} />
              </div>
            </div>

            {/* Informações do anime */}

            <div className="mt-8">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">
                Informações
              </h2>

              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                <CardInfo title="Tipo" value={anime.type} />

                <CardInfo title="Fonte" value={anime.source} />

                <CardInfo
                  title="Temporada"
                  value={
                    anime.season && anime.year
                      ? `${anime.season} ${anime.year}`
                      : "-"
                  }
                />

                <CardInfo title="Classificação" value={anime.rating} />
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <div>
                {/* Gêneros */}
            <div className="mt-8 flex flex-wrap gap-2">
              {anime.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Estúdios */}
            {anime.studios.length > 0 && (
              <div className="mt-5">
                <span className="font-semibold text-zinc-700">Studio:</span>{" "}
                <span className="text-zinc-600">
                  {anime.studios.join(", ")}
                </span>
              </div>
            )}
              </div>

            {/* Trailer */}

            {anime.trailerUrl && (
              <div className="mt-6">
                <a
                  href={anime.trailerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700"
                >
                  ▶ Assistir Trailer
                </a>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>

      {/* Sinopse */}

      <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg">
        <h2 className="mb-5 text-2xl font-bold text-zinc-800">Sinopse</h2>

        <p className="whitespace-pre-line leading-8 text-zinc-600">
          {anime.synopsis}
        </p>
      </div>

      {/* Background */}

      {anime.background && (
        <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg">
          <h2 className="mb-5 text-2xl font-bold text-zinc-800">Background</h2>

          <p className="whitespace-pre-line leading-8 text-zinc-600">
            {anime.background}
          </p>
        </div>
      )}

      {editingAnime && (
        <UpdateModal
          animelist={editingAnime}
          onUpdated={() => {
            carregarAnime();
            setEditingAnime(null);
          }}
          onClose={() => setEditingAnime(null)}
        />
      )}
    </main>
  );
}
