import { AnimeStatus } from "./AnimeStatus";

export type UpdateAnime = {
    status: AnimeStatus;
    episodesWatched: number;
    score: number;
    CompletedAt: string | null;
}