"use client";

import GetAnimeId from "@/Services/AnimeService";
import Image from "next/image";
import { useEffect, useState } from "react";
import CardInfo from "./CardInfo";
import BackButton from "./BackButton";

export default function AnimeDetails({ id }: { id: number }) {
   console.log("AnimeDetails:", id);
    console.log("typeof:", typeof id);
    console.trace(); 
  const [animeData, setAnimeData] = useState<AnimeData | null>(null);

  async function carregarAnime() {
    try {
      const anime = await GetAnimeId(id);
      console.log("Fetched anime data:", id, anime);
      setAnimeData(anime);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    carregarAnime();
  }, [id]);

  // if (!animeData) {
  //   return <p>Carregando...</p>;
  // }
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
  <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg">
    <div className="grid gap-8 p-8 lg:grid-cols-[260px_1fr]">
      {/* Poster */}

      <div>
        <Image
          src={animeData?.images.jpg.image_url || "/placeholder.png"}
          alt={animeData?.title || "Anime Poster"}
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
              {animeData?.title}
            </h1>

            <p className="mt-3 text-sm text-zinc-400">
              Anime ID #{animeData?.mal_id}
            </p>
          </div>

          <BackButton />
        </div>

        {/* Informações */}

        <div className="mt-8">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Informações
          </h2>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <CardInfo
              title="Tipo"
              value={animeData?.type || "-"}
            />

            <CardInfo
              title="Episódios"
              value={animeData?.episodes ?? "?"}
            />

            <CardInfo
              title="Nota"
              value={animeData?.score ? `⭐ ${animeData?.score}` : "-"}
            />

            <CardInfo
              title="Status"
              value={animeData?.status}
            />

            <CardInfo
              title="Fonte"
              value={animeData?.source}
            />

            <CardInfo
              title="Temporada"
              value={
                animeData?.season && animeData?.year
                  ? `${animeData?.season} ${animeData?.year}`
                  : "-"
              }
            />

            <CardInfo
              title="Classificação"
              value={animeData?.rating}
            />

            <CardInfo
              title="Ano"
              value={animeData?.year ?? "-"}
            />
          </div>
        </div>

        {/* Gêneros */}

        {animeData?.genres && animeData?.genres.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Gêneros
            </h2>

            <div className="flex flex-wrap gap-2">
              {animeData?.genres.map((genre) => (
                <span
                  key={genre.mal_id}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Temas */}

        {animeData?.themes && animeData?.themes.length > 0 && (
          <div className="mt-6">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Temas
            </h2>

            <div className="flex flex-wrap gap-2">
              {animeData?.themes.map((theme) => (
                <span
                  key={theme.mal_id}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700"
                >
                  {theme.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Estúdios */}

        {animeData?.studios && animeData?.studios.length > 0 && (
          <div className="mt-6">
            <span className="font-semibold text-zinc-700">
              Estúdio:
            </span>{" "}
            <span className="text-zinc-600">
              {animeData?.studios
                .map((studio) => studio.name)
                .join(", ")}
            </span>
          </div>
        )}

        {/* Trailer */}

        {animeData?.trailer?.url && (
          <div className="mt-8">
            <a
              href={animeData?.trailer.url}
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

  {/* Sinopse */}

  <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg">
    <h2 className="mb-5 text-2xl font-bold text-zinc-800">
      Sinopse
    </h2>

    <p className="whitespace-pre-line leading-8 text-zinc-600">
      {animeData?.synopsis}
    </p>
  </div>

  {/* Background */}

  {animeData?.background && (
    <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg">
      <h2 className="mb-5 text-2xl font-bold text-zinc-800">
        Background
      </h2>

      <p className="whitespace-pre-line leading-8 text-zinc-600">
        {animeData?.background}
      </p>
    </div>
  )}
</main>
  );
}
