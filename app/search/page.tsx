import SearchBar from "@/components/SearchBar";
import Anime from "../../components/Anime";
import AnimeTop from "@/components/AnimeTop";
import AnimeGrid from "@/components/ByYearComponents/AnimeGrid";

type Props = {
  searchParams: Promise<{
    search?: string;
    page?: string;
  }>;
};
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

async function fetchSearchAnime(nome: string): Promise<AnimeSearchResponse> {
  const response = await fetch(
    `http://localhost:5212/api/Anime/titulo?title=${nome}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar anime");
  }

  const data = await response.json();
  return data;
}
export default async function SearchPage({ searchParams }: Props) {
  const params = await searchParams;
  const animes = await fetchSearchAnime(params.search || "naruto");
  const encontrouResultados = animes.data.length;

  return (
    <section>
      <SearchBar />

      {!params.search && (
        <div className="gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>
            Procure um anime para começar! ou Navegue pelos animes mais
            populares!
          </p>
        </div>
      )}
      {params.search && encontrouResultados > 0 && (
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimeGrid animes={animes} />
      </div>
      )}
      {params.search && encontrouResultados <= 0 && (
        <div>
          <p>Anime {(await searchParams).search} não encontrado!</p>
        </div>
      )}
      

      <AnimeTop />
    </section>
  );
}
