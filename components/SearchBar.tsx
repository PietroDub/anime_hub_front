"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar(){
    
    const [nome, setNome] = useState("");
    
    const router = useRouter();
    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            router.push(`?search=${nome}`);
            }}
            className="max-w-7xl flex justify-center px-6 py-8 gap-x-5 text-blue-600">
            <input type="search" onChange={(e) => setNome(e.target.value)} 
            className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"></input>
            <button type="submit" className="bg-white h-10 px-5 pr-5 rounded-full text-sm focus:outline-none"><FaSearch/></button>
        </form>
    );
}