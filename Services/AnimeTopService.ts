export type AnimeSearchResponse = {
  data: AnimeType[];
};

export type AnimeType = {
  mal_id: number;
  title: string;
  type: string;
  score: number;
  synopsis: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
};

export async function GetTopAnime(): Promise<AnimeSearchResponse> {
  const response = await fetch("http://localhost:5212/api/Anime/top");

  if (!response.ok) {
    throw new Error("Erro ao buscar os animes.");
  }

  return await response.json();
}