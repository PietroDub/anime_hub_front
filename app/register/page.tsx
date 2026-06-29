"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CadastroPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function fetchCadastro(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch("http://localhost:5212/api/Auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar conta!");
    }

    router.push("/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
      <form
        onSubmit={fetchCadastro}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
      >
        <h1 className="mb-2 text-center text-3xl font-bold text-white">
          Criar Conta
        </h1>

        <p className="mb-8 text-center text-sm text-gray-400">
          Crie sua conta para começar a organizar seus animes.
        </p>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm text-white">
              Nome
            </label>

            <input
              type="text"
              minLength={3}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none transition focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@gmail.com"
              className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none transition focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white">
              Senha
            </label>

            <input
              type="password"
              minLength={8}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white outline-none transition focus:border-blue-600"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
          >
            Criar Conta
          </button>
        </div>
      </form>
    </main>
  );
}