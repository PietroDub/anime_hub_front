import Anime from "./Anime";
import Title from "./Title";

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
async function fetchAnimeTop(): Promise<AnimeSearchResponse> {
  const response = await fetch("http://localhost:5212/api/Anime/top", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Erro ao buscar os animes.");
  }
  const data = await response.json();
  return data;
}

export default async function AnimeTop() {
  const response = await fetchAnimeTop();
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Title title="Animes em alta:" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* //limita a 16 animes por temporada, para não sobrecarregar a tela */}
        {response.data.slice(0, 8).map((anime) => (
          <Anime key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </section>
  );
}
