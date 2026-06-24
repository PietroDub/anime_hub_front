import SearchBar from "@/components/SearchBar";

type Props = {
  searchParams: Promise<{
    search?: string;
    page?: string;
  }>;
};

async function fetchSearchAnime(nome: string) {
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

  return (
    <div>
      <h1>OI</h1>
      <SearchBar />
    </div>
  );
}
