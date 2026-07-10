import AnimeDetails from "@/components/AnimeDetailsItem";
import AnimeListItem from "@/components/AnimeListItem";


type Props = {
    params: Promise<{ id: string }>;
  };

export default async function AnimePage({params}: Props) {
  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-4">
      <div className="group flex gap-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-blue-600/10">
        <AnimeListItem id={(await params).id} />
      </div>
    </div>
  );
}