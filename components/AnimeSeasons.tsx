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

async function fetchAnimeSeasons() {
  try {
    const response = await fetch("http://127.0.0.1:5212/api/Anime/season");

    console.log("Status:", response.status);

    const text = await response.text();
    console.log("RAW RESPONSE:", text);

    return JSON.parse(text);
  } catch (error) {
    console.error("ERRO FETCH COMPLETO:", error);
    throw error;
  }
}

export default async function AnimeSeasons() {
  const animeSeasons = await fetchAnimeSeasons();
  return (
    <section>
      <h1>Animes da temporada:</h1>
      {/* <div className="flex gap-10">
        {animeSeasons.data.map((anime) => (
          <div key={anime.malId}>
            <h2>{anime.title}</h2>
            <p>{anime.synopsis}</p>
          </div>
        ))}
      </div> */}
    </section>
  );
}
