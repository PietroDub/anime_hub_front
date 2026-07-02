"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext)!;

  async function fetchLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch("http://localhost:5212/api/Auth/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    localStorage.setItem("token", data.token);

    login(data.user);
    
    if (!response.ok) {
      alert("Email ou senha inválidos.");
      return;
    }

    login(data.user);

    router.push("/");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4">
      <form
        onSubmit={fetchLogin}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <h1 className="mb-2 text-center text-3xl font-bold text-white">
          Bem-vindo de volta
        </h1>

        <p className="mb-8 text-center text-sm text-gray-400">
          Entre na sua conta para continuar.
        </p>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm text-white">Email</label>

            <input
              type="email"
              required
              placeholder="email@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-white">Senha</label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
          >
            Entrar
          </button>

          <p className="text-center text-sm text-gray-400">
            Ainda não possui uma conta?
            <button
              type="button"
              onClick={() => router.push("/register")}
              className="ml-2 font-medium text-blue-500 hover:text-blue-400"
            >
              Criar conta
            </button>
          </p>
        </div>
      </form>
    </main>
  );
}
