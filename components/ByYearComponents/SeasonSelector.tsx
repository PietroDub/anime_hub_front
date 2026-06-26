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
    <div>
      {seasons.map((season) => (
        <button
          onClick={() => {
            router.push(`/byYear?year=${year}&season=${season}`);
          }}
          style={{
            fontWeight: season === selectedSeason ? "bold" : "normal",
            textDecoration: season === selectedSeason ? "underline" : "none",
          }}
        >
          {season}
        </button>
      ))}
    </div>
  );
}
