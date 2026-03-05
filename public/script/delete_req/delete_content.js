document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("deleteAnime")) {
    const animeId = e.target.dataset.id;
    const res = await fetch("http://localhost:4000/anime/delete", {
      method: "DELETE",
      body: JSON.stringify({animeId}),
        headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
  if(data.success){
    window.location.href = "/"
  }
  }else if (e.target.classList.contains("deleteGame")) {
    
    const gameId = e.target.dataset.id;
    const res = await fetch("http://localhost:4000/game/delete", {
      method: "DELETE",
      body: JSON.stringify({gameId}),
        headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
  if(data.success){
    window.location.href = "/"
  };
  }
});