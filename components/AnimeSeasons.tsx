"use client";

import { useEffect, useState } from "react";
import Anime from "./Anime";

type AnimeSearchResponse = {
  data: Anime[];
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

async function fetchAnimeSeasons(): Promise<AnimeSearchResponse> {
  const response = await fetch("http://localhost:5212/api/Anime/season");

  if (!response.ok) {
    throw new Error("Erro ao buscar os animes.");
  }

  return await response.json();
}

export default function AnimeSeasons() {
  const [animeSeasons, setAnimeSeasons] = useState<AnimeSearchResponse | null>(
    null,
  );

  //  Você está dizendo ao React:
  // "Depois que esse componente aparecer na tela, execute esse código."
  //  O [] significa:
  // "Faça isso apenas uma vez."
  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchAnimeSeasons();
        setAnimeSeasons(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, []);

  if (!animeSeasons) {
    return <p>Carregando...</p>;
  }

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Animes da temporada</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* //limita a 16 animes por temporada, para não sobrecarregar a tela */}
        {animeSeasons.data.slice(0, 16).map((anime) => (
          <Anime key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </section>
  );
}
