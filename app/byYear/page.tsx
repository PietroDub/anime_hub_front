import Anime from "@/components/Anime";
import SeasonSelector from "@/components/ByYearComponents/SeasonSelector";
import YearSelector from "@/components/ByYearComponents/YearSelector";
import Title from "@/components/Title";
import { stringify } from "querystring";
import { FaWheatAwnCircleExclamation } from "react-icons/fa6";

type SeasonArchiveResponse = {
  data: SeasonArchive[];
};

type Props = {
  searchParams: Promise<{
    year: Number;
    season?: string;
  }>;
};

type SeasonArchive = {
  year: number;
  seasons: string[];
};

type AnimeSearchResponse = {
  data: Anime[];
};

type Anime = {
  malId: number;
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

async function fetchAllSeasons(): Promise<SeasonArchiveResponse> {
  const response = await fetch(`http://localhost:5212/api/Anime/seasons`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar temporadas");
  }

  const data = await response.json();
  console.log(data);
  return data;
}

async function fetchSeason(
  year: number,
  season: string,
): Promise<AnimeSearchResponse> {
  const resposta = await fetch(
    `http://localhost:5212/api/Anime/season/year/station?year=${year}&station=${season}`,
    {
      cache: "no-store",
    },
  );

  if (!resposta.ok) {
    throw new Error("Erro ao buscar temporada");
  }

  const data = await resposta.json();
  console.log(data);
  return data;
}

export default async function ByYear({ searchParams }: Props) {
  const years = await fetchAllSeasons();
  const search = await searchParams;
  const selectedYear = Number(search.year ?? years.data[0].year);
  const selectedYearData = years.data.find(
    (item) => item.year === selectedYear,
  );

  if (!selectedYearData) {
    throw new Error("Ano inválido.");
  }

  const selectedSeason = search.season ?? selectedYearData?.seasons[0];

  const animes = await fetchSeason(selectedYear, selectedSeason);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <YearSelector data={years.data} />
      <SeasonSelector data={years.data} />

      <Title title="Animes da temporada:" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {animes.data.map((anime) => (
                  <Anime key={anime.malId} anime={anime} />
                ))}
      </div>
    </section>
  );
}
