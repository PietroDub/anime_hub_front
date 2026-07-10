"use client";

import { useEffect, useState } from "react";

import { AnimeType, GetTopAnime } from "@/Services/AnimeTopService";
import Title from "./Title";
import Anime from "./Anime";
import AddAnimeModal from "./AdicionarAnime";


export default function AnimeTop() {
  const [animes, setAnimes] = useState<AnimeType[]>([]);

const [selectedAnime, setSelectedAnime] = useState<AnimeType | null>(null);

useEffect(() => {
    async function carregar() {
        const response = await GetTopAnime();
        setAnimes(response.data);
    }

    carregar();
}, []);

return (
  <section>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Title title="Animes em alta:" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {animes.slice(0,8).map(anime => (
            <Anime
                key={anime.mal_id}
                anime={anime}
                onAdd={setSelectedAnime}
            />
        ))}

    </div>

    {selectedAnime && (
        <AddAnimeModal
            AnimeId={selectedAnime.mal_id}
            onClose={() => setSelectedAnime(null)}
        />
    )}
</section>
)
}
