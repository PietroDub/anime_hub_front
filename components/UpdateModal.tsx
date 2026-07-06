"use client";

import userService from "@/Services/userService";
import { UserAnime } from "@/types/UserAnime";
import { useState } from "react";
import { X } from "lucide-react";
import { toast } from 'sonner';

type Props = {
  onClose: () => void;
  animelist: UserAnime;
  onUpdated: () => void;
};

export default function UpdateModal({onClose, animelist, onUpdated }: Props) {

  const [status, setStatus] = useState(animelist.status);
  const [episodesWatched, setEpisodesWatched] = useState(animelist.episodesWatched);
  const [score, setScore] = useState(animelist.score);


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const data = await userService(
        animelist.itemId,
        status,
        episodesWatched,
        score,
      );
      console.log("Update successful:", data);

      toast.success("Anime atualizado com sucesso!"); // Show success toast
      
      onUpdated(); // Call the onUpdated callback to refresh the list
      onClose(); // Close the modal after successful update
    } catch (error) {
      console.error("Error updating anime:", error);
      toast.error("Erro ao atualizar anime."); // Show error toast
    }
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4">
          <h2 className="text-xl font-bold text-zinc-800">Atualizar Anime</h2>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-red-500"
          >
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          {/* Status */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">Status</label>

            <input
              type="number"
              value={status}
              onChange={(e) => setStatus(Number(e.target.value))}
              className="w-full rounded-lg border text-zinc-700 border-zinc-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Episodes */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">
              Episodes Watched
            </label>

            <input
              type="number"
              min={0}
              value={episodesWatched}
              onChange={(e) => setEpisodesWatched(Number(e.target.value))}
              className="w-full rounded-lg border text-zinc-700 border-zinc-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Score */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700">Score</label>

            <input
              type="number"
              min={0}
              max={10}
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
              className="w-full rounded-lg border text-zinc-700 border-zinc-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
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
              Atualizar Anime
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
