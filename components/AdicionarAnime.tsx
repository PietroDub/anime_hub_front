"use client";

import { AnimeStatus } from "@/types/AnimeStatus";
import { useState } from "react";
import { X } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  AnimeId: number;
};

export default function AddAnimeModal({ isOpen, onClose, AnimeId }: Props) {
  if (!isOpen) return null;

  const [Status, setStatus] = useState<AnimeStatus>(AnimeStatus.Watching);
  const [EpisodesWatched, setEpisodes] = useState<number>(0);
  const [Score, setScore] = useState<number>(0);
  const token = localStorage.getItem("token");

  async function fetchAddAnime(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const body = {
      AnimeId,
      Status,
      EpisodesWatched,
      Score,
    };

    console.log(body);

    const response = await fetch("http://localhost:5212/api/UserAnimeList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        AnimeId,
        Status,
        EpisodesWatched,
        Score,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);

      onClose();
      alert("Anime adicionado com sucesso!");
    } else {
      const error = await response.text();

      console.log(error);
      alert(error);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4">
          <h2 className="text-xl font-bold text-zinc-800">Adicionar Anime</h2>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-red-500"
          >
            <X size={22} />
          </button>
        </div>

        <form onSubmit={fetchAddAnime} className="space-y-5 p-6">
          {/* Status */}
          <div className="space-y-2 text-zinc-700">
            <label className="text-sm font-medium text-zinc-700">Status</label>

            <select
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              onChange={(e) => setStatus(parseInt(e.target.value))}
              value={Status}
            >
              <option value={AnimeStatus.Watching}>Watching</option>
              <option value={AnimeStatus.Completed}>Completed</option>
              <option value={AnimeStatus.PlanToWatch}>Plan to Watch</option>
              <option value={AnimeStatus.Paused}>Paused</option>
              <option value={AnimeStatus.Dropped}>Dropped</option>
            </select>
          </div>

          {/* Episodes */}
          <div className="space-y-2 text-zinc-700">
            <label className="text-sm font-medium text-zinc-700">
              Episodes Watched
            </label>

            <input
              type="number"
              min={0}
              value={EpisodesWatched }
              onChange={(e) => setEpisodes(parseInt(e.target.value) || 0)}
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Score */}
          <div className="space-y-2 text-zinc-700 ">
            <label className="text-sm font-medium text-zinc-700">
              Own Score
            </label>

            <input
              type="number"
              min={0}
              max={10}
              value={Score}
              onChange={(e) => setScore(parseInt(e.target.value) || 0)}
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-zinc-300 px-5 py-2.5 font-medium text-zinc-700 transition hover:bg-zinc-100"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white shadow transition hover:bg-blue-700 hover:shadow-lg active:scale-95"
            >
              Adicionar Anime
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
