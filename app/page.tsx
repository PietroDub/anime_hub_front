import AnimeSeasons from "@/components/AnimeSeasons";
import AnimeTop from "@/components/AnimeTop";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans not-dark:bg-indigo-100 dark:bg-gray-950">
     <main className="w-full flex items-center justify-center flex-col">
        <Banner />
        <AnimeTop />
        <AnimeSeasons />
     </main>
    </div>
  );
}
