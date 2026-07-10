export default async function GetAnimeId(animeId: number) {
    console.log("Service");
    console.log("animeId:", animeId);
    console.log("typeof:", typeof animeId);

    const response = await fetch(`http://localhost:5212/api/Anime/${animeId}`, {
        method: "GET",
    });

    if (response.ok) {
        const json = await response.json();

        console.log("Retornando:", json);

        return json;
    }

    const error = await response.text();
    throw new Error(error);
}