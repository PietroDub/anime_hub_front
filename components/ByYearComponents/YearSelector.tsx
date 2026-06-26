"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

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
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <button onClick={prev}>←</button>

      {visibleYears.map((year) => (
        <button
          key={year}
          onClick={() => {router.push(`/byYear?year=${year}`)}}
          style={{
            fontWeight: year === selectedYear ? "bold" : "normal",
            textDecoration: year === selectedYear ? "underline" : "none",
          }}
        >
          {year}
        </button>
      ))}

      <button onClick={next}>→</button>
    </div>
  );
}