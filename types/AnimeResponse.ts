type AnimeResponse = {
    animeId: number;

    title: string;

    imageUrl: string;

    synopsis: string;
    background?: string;

    type: string;
    source: string;
    episodes?: number;

    animeStatus: string;
    rating: string;

    season?: string;
    year?: number;

    trailerUrl?: string;

    genres: string[];
    themes: string[];
    studios: string[];

}