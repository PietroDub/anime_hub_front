"use client";

import Anime from "@/components/Anime";
import { getMyAnimeList } from "@/Services/userAnimeList";
import { UserAnime } from "@/types/UserAnime";
import { useEffect, useState } from "react";


export default function MyList() {

    const [animes, setAnimes] = useState<UserAnime[]>([]);
    useEffect(() => {
        async function getList() {
            const data = await getMyAnimeList();
            setAnimes(data);
        }

        getList();
    }, []);

    console.log(animes);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Minha Lista de Animes</h1>
            {animes.map((anime: UserAnime) => (
                    <p key={anime.AnimeId}>{anime.AnimeId} - {anime.Status} - {anime.Score} - {anime.EpisodesWatched}/{anime.Title}</p>
                ))}
        </div>
    );
}