export default function AnimeDetails({ anime }: { anime: AnimeResponse }) {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-white">{anime.title}</h1>
            <p className="text-sm text-white/80">{anime.synopsis}</p>   
        </div>
    );
}