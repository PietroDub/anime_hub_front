"use client";

import GetAnimeId from "@/Services/AnimeService";
import { useEffect, useState } from "react";

export default function AnimeDetails({ id }: { id: number }) {
  const [animeData, setAnimeData] = useState<AnimeResponse | null>(null);

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

  if (!animeData) {
    return <p>Carregando...</p>;
  }

  console.log("Fetched anime data:", animeData);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-white">{animeData?.title}</h1>
      <p className="text-sm text-white/80">{animeData?.synopsis}</p>
    </div>
  );
}
