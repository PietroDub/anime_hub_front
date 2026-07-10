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
  mal_id: number;
  title: string;
  type: string;
  score: number;
  synopsis: string;
  images: Images;
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