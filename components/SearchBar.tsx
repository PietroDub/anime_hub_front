"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar(){
    const [nome, setNome] = useState("");
    const router = useRouter();
    return(
        <form >
            <input onChange={(e) => setNome(e.target.value)}></input>
            <button onSubmit={(e) => 
            router.push(`?search=${nome}`)}>Pesquisar</button>
        </form>

    );
}