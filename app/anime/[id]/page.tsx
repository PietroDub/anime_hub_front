import AnimeDetails from "@/components/AnimeDetailsItem";
import GetAnimeId from "@/Services/AnimeService";

type Props = {
    params: Promise<{ id: number }>;
  };


export default async function AnimePage({ params }: Props) {
    console.log("AnimePage params:", await params);
    return(
        <div>
            <AnimeDetails id={Number((await params).id)} />
        </div>
    );
}