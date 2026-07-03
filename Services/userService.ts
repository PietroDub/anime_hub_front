export default async function userService(ID: string, status : number, episodesWatched : number, score : number, CompletedAt : string) {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:5212/api/UserAnimeList/${ID}`,{
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            status,
            episodesWatched,
            score,
            CompletedAt,
        })
    });
    
    if (!response.ok) {
      throw new Error("Erro ao criar conta!");
    }
    
    const data = await response.json();
    return data;
}