"use client";

import { AnimeType } from "@/Services/AnimeTopService";
import { useState } from "react";
import Anime from "../Anime";
import AddAnimeModal from "../AdicionarAnime";

type Props = {
    animes : AnimeSearchResponse
}

export default function AnimeGrid({ animes }: Props) {
    const [selectedAnime, setSelectedAnime] = useState<AnimeType | null>(null);

    return (
        <>
            <div className="grid ...">
                {animes.data.map(anime => (
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
        </>
    );
}