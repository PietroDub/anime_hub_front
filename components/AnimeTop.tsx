"use client";

import { useEffect, useState } from "react";
import Anime from "./Anime";
import Title from "./Title";

type AnimeSearchResponse = {
  data: Anime[];
};

type Anime = {
  malId: number;
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
async function fetchAnimeTop(): Promise<AnimeSearchResponse> {
  const response = await fetch("http://localhost:5212/api/Anime/top");

  if (!response.ok) {
    throw new Error("Erro ao buscar os animes.");
  }

  return await response.json();
}

export default function AnimeTop() {
  const [animeTop, setAnimeTop] = useState<AnimeSearchResponse | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchAnimeTop();
        setAnimeTop(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, []);

  if (!animeTop) {
    return <p>Carregando...</p>;
  }
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Title title="Animes em alta:" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* //limita a 16 animes por temporada, para não sobrecarregar a tela */}
        {animeTop.data.slice(0, 8).map((anime) => (
          <Anime key={anime.malId} anime={anime} />
        ))}
      </div>
    </section>
  );
}
