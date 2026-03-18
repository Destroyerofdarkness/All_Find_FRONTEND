const searchBar = document.querySelector("#searchValue");
const result = document.querySelector(".results");

searchBar.addEventListener("input", async (e) => {
  const searchValue = searchBar.value.toLowerCase().trim();

  const res = await fetch("/getSearchContent", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });


  const {games, anime} = await res.json();
  if (!searchValue) {
    result.innerHTML = "";
    return;
  }

  const all = [...games, ...anime];
  const results = all.filter((data) => {
    return data.Name.toLowerCase().includes(searchValue);
  });
  result.innerHTML = results
    .map((data) => {
      return `<a href="/result/${data._id}"> 
    <img src="${data.link}" alt="${data.Name}">
    <h1>${data.Name}</h1>
    </a>`;
    })
    .join("");
});
