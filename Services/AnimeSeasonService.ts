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

export async function fetchAnimeSeasons(): Promise<AnimeSearchResponse> {
    const response = await fetch("http://localhost:5212/api/Anime/season");

  if (!response.ok) {
    throw new Error("Erro ao buscar os animes.");
  }

  return await response.json();
}