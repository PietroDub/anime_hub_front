"use client";

import userService from "@/Services/userService";
import { UserAnime } from "@/types/UserAnime";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  ID : string;
  animelist : UserAnime;
};

export default function UpdateModal({ isOpen, onClose, ID, animelist }: Props) {
    if (!isOpen) return null;
    
    const [status, setStatus] = useState(0);
    const [episodesWatched, setEpisodesWatched] = useState(0);
    const [score, setScore] = useState(0);
    const [completedAt, setCompletedAt] = useState("");


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const data = await userService(ID, status, episodesWatched, score, completedAt);
            console.log("Update successful:", data);
            onClose(); // Close the modal after successful update
        } catch (error) {
            console.error("Error updating anime:", error);
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Status" value={animelist.status} onChange={(e) => setStatus(Number(e.target.value))} />
                <input type="number" placeholder="Episodes Watched" value={animelist.episodesWatched} onChange={(e) => setEpisodesWatched(Number(e.target.value))} />
                <input type="number" placeholder="Score" value={animelist.score} onChange={(e) => setScore(Number(e.target.value))} />
                <input type="date" placeholder="Completed At" value={animelist.completedAt} onChange={(e) => setCompletedAt(e.target.value)} />
                <button type="submit">Update</button>
            </form>  
        </div>  
    );
}