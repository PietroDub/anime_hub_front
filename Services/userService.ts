export default async function userService(
  ID: string,
  status: number,
  episodesWatched: number,
  score: number,
) {
  const token = localStorage.getItem("token");
  const response = await fetch(
    `http://localhost:5212/api/UserAnimeList/${ID}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
        episodesWatched,
        score,
      }),
    },
  );

  if (!response.ok) {
    console.log("Response not OK:", response);
    const errorText = await response.text();
    console.error("Error response:", errorText);
    throw new Error(`HTTP error! status: ${response.status}`);
  }

}
