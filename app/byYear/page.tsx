"use client";

import Anime from "@/components/Anime";
import AnimeGrid from "@/components/ByYearComponents/AnimeGrid";
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
        <AnimeGrid animes={animes} />
      </div>
    </section>
  );
}
