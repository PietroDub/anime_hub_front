export async function getMyAnimeList() {
    const token = localStorage.getItem("token");
        const response = await fetch('http://localhost:5212/api/UserAnimeList/my-list',{
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        
        if(response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            const error = await response.text();
            console.log(error);
            return [];
        }
}