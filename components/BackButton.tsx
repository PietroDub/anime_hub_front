"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex w-fit items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-blue-600 hover:text-blue-600 hover:shadow-md active:scale-95"
    >
      <ArrowLeft size={18} />
      Voltar
    </button>
  );
}