"use client";

import { useEffect, useState } from "react";
import Anime from "./Anime";
import AddAnimeModal from "./AdicionarAnime";
import { fetchAnimeSeasons } from "@/Services/AnimeSeasonService";
import { AnimeType } from "@/Services/AnimeTopService";

export default function AnimeSeasons() {
  const [animes, setAnimes] = useState<AnimeType[]>([]);
  const [selectedAnime, setSelectedAnime] = useState<AnimeType | null>(null);

  //  Você está dizendo ao React:
  // "Depois que esse componente aparecer na tela, execute esse código."
  //  O [] significa:
  // "Faça isso apenas uma vez."
  useEffect(() => {
    async function carregar() {
      const response = await fetchAnimeSeasons();
      setAnimes(response.data);
    }

    carregar();
  }, []);


  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Animes da temporada</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* //limita a 16 animes por temporada, para não sobrecarregar a tela */}
        {animes.slice(0, 16).map((anime) => (
          <Anime onAdd={setSelectedAnime} key={anime.mal_id} anime={anime} />
        ))}
      </div>
      {selectedAnime && (
        <AddAnimeModal
          AnimeId={selectedAnime.mal_id}
          onClose={() => setSelectedAnime(null)}
        />
      )}
    </section>
  );
}
