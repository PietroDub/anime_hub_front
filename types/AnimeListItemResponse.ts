type AnimeListItemResponse = {
  itemId: string;
  animeId: number;

  // Títulos
  title: string;

  // Imagem
  imageUrl: string;

  // Informações do usuário
  status: number;
  episodesWatched: number;
  score: number;

  // Informações do anime
  synopsis: string;
  background?: string;

  type: string;
  source: string;
  episodes?: number;

  rating: string;

  season?: string;
  year?: number;

  trailerUrl?: string;

  genres: string[];
  themes: string[];
  studios: string[];
};