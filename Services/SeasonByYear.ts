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