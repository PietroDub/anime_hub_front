type params = {
    id: string;
  };
export default async function AnimePage({params}: { params: params }) {

    console.log("AnimePage params:", params);
    // async function fetchAnimeListItem() {
    //     // Implementation for fetching individual anime list item
    //     try{
    //         const data = await getAnimeListItem(id);
    //         return data;            
    //     }
    //     catch(error){
    //         console.error("Error fetching anime list item:", error);
    //         return null;
    //     }
    // }

    // const data = await fetchAnimeListItem();

  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-4">
      <h1 className="text-3xl font-bold text-white">Anime</h1>
      <p>{params.id}</p>

      <div className="group flex gap-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:shadow-blue-600/10">
      </div>
    </div>
  );
}