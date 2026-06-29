"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SeasonArchive = {
  year: number;
  seasons: string[];
};

type Props = {
  data: SeasonArchive[];
  // selectedYear: number;
  // onSelectYear: (year: number) => void;
};

export default function YearSelector({data}: Props) {
  const windowSize = 3;
  const [startIndex, setStartIndex] = useState(0);
  // const [selectedYear, setSelectedYear] = useState(data[0].year);
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedYear =
    Number(searchParams.get("year"));

  // const years = useMemo(() => {
  //   return data.map((item) => item.year);
  // }, [data]);
//}
  // O useMemo serve para guardar (memorizar) o resultado de um cálculo, evitando refazê-lo em renderizações futuras quando as dependências não mudaram.

  const years = data.map((item) => item.year);

  const visibleYears = years.slice(
    startIndex,
    startIndex + windowSize
  );

  function next() {
    if (startIndex + windowSize < years.length) {
      setStartIndex((atual) => atual + 1);
    }
  }

  function prev() {
    if (startIndex > 0) {
      setStartIndex((atual) => atual - 1);
    }
  }

  return (
    <div className="flex items-center justify-center gap-3 py-5">
  <button
    onClick={prev}
    disabled={startIndex === 0}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
  >
    <ChevronLeft size={18} />
  </button>

  <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/70 p-2 shadow-lg">
    {visibleYears.map((year) => (
      <button
        key={year}
        onClick={() => router.push(`/byYear?year=${year}`)}
        className={`min-w-20 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200
        ${
          year === selectedYear
            ? "bg-blue-600 text-white shadow-md"
            : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
        }`}
      >
        {year}
      </button>
    ))}
  </div>

  <button
    onClick={next}
    disabled={startIndex + windowSize >= years.length}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
  >
    <ChevronRight size={18} />
  </button>
</div>
  );
}