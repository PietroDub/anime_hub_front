"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type SeasonArchive = {
  year: number;
  seasons: string[];
};

type Props = {
  data: SeasonArchive[];
};

export default function SeasonSelector({ data }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedSeason = searchParams.get("season");
  const year = searchParams.get("year")  || data[0].year;

  const selectedYear = data.find((item) => item.year === Number(year));

  const seasons = selectedYear?.seasons ?? [];
  return (
    <div className="mt-6 flex items-center justify-center">
  <div className="flex rounded-xl border border-zinc-800 bg-zinc-900/70 p-1 shadow-lg">
    {seasons.map((season) => (
      <button
        key={season}
        onClick={() =>
          router.push(`/byYear?year=${year}&season=${season}`)
        }
        className={`rounded-lg px-5 py-2 text-sm font-medium capitalize transition-all duration-200
          ${
            season === selectedSeason
              ? "bg-blue-400 text-white shadow-md"
              : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
          }`}
      >
        {season}
      </button>
    ))}
  </div>
</div>
  );
}
