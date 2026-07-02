"use client";

import { createContext, useState, ReactNode } from "react";

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  id: number;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
//cria um contexto

export default function AuthProvider({ children } : AuthProviderProps) {
  // preenche um contexto
  const [user, setUser] = useState<User | null>(null);

  //deixa alguém logado
  function login(userData : User) {
    setUser(userData);
  }

  //desloga alguém
  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  return (
    // Tudo que estiver aqui dentro poderá acessar esse usuário.
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
        {children}
    </AuthContext.Provider>
  );
}
